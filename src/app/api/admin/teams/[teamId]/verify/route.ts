export async function PATCH(req: Request, context: any) {
    try {
        const { params } = context;
        const { teamId } = params;

        const session = await auth();

        if (!session || !session.user || session.user.role !== 'ADMIN') {
            return new NextResponse(
                'Forbidden: Only Administrators can verify teams.',
                { status: 403 }
            );
        }

        const body = await req.json();
        const validated = VerifySchema.safeParse(body);

        if (!validated.success) {
            return new NextResponse('Invalid input.', { status: 400 });
        }

        const { isVerified } = validated.data;
        const adminId = session.user.id;
        const action = isVerified
            ? 'Verified Team Affiliation'
            : 'Unverified Team Affiliation';

        const [updatedTeam] = await db.$transaction([
            db.team.update({
                where: { id: teamId },
                data: { affiliationFeePaid: isVerified },
                select: { id: true, name: true, affiliationFeePaid: true }
            }),
            db.adminLog.create({
                data: {
                    userId: adminId,
                    action: `${action} for Team ID: ${teamId}`,
                    targetId: teamId,
                }
            })
        ]);

        return NextResponse.json(
            {
                message: `Team '${updatedTeam.name}' successfully set to ${
                    isVerified ? 'VERIFIED' : 'UNVERIFIED'
                }.`,
                team: updatedTeam,
            },
            { status: 200 }
        );

    } catch (error) {
        console.error('Admin Team Verification API Error:', error);
        return new NextResponse(
            'Internal Server Error during team verification.',
            { status: 500 }
        );
    }
}

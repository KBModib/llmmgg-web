// src/server/email/sendVerificationEmail.ts

/**
 * Sends a verification code to the specified user email.
 * * NOTE: In a real application, you would replace this simulation 
 * with an actual service like SendGrid, Resend, or Nodemailer.
 *
 * @param email The user's email address.
 * @param code The 6-digit verification code.
 */
export async function sendVerificationEmail(email: string, code: string): Promise<void> {
    
    // --- START: Simulation Code ---
    console.log(`
        ========================================
        📧 EMAIL SENT SIMULATION
        ========================================
        TO: ${email}
        SUBJECT: Your Registration Verification Code
        BODY: 
            Hello,

            Thank you for registering!
            Please use the following code to verify your account:

            Verification Code: ${code}

            This code expires in 10 minutes.
            
            The Team Management App
        ========================================
    `);
    // --- END: Simulation Code ---
    
    // In a real setup, you would use:
    // await emailService.send({ 
    //     to: email, 
    //     subject: 'Your Verification Code', 
    //     html: `<p>Your code is <strong>${code}</strong></p>` 
    // });
    
    // For now, we just rely on the console log for confirmation.
}
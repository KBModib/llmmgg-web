
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Team
 * 
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>
/**
 * Model PlayerProfile
 * 
 */
export type PlayerProfile = $Result.DefaultSelection<Prisma.$PlayerProfilePayload>
/**
 * Model TeamStats
 * 
 */
export type TeamStats = $Result.DefaultSelection<Prisma.$TeamStatsPayload>
/**
 * Model PlayerStats
 * 
 */
export type PlayerStats = $Result.DefaultSelection<Prisma.$PlayerStatsPayload>
/**
 * Model Fixture
 * 
 */
export type Fixture = $Result.DefaultSelection<Prisma.$FixturePayload>
/**
 * Model MatchFormation
 * 
 */
export type MatchFormation = $Result.DefaultSelection<Prisma.$MatchFormationPayload>
/**
 * Model MatchLog
 * 
 */
export type MatchLog = $Result.DefaultSelection<Prisma.$MatchLogPayload>
/**
 * Model MatchPlayerLog
 * 
 */
export type MatchPlayerLog = $Result.DefaultSelection<Prisma.$MatchPlayerLogPayload>
/**
 * Model Tournament
 * 
 */
export type Tournament = $Result.DefaultSelection<Prisma.$TournamentPayload>
/**
 * Model AdminLog
 * 
 */
export type AdminLog = $Result.DefaultSelection<Prisma.$AdminLogPayload>
/**
 * Model TournamentStat
 * 
 */
export type TournamentStat = $Result.DefaultSelection<Prisma.$TournamentStatPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  COACH: 'COACH',
  PLAYER: 'PLAYER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const MatchStatus: {
  SCHEDULED: 'SCHEDULED',
  LIVE: 'LIVE',
  COMPLETED: 'COMPLETED',
  POSTPONED: 'POSTPONED',
  CANCELED: 'CANCELED'
};

export type MatchStatus = (typeof MatchStatus)[keyof typeof MatchStatus]


export const LogType: {
  GOAL: 'GOAL',
  ASSIST: 'ASSIST',
  YELLOW_CARD: 'YELLOW_CARD',
  RED_CARD: 'RED_CARD',
  SUBSTITUTION_IN: 'SUBSTITUTION_IN',
  SUBSTITUTION_OUT: 'SUBSTITUTION_OUT',
  COMMENTARY: 'COMMENTARY'
};

export type LogType = (typeof LogType)[keyof typeof LogType]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type MatchStatus = $Enums.MatchStatus

export const MatchStatus: typeof $Enums.MatchStatus

export type LogType = $Enums.LogType

export const LogType: typeof $Enums.LogType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playerProfile`: Exposes CRUD operations for the **PlayerProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlayerProfiles
    * const playerProfiles = await prisma.playerProfile.findMany()
    * ```
    */
  get playerProfile(): Prisma.PlayerProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teamStats`: Exposes CRUD operations for the **TeamStats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeamStats
    * const teamStats = await prisma.teamStats.findMany()
    * ```
    */
  get teamStats(): Prisma.TeamStatsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playerStats`: Exposes CRUD operations for the **PlayerStats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlayerStats
    * const playerStats = await prisma.playerStats.findMany()
    * ```
    */
  get playerStats(): Prisma.PlayerStatsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fixture`: Exposes CRUD operations for the **Fixture** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fixtures
    * const fixtures = await prisma.fixture.findMany()
    * ```
    */
  get fixture(): Prisma.FixtureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.matchFormation`: Exposes CRUD operations for the **MatchFormation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MatchFormations
    * const matchFormations = await prisma.matchFormation.findMany()
    * ```
    */
  get matchFormation(): Prisma.MatchFormationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.matchLog`: Exposes CRUD operations for the **MatchLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MatchLogs
    * const matchLogs = await prisma.matchLog.findMany()
    * ```
    */
  get matchLog(): Prisma.MatchLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.matchPlayerLog`: Exposes CRUD operations for the **MatchPlayerLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MatchPlayerLogs
    * const matchPlayerLogs = await prisma.matchPlayerLog.findMany()
    * ```
    */
  get matchPlayerLog(): Prisma.MatchPlayerLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tournament`: Exposes CRUD operations for the **Tournament** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tournaments
    * const tournaments = await prisma.tournament.findMany()
    * ```
    */
  get tournament(): Prisma.TournamentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adminLog`: Exposes CRUD operations for the **AdminLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminLogs
    * const adminLogs = await prisma.adminLog.findMany()
    * ```
    */
  get adminLog(): Prisma.AdminLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tournamentStat`: Exposes CRUD operations for the **TournamentStat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TournamentStats
    * const tournamentStats = await prisma.tournamentStat.findMany()
    * ```
    */
  get tournamentStat(): Prisma.TournamentStatDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    Team: 'Team',
    PlayerProfile: 'PlayerProfile',
    TeamStats: 'TeamStats',
    PlayerStats: 'PlayerStats',
    Fixture: 'Fixture',
    MatchFormation: 'MatchFormation',
    MatchLog: 'MatchLog',
    MatchPlayerLog: 'MatchPlayerLog',
    Tournament: 'Tournament',
    AdminLog: 'AdminLog',
    TournamentStat: 'TournamentStat'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "account" | "session" | "verificationToken" | "team" | "playerProfile" | "teamStats" | "playerStats" | "fixture" | "matchFormation" | "matchLog" | "matchPlayerLog" | "tournament" | "adminLog" | "tournamentStat"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>
        fields: Prisma.TeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
      PlayerProfile: {
        payload: Prisma.$PlayerProfilePayload<ExtArgs>
        fields: Prisma.PlayerProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerProfilePayload>
          }
          findFirst: {
            args: Prisma.PlayerProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerProfilePayload>
          }
          findMany: {
            args: Prisma.PlayerProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerProfilePayload>[]
          }
          create: {
            args: Prisma.PlayerProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerProfilePayload>
          }
          createMany: {
            args: Prisma.PlayerProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayerProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerProfilePayload>[]
          }
          delete: {
            args: Prisma.PlayerProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerProfilePayload>
          }
          update: {
            args: Prisma.PlayerProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerProfilePayload>
          }
          deleteMany: {
            args: Prisma.PlayerProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayerProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerProfilePayload>[]
          }
          upsert: {
            args: Prisma.PlayerProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerProfilePayload>
          }
          aggregate: {
            args: Prisma.PlayerProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayerProfile>
          }
          groupBy: {
            args: Prisma.PlayerProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerProfileCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerProfileCountAggregateOutputType> | number
          }
        }
      }
      TeamStats: {
        payload: Prisma.$TeamStatsPayload<ExtArgs>
        fields: Prisma.TeamStatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamStatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamStatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamStatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamStatsPayload>
          }
          findFirst: {
            args: Prisma.TeamStatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamStatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamStatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamStatsPayload>
          }
          findMany: {
            args: Prisma.TeamStatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamStatsPayload>[]
          }
          create: {
            args: Prisma.TeamStatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamStatsPayload>
          }
          createMany: {
            args: Prisma.TeamStatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamStatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamStatsPayload>[]
          }
          delete: {
            args: Prisma.TeamStatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamStatsPayload>
          }
          update: {
            args: Prisma.TeamStatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamStatsPayload>
          }
          deleteMany: {
            args: Prisma.TeamStatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamStatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamStatsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamStatsPayload>[]
          }
          upsert: {
            args: Prisma.TeamStatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamStatsPayload>
          }
          aggregate: {
            args: Prisma.TeamStatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeamStats>
          }
          groupBy: {
            args: Prisma.TeamStatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamStatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamStatsCountArgs<ExtArgs>
            result: $Utils.Optional<TeamStatsCountAggregateOutputType> | number
          }
        }
      }
      PlayerStats: {
        payload: Prisma.$PlayerStatsPayload<ExtArgs>
        fields: Prisma.PlayerStatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerStatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerStatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatsPayload>
          }
          findFirst: {
            args: Prisma.PlayerStatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerStatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatsPayload>
          }
          findMany: {
            args: Prisma.PlayerStatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatsPayload>[]
          }
          create: {
            args: Prisma.PlayerStatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatsPayload>
          }
          createMany: {
            args: Prisma.PlayerStatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayerStatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatsPayload>[]
          }
          delete: {
            args: Prisma.PlayerStatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatsPayload>
          }
          update: {
            args: Prisma.PlayerStatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatsPayload>
          }
          deleteMany: {
            args: Prisma.PlayerStatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerStatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayerStatsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatsPayload>[]
          }
          upsert: {
            args: Prisma.PlayerStatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatsPayload>
          }
          aggregate: {
            args: Prisma.PlayerStatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayerStats>
          }
          groupBy: {
            args: Prisma.PlayerStatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerStatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerStatsCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerStatsCountAggregateOutputType> | number
          }
        }
      }
      Fixture: {
        payload: Prisma.$FixturePayload<ExtArgs>
        fields: Prisma.FixtureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FixtureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FixturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FixtureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FixturePayload>
          }
          findFirst: {
            args: Prisma.FixtureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FixturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FixtureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FixturePayload>
          }
          findMany: {
            args: Prisma.FixtureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FixturePayload>[]
          }
          create: {
            args: Prisma.FixtureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FixturePayload>
          }
          createMany: {
            args: Prisma.FixtureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FixtureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FixturePayload>[]
          }
          delete: {
            args: Prisma.FixtureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FixturePayload>
          }
          update: {
            args: Prisma.FixtureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FixturePayload>
          }
          deleteMany: {
            args: Prisma.FixtureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FixtureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FixtureUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FixturePayload>[]
          }
          upsert: {
            args: Prisma.FixtureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FixturePayload>
          }
          aggregate: {
            args: Prisma.FixtureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFixture>
          }
          groupBy: {
            args: Prisma.FixtureGroupByArgs<ExtArgs>
            result: $Utils.Optional<FixtureGroupByOutputType>[]
          }
          count: {
            args: Prisma.FixtureCountArgs<ExtArgs>
            result: $Utils.Optional<FixtureCountAggregateOutputType> | number
          }
        }
      }
      MatchFormation: {
        payload: Prisma.$MatchFormationPayload<ExtArgs>
        fields: Prisma.MatchFormationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchFormationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchFormationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchFormationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchFormationPayload>
          }
          findFirst: {
            args: Prisma.MatchFormationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchFormationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchFormationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchFormationPayload>
          }
          findMany: {
            args: Prisma.MatchFormationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchFormationPayload>[]
          }
          create: {
            args: Prisma.MatchFormationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchFormationPayload>
          }
          createMany: {
            args: Prisma.MatchFormationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchFormationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchFormationPayload>[]
          }
          delete: {
            args: Prisma.MatchFormationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchFormationPayload>
          }
          update: {
            args: Prisma.MatchFormationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchFormationPayload>
          }
          deleteMany: {
            args: Prisma.MatchFormationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchFormationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatchFormationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchFormationPayload>[]
          }
          upsert: {
            args: Prisma.MatchFormationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchFormationPayload>
          }
          aggregate: {
            args: Prisma.MatchFormationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatchFormation>
          }
          groupBy: {
            args: Prisma.MatchFormationGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchFormationGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchFormationCountArgs<ExtArgs>
            result: $Utils.Optional<MatchFormationCountAggregateOutputType> | number
          }
        }
      }
      MatchLog: {
        payload: Prisma.$MatchLogPayload<ExtArgs>
        fields: Prisma.MatchLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchLogPayload>
          }
          findFirst: {
            args: Prisma.MatchLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchLogPayload>
          }
          findMany: {
            args: Prisma.MatchLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchLogPayload>[]
          }
          create: {
            args: Prisma.MatchLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchLogPayload>
          }
          createMany: {
            args: Prisma.MatchLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchLogPayload>[]
          }
          delete: {
            args: Prisma.MatchLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchLogPayload>
          }
          update: {
            args: Prisma.MatchLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchLogPayload>
          }
          deleteMany: {
            args: Prisma.MatchLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatchLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchLogPayload>[]
          }
          upsert: {
            args: Prisma.MatchLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchLogPayload>
          }
          aggregate: {
            args: Prisma.MatchLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatchLog>
          }
          groupBy: {
            args: Prisma.MatchLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchLogCountArgs<ExtArgs>
            result: $Utils.Optional<MatchLogCountAggregateOutputType> | number
          }
        }
      }
      MatchPlayerLog: {
        payload: Prisma.$MatchPlayerLogPayload<ExtArgs>
        fields: Prisma.MatchPlayerLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchPlayerLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPlayerLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchPlayerLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPlayerLogPayload>
          }
          findFirst: {
            args: Prisma.MatchPlayerLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPlayerLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchPlayerLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPlayerLogPayload>
          }
          findMany: {
            args: Prisma.MatchPlayerLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPlayerLogPayload>[]
          }
          create: {
            args: Prisma.MatchPlayerLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPlayerLogPayload>
          }
          createMany: {
            args: Prisma.MatchPlayerLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchPlayerLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPlayerLogPayload>[]
          }
          delete: {
            args: Prisma.MatchPlayerLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPlayerLogPayload>
          }
          update: {
            args: Prisma.MatchPlayerLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPlayerLogPayload>
          }
          deleteMany: {
            args: Prisma.MatchPlayerLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchPlayerLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatchPlayerLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPlayerLogPayload>[]
          }
          upsert: {
            args: Prisma.MatchPlayerLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPlayerLogPayload>
          }
          aggregate: {
            args: Prisma.MatchPlayerLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatchPlayerLog>
          }
          groupBy: {
            args: Prisma.MatchPlayerLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchPlayerLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchPlayerLogCountArgs<ExtArgs>
            result: $Utils.Optional<MatchPlayerLogCountAggregateOutputType> | number
          }
        }
      }
      Tournament: {
        payload: Prisma.$TournamentPayload<ExtArgs>
        fields: Prisma.TournamentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TournamentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TournamentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          findFirst: {
            args: Prisma.TournamentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TournamentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          findMany: {
            args: Prisma.TournamentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>[]
          }
          create: {
            args: Prisma.TournamentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          createMany: {
            args: Prisma.TournamentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TournamentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>[]
          }
          delete: {
            args: Prisma.TournamentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          update: {
            args: Prisma.TournamentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          deleteMany: {
            args: Prisma.TournamentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TournamentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TournamentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>[]
          }
          upsert: {
            args: Prisma.TournamentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          aggregate: {
            args: Prisma.TournamentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTournament>
          }
          groupBy: {
            args: Prisma.TournamentGroupByArgs<ExtArgs>
            result: $Utils.Optional<TournamentGroupByOutputType>[]
          }
          count: {
            args: Prisma.TournamentCountArgs<ExtArgs>
            result: $Utils.Optional<TournamentCountAggregateOutputType> | number
          }
        }
      }
      AdminLog: {
        payload: Prisma.$AdminLogPayload<ExtArgs>
        fields: Prisma.AdminLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminLogPayload>
          }
          findFirst: {
            args: Prisma.AdminLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminLogPayload>
          }
          findMany: {
            args: Prisma.AdminLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminLogPayload>[]
          }
          create: {
            args: Prisma.AdminLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminLogPayload>
          }
          createMany: {
            args: Prisma.AdminLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminLogPayload>[]
          }
          delete: {
            args: Prisma.AdminLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminLogPayload>
          }
          update: {
            args: Prisma.AdminLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminLogPayload>
          }
          deleteMany: {
            args: Prisma.AdminLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminLogPayload>[]
          }
          upsert: {
            args: Prisma.AdminLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminLogPayload>
          }
          aggregate: {
            args: Prisma.AdminLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminLog>
          }
          groupBy: {
            args: Prisma.AdminLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminLogCountArgs<ExtArgs>
            result: $Utils.Optional<AdminLogCountAggregateOutputType> | number
          }
        }
      }
      TournamentStat: {
        payload: Prisma.$TournamentStatPayload<ExtArgs>
        fields: Prisma.TournamentStatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TournamentStatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentStatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TournamentStatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentStatPayload>
          }
          findFirst: {
            args: Prisma.TournamentStatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentStatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TournamentStatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentStatPayload>
          }
          findMany: {
            args: Prisma.TournamentStatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentStatPayload>[]
          }
          create: {
            args: Prisma.TournamentStatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentStatPayload>
          }
          createMany: {
            args: Prisma.TournamentStatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TournamentStatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentStatPayload>[]
          }
          delete: {
            args: Prisma.TournamentStatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentStatPayload>
          }
          update: {
            args: Prisma.TournamentStatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentStatPayload>
          }
          deleteMany: {
            args: Prisma.TournamentStatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TournamentStatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TournamentStatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentStatPayload>[]
          }
          upsert: {
            args: Prisma.TournamentStatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentStatPayload>
          }
          aggregate: {
            args: Prisma.TournamentStatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTournamentStat>
          }
          groupBy: {
            args: Prisma.TournamentStatGroupByArgs<ExtArgs>
            result: $Utils.Optional<TournamentStatGroupByOutputType>[]
          }
          count: {
            args: Prisma.TournamentStatCountArgs<ExtArgs>
            result: $Utils.Optional<TournamentStatCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    account?: AccountOmit
    session?: SessionOmit
    verificationToken?: VerificationTokenOmit
    team?: TeamOmit
    playerProfile?: PlayerProfileOmit
    teamStats?: TeamStatsOmit
    playerStats?: PlayerStatsOmit
    fixture?: FixtureOmit
    matchFormation?: MatchFormationOmit
    matchLog?: MatchLogOmit
    matchPlayerLog?: MatchPlayerLogOmit
    tournament?: TournamentOmit
    adminLog?: AdminLogOmit
    tournamentStat?: TournamentStatOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
    adminLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    adminLogs?: boolean | UserCountOutputTypeCountAdminLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAdminLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminLogWhereInput
  }


  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    players: number
    homeFixtures: number
    awayFixtures: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    players?: boolean | TeamCountOutputTypeCountPlayersArgs
    homeFixtures?: boolean | TeamCountOutputTypeCountHomeFixturesArgs
    awayFixtures?: boolean | TeamCountOutputTypeCountAwayFixturesArgs
  }

  // Custom InputTypes
  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerProfileWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountHomeFixturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FixtureWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountAwayFixturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FixtureWhereInput
  }


  /**
   * Count Type PlayerProfileCountOutputType
   */

  export type PlayerProfileCountOutputType = {
    matchLogs: number
  }

  export type PlayerProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matchLogs?: boolean | PlayerProfileCountOutputTypeCountMatchLogsArgs
  }

  // Custom InputTypes
  /**
   * PlayerProfileCountOutputType without action
   */
  export type PlayerProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfileCountOutputType
     */
    select?: PlayerProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlayerProfileCountOutputType without action
   */
  export type PlayerProfileCountOutputTypeCountMatchLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchPlayerLogWhereInput
  }


  /**
   * Count Type FixtureCountOutputType
   */

  export type FixtureCountOutputType = {
    matchLogs: number
  }

  export type FixtureCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matchLogs?: boolean | FixtureCountOutputTypeCountMatchLogsArgs
  }

  // Custom InputTypes
  /**
   * FixtureCountOutputType without action
   */
  export type FixtureCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FixtureCountOutputType
     */
    select?: FixtureCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FixtureCountOutputType without action
   */
  export type FixtureCountOutputTypeCountMatchLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchLogWhereInput
  }


  /**
   * Count Type MatchLogCountOutputType
   */

  export type MatchLogCountOutputType = {
    playerLogs: number
  }

  export type MatchLogCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playerLogs?: boolean | MatchLogCountOutputTypeCountPlayerLogsArgs
  }

  // Custom InputTypes
  /**
   * MatchLogCountOutputType without action
   */
  export type MatchLogCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchLogCountOutputType
     */
    select?: MatchLogCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MatchLogCountOutputType without action
   */
  export type MatchLogCountOutputTypeCountPlayerLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchPlayerLogWhereInput
  }


  /**
   * Count Type TournamentCountOutputType
   */

  export type TournamentCountOutputType = {
    fixtures: number
  }

  export type TournamentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fixtures?: boolean | TournamentCountOutputTypeCountFixturesArgs
  }

  // Custom InputTypes
  /**
   * TournamentCountOutputType without action
   */
  export type TournamentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentCountOutputType
     */
    select?: TournamentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TournamentCountOutputType without action
   */
  export type TournamentCountOutputTypeCountFixturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FixtureWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    verificationToken: string | null
    verificationTokenExpires: Date | null
    emailVerified: Date | null
    dateOfBirth: Date | null
    idNumber: string | null
    image: string | null
    managedTeamId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    verificationToken: string | null
    verificationTokenExpires: Date | null
    emailVerified: Date | null
    dateOfBirth: Date | null
    idNumber: string | null
    image: string | null
    managedTeamId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    verificationToken: number
    verificationTokenExpires: number
    emailVerified: number
    dateOfBirth: number
    idNumber: number
    image: number
    managedTeamId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    verificationToken?: true
    verificationTokenExpires?: true
    emailVerified?: true
    dateOfBirth?: true
    idNumber?: true
    image?: true
    managedTeamId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    verificationToken?: true
    verificationTokenExpires?: true
    emailVerified?: true
    dateOfBirth?: true
    idNumber?: true
    image?: true
    managedTeamId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    verificationToken?: true
    verificationTokenExpires?: true
    emailVerified?: true
    dateOfBirth?: true
    idNumber?: true
    image?: true
    managedTeamId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    password: string
    role: $Enums.UserRole
    verificationToken: string | null
    verificationTokenExpires: Date | null
    emailVerified: Date | null
    dateOfBirth: Date | null
    idNumber: string | null
    image: string | null
    managedTeamId: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    verificationToken?: boolean
    verificationTokenExpires?: boolean
    emailVerified?: boolean
    dateOfBirth?: boolean
    idNumber?: boolean
    image?: boolean
    managedTeamId?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    managedTeam?: boolean | User$managedTeamArgs<ExtArgs>
    playerProfile?: boolean | User$playerProfileArgs<ExtArgs>
    adminLogs?: boolean | User$adminLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    verificationToken?: boolean
    verificationTokenExpires?: boolean
    emailVerified?: boolean
    dateOfBirth?: boolean
    idNumber?: boolean
    image?: boolean
    managedTeamId?: boolean
    managedTeam?: boolean | User$managedTeamArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    verificationToken?: boolean
    verificationTokenExpires?: boolean
    emailVerified?: boolean
    dateOfBirth?: boolean
    idNumber?: boolean
    image?: boolean
    managedTeamId?: boolean
    managedTeam?: boolean | User$managedTeamArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    verificationToken?: boolean
    verificationTokenExpires?: boolean
    emailVerified?: boolean
    dateOfBirth?: boolean
    idNumber?: boolean
    image?: boolean
    managedTeamId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "verificationToken" | "verificationTokenExpires" | "emailVerified" | "dateOfBirth" | "idNumber" | "image" | "managedTeamId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    managedTeam?: boolean | User$managedTeamArgs<ExtArgs>
    playerProfile?: boolean | User$playerProfileArgs<ExtArgs>
    adminLogs?: boolean | User$adminLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    managedTeam?: boolean | User$managedTeamArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    managedTeam?: boolean | User$managedTeamArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      managedTeam: Prisma.$TeamPayload<ExtArgs> | null
      playerProfile: Prisma.$PlayerProfilePayload<ExtArgs> | null
      adminLogs: Prisma.$AdminLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      password: string
      role: $Enums.UserRole
      verificationToken: string | null
      verificationTokenExpires: Date | null
      emailVerified: Date | null
      dateOfBirth: Date | null
      idNumber: string | null
      image: string | null
      managedTeamId: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    managedTeam<T extends User$managedTeamArgs<ExtArgs> = {}>(args?: Subset<T, User$managedTeamArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    playerProfile<T extends User$playerProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$playerProfileArgs<ExtArgs>>): Prisma__PlayerProfileClient<$Result.GetResult<Prisma.$PlayerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    adminLogs<T extends User$adminLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$adminLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly verificationToken: FieldRef<"User", 'String'>
    readonly verificationTokenExpires: FieldRef<"User", 'DateTime'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly dateOfBirth: FieldRef<"User", 'DateTime'>
    readonly idNumber: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly managedTeamId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.managedTeam
   */
  export type User$managedTeamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
  }

  /**
   * User.playerProfile
   */
  export type User$playerProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfile
     */
    select?: PlayerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerProfile
     */
    omit?: PlayerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerProfileInclude<ExtArgs> | null
    where?: PlayerProfileWhereInput
  }

  /**
   * User.adminLogs
   */
  export type User$adminLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLog
     */
    select?: AdminLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminLog
     */
    omit?: AdminLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminLogInclude<ExtArgs> | null
    where?: AdminLogWhereInput
    orderBy?: AdminLogOrderByWithRelationInput | AdminLogOrderByWithRelationInput[]
    cursor?: AdminLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdminLogScalarFieldEnum | AdminLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
    refresh_token_expires_in: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
    refresh_token_expires_in: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    refresh_token_expires_in: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
    refresh_token_expires_in?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
    refresh_token_expires_in?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state" | "refresh_token_expires_in", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
      refresh_token_expires_in: number | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
    readonly refresh_token_expires_in: FieldRef<"Account", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamMinAggregateOutputType = {
    id: string | null
    name: string | null
    affiliationFeePaid: boolean | null
    createdAt: Date | null
  }

  export type TeamMaxAggregateOutputType = {
    id: string | null
    name: string | null
    affiliationFeePaid: boolean | null
    createdAt: Date | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    name: number
    affiliationFeePaid: number
    createdAt: number
    _all: number
  }


  export type TeamMinAggregateInputType = {
    id?: true
    name?: true
    affiliationFeePaid?: true
    createdAt?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    name?: true
    affiliationFeePaid?: true
    createdAt?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    name?: true
    affiliationFeePaid?: true
    createdAt?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: string
    name: string
    affiliationFeePaid: boolean
    createdAt: Date
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    affiliationFeePaid?: boolean
    createdAt?: boolean
    coach?: boolean | Team$coachArgs<ExtArgs>
    players?: boolean | Team$playersArgs<ExtArgs>
    homeFixtures?: boolean | Team$homeFixturesArgs<ExtArgs>
    awayFixtures?: boolean | Team$awayFixturesArgs<ExtArgs>
    teamStats?: boolean | Team$teamStatsArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    affiliationFeePaid?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["team"]>

  export type TeamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    affiliationFeePaid?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["team"]>

  export type TeamSelectScalar = {
    id?: boolean
    name?: boolean
    affiliationFeePaid?: boolean
    createdAt?: boolean
  }

  export type TeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "affiliationFeePaid" | "createdAt", ExtArgs["result"]["team"]>
  export type TeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coach?: boolean | Team$coachArgs<ExtArgs>
    players?: boolean | Team$playersArgs<ExtArgs>
    homeFixtures?: boolean | Team$homeFixturesArgs<ExtArgs>
    awayFixtures?: boolean | Team$awayFixturesArgs<ExtArgs>
    teamStats?: boolean | Team$teamStatsArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TeamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {
      coach: Prisma.$UserPayload<ExtArgs> | null
      players: Prisma.$PlayerProfilePayload<ExtArgs>[]
      homeFixtures: Prisma.$FixturePayload<ExtArgs>[]
      awayFixtures: Prisma.$FixturePayload<ExtArgs>[]
      teamStats: Prisma.$TeamStatsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      affiliationFeePaid: boolean
      createdAt: Date
    }, ExtArgs["result"]["team"]>
    composites: {}
  }

  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = $Result.GetResult<Prisma.$TeamPayload, S>

  type TeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team'], meta: { name: 'Team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamFindUniqueArgs>(args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamFindFirstArgs>(args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamFindManyArgs>(args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
     */
    create<T extends TeamCreateArgs>(args: SelectSubset<T, TeamCreateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teams.
     * @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamCreateManyArgs>(args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teams and returns the data saved in the database.
     * @param {TeamCreateManyAndReturnArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
     */
    delete<T extends TeamDeleteArgs>(args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamUpdateArgs>(args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamDeleteManyArgs>(args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamUpdateManyArgs>(args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams and returns the data updated in the database.
     * @param {TeamUpdateManyAndReturnArgs} args - Arguments to update many Teams.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeamUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends TeamUpsertArgs>(args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Team model
   */
  readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    coach<T extends Team$coachArgs<ExtArgs> = {}>(args?: Subset<T, Team$coachArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    players<T extends Team$playersArgs<ExtArgs> = {}>(args?: Subset<T, Team$playersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    homeFixtures<T extends Team$homeFixturesArgs<ExtArgs> = {}>(args?: Subset<T, Team$homeFixturesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    awayFixtures<T extends Team$awayFixturesArgs<ExtArgs> = {}>(args?: Subset<T, Team$awayFixturesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teamStats<T extends Team$teamStatsArgs<ExtArgs> = {}>(args?: Subset<T, Team$teamStatsArgs<ExtArgs>>): Prisma__TeamStatsClient<$Result.GetResult<Prisma.$TeamStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Team model
   */
  interface TeamFieldRefs {
    readonly id: FieldRef<"Team", 'String'>
    readonly name: FieldRef<"Team", 'String'>
    readonly affiliationFeePaid: FieldRef<"Team", 'Boolean'>
    readonly createdAt: FieldRef<"Team", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findMany
   */
  export type TeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team create
   */
  export type TeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }

  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team createManyAndReturn
   */
  export type TeamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team update
   */
  export type TeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team updateManyAndReturn
   */
  export type TeamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team upsert
   */
  export type TeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }

  /**
   * Team delete
   */
  export type TeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to delete.
     */
    limit?: number
  }

  /**
   * Team.coach
   */
  export type Team$coachArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Team.players
   */
  export type Team$playersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfile
     */
    select?: PlayerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerProfile
     */
    omit?: PlayerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerProfileInclude<ExtArgs> | null
    where?: PlayerProfileWhereInput
    orderBy?: PlayerProfileOrderByWithRelationInput | PlayerProfileOrderByWithRelationInput[]
    cursor?: PlayerProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerProfileScalarFieldEnum | PlayerProfileScalarFieldEnum[]
  }

  /**
   * Team.homeFixtures
   */
  export type Team$homeFixturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fixture
     */
    omit?: FixtureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
    where?: FixtureWhereInput
    orderBy?: FixtureOrderByWithRelationInput | FixtureOrderByWithRelationInput[]
    cursor?: FixtureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FixtureScalarFieldEnum | FixtureScalarFieldEnum[]
  }

  /**
   * Team.awayFixtures
   */
  export type Team$awayFixturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fixture
     */
    omit?: FixtureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
    where?: FixtureWhereInput
    orderBy?: FixtureOrderByWithRelationInput | FixtureOrderByWithRelationInput[]
    cursor?: FixtureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FixtureScalarFieldEnum | FixtureScalarFieldEnum[]
  }

  /**
   * Team.teamStats
   */
  export type Team$teamStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamStats
     */
    select?: TeamStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamStats
     */
    omit?: TeamStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamStatsInclude<ExtArgs> | null
    where?: TeamStatsWhereInput
  }

  /**
   * Team without action
   */
  export type TeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
  }


  /**
   * Model PlayerProfile
   */

  export type AggregatePlayerProfile = {
    _count: PlayerProfileCountAggregateOutputType | null
    _avg: PlayerProfileAvgAggregateOutputType | null
    _sum: PlayerProfileSumAggregateOutputType | null
    _min: PlayerProfileMinAggregateOutputType | null
    _max: PlayerProfileMaxAggregateOutputType | null
  }

  export type PlayerProfileAvgAggregateOutputType = {
    jerseyNumber: number | null
  }

  export type PlayerProfileSumAggregateOutputType = {
    jerseyNumber: number | null
  }

  export type PlayerProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    jerseyNumber: number | null
    position: string | null
    isCaptain: boolean | null
    teamId: string | null
  }

  export type PlayerProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    jerseyNumber: number | null
    position: string | null
    isCaptain: boolean | null
    teamId: string | null
  }

  export type PlayerProfileCountAggregateOutputType = {
    id: number
    userId: number
    jerseyNumber: number
    position: number
    isCaptain: number
    teamId: number
    _all: number
  }


  export type PlayerProfileAvgAggregateInputType = {
    jerseyNumber?: true
  }

  export type PlayerProfileSumAggregateInputType = {
    jerseyNumber?: true
  }

  export type PlayerProfileMinAggregateInputType = {
    id?: true
    userId?: true
    jerseyNumber?: true
    position?: true
    isCaptain?: true
    teamId?: true
  }

  export type PlayerProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    jerseyNumber?: true
    position?: true
    isCaptain?: true
    teamId?: true
  }

  export type PlayerProfileCountAggregateInputType = {
    id?: true
    userId?: true
    jerseyNumber?: true
    position?: true
    isCaptain?: true
    teamId?: true
    _all?: true
  }

  export type PlayerProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerProfile to aggregate.
     */
    where?: PlayerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerProfiles to fetch.
     */
    orderBy?: PlayerProfileOrderByWithRelationInput | PlayerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlayerProfiles
    **/
    _count?: true | PlayerProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerProfileMaxAggregateInputType
  }

  export type GetPlayerProfileAggregateType<T extends PlayerProfileAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayerProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayerProfile[P]>
      : GetScalarType<T[P], AggregatePlayerProfile[P]>
  }




  export type PlayerProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerProfileWhereInput
    orderBy?: PlayerProfileOrderByWithAggregationInput | PlayerProfileOrderByWithAggregationInput[]
    by: PlayerProfileScalarFieldEnum[] | PlayerProfileScalarFieldEnum
    having?: PlayerProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerProfileCountAggregateInputType | true
    _avg?: PlayerProfileAvgAggregateInputType
    _sum?: PlayerProfileSumAggregateInputType
    _min?: PlayerProfileMinAggregateInputType
    _max?: PlayerProfileMaxAggregateInputType
  }

  export type PlayerProfileGroupByOutputType = {
    id: string
    userId: string
    jerseyNumber: number | null
    position: string | null
    isCaptain: boolean
    teamId: string
    _count: PlayerProfileCountAggregateOutputType | null
    _avg: PlayerProfileAvgAggregateOutputType | null
    _sum: PlayerProfileSumAggregateOutputType | null
    _min: PlayerProfileMinAggregateOutputType | null
    _max: PlayerProfileMaxAggregateOutputType | null
  }

  type GetPlayerProfileGroupByPayload<T extends PlayerProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerProfileGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerProfileGroupByOutputType[P]>
        }
      >
    >


  export type PlayerProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    jerseyNumber?: boolean
    position?: boolean
    isCaptain?: boolean
    teamId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
    matchLogs?: boolean | PlayerProfile$matchLogsArgs<ExtArgs>
    playerStats?: boolean | PlayerProfile$playerStatsArgs<ExtArgs>
    _count?: boolean | PlayerProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerProfile"]>

  export type PlayerProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    jerseyNumber?: boolean
    position?: boolean
    isCaptain?: boolean
    teamId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerProfile"]>

  export type PlayerProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    jerseyNumber?: boolean
    position?: boolean
    isCaptain?: boolean
    teamId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerProfile"]>

  export type PlayerProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    jerseyNumber?: boolean
    position?: boolean
    isCaptain?: boolean
    teamId?: boolean
  }

  export type PlayerProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "jerseyNumber" | "position" | "isCaptain" | "teamId", ExtArgs["result"]["playerProfile"]>
  export type PlayerProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
    matchLogs?: boolean | PlayerProfile$matchLogsArgs<ExtArgs>
    playerStats?: boolean | PlayerProfile$playerStatsArgs<ExtArgs>
    _count?: boolean | PlayerProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlayerProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type PlayerProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }

  export type $PlayerProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlayerProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      team: Prisma.$TeamPayload<ExtArgs>
      matchLogs: Prisma.$MatchPlayerLogPayload<ExtArgs>[]
      playerStats: Prisma.$PlayerStatsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      jerseyNumber: number | null
      position: string | null
      isCaptain: boolean
      teamId: string
    }, ExtArgs["result"]["playerProfile"]>
    composites: {}
  }

  type PlayerProfileGetPayload<S extends boolean | null | undefined | PlayerProfileDefaultArgs> = $Result.GetResult<Prisma.$PlayerProfilePayload, S>

  type PlayerProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayerProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerProfileCountAggregateInputType | true
    }

  export interface PlayerProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlayerProfile'], meta: { name: 'PlayerProfile' } }
    /**
     * Find zero or one PlayerProfile that matches the filter.
     * @param {PlayerProfileFindUniqueArgs} args - Arguments to find a PlayerProfile
     * @example
     * // Get one PlayerProfile
     * const playerProfile = await prisma.playerProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerProfileFindUniqueArgs>(args: SelectSubset<T, PlayerProfileFindUniqueArgs<ExtArgs>>): Prisma__PlayerProfileClient<$Result.GetResult<Prisma.$PlayerProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlayerProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerProfileFindUniqueOrThrowArgs} args - Arguments to find a PlayerProfile
     * @example
     * // Get one PlayerProfile
     * const playerProfile = await prisma.playerProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerProfileClient<$Result.GetResult<Prisma.$PlayerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerProfileFindFirstArgs} args - Arguments to find a PlayerProfile
     * @example
     * // Get one PlayerProfile
     * const playerProfile = await prisma.playerProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerProfileFindFirstArgs>(args?: SelectSubset<T, PlayerProfileFindFirstArgs<ExtArgs>>): Prisma__PlayerProfileClient<$Result.GetResult<Prisma.$PlayerProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerProfileFindFirstOrThrowArgs} args - Arguments to find a PlayerProfile
     * @example
     * // Get one PlayerProfile
     * const playerProfile = await prisma.playerProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerProfileClient<$Result.GetResult<Prisma.$PlayerProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlayerProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlayerProfiles
     * const playerProfiles = await prisma.playerProfile.findMany()
     * 
     * // Get first 10 PlayerProfiles
     * const playerProfiles = await prisma.playerProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerProfileWithIdOnly = await prisma.playerProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayerProfileFindManyArgs>(args?: SelectSubset<T, PlayerProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlayerProfile.
     * @param {PlayerProfileCreateArgs} args - Arguments to create a PlayerProfile.
     * @example
     * // Create one PlayerProfile
     * const PlayerProfile = await prisma.playerProfile.create({
     *   data: {
     *     // ... data to create a PlayerProfile
     *   }
     * })
     * 
     */
    create<T extends PlayerProfileCreateArgs>(args: SelectSubset<T, PlayerProfileCreateArgs<ExtArgs>>): Prisma__PlayerProfileClient<$Result.GetResult<Prisma.$PlayerProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlayerProfiles.
     * @param {PlayerProfileCreateManyArgs} args - Arguments to create many PlayerProfiles.
     * @example
     * // Create many PlayerProfiles
     * const playerProfile = await prisma.playerProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerProfileCreateManyArgs>(args?: SelectSubset<T, PlayerProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlayerProfiles and returns the data saved in the database.
     * @param {PlayerProfileCreateManyAndReturnArgs} args - Arguments to create many PlayerProfiles.
     * @example
     * // Create many PlayerProfiles
     * const playerProfile = await prisma.playerProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlayerProfiles and only return the `id`
     * const playerProfileWithIdOnly = await prisma.playerProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayerProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayerProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlayerProfile.
     * @param {PlayerProfileDeleteArgs} args - Arguments to delete one PlayerProfile.
     * @example
     * // Delete one PlayerProfile
     * const PlayerProfile = await prisma.playerProfile.delete({
     *   where: {
     *     // ... filter to delete one PlayerProfile
     *   }
     * })
     * 
     */
    delete<T extends PlayerProfileDeleteArgs>(args: SelectSubset<T, PlayerProfileDeleteArgs<ExtArgs>>): Prisma__PlayerProfileClient<$Result.GetResult<Prisma.$PlayerProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlayerProfile.
     * @param {PlayerProfileUpdateArgs} args - Arguments to update one PlayerProfile.
     * @example
     * // Update one PlayerProfile
     * const playerProfile = await prisma.playerProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerProfileUpdateArgs>(args: SelectSubset<T, PlayerProfileUpdateArgs<ExtArgs>>): Prisma__PlayerProfileClient<$Result.GetResult<Prisma.$PlayerProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlayerProfiles.
     * @param {PlayerProfileDeleteManyArgs} args - Arguments to filter PlayerProfiles to delete.
     * @example
     * // Delete a few PlayerProfiles
     * const { count } = await prisma.playerProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerProfileDeleteManyArgs>(args?: SelectSubset<T, PlayerProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlayerProfiles
     * const playerProfile = await prisma.playerProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerProfileUpdateManyArgs>(args: SelectSubset<T, PlayerProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerProfiles and returns the data updated in the database.
     * @param {PlayerProfileUpdateManyAndReturnArgs} args - Arguments to update many PlayerProfiles.
     * @example
     * // Update many PlayerProfiles
     * const playerProfile = await prisma.playerProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlayerProfiles and only return the `id`
     * const playerProfileWithIdOnly = await prisma.playerProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlayerProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayerProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlayerProfile.
     * @param {PlayerProfileUpsertArgs} args - Arguments to update or create a PlayerProfile.
     * @example
     * // Update or create a PlayerProfile
     * const playerProfile = await prisma.playerProfile.upsert({
     *   create: {
     *     // ... data to create a PlayerProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlayerProfile we want to update
     *   }
     * })
     */
    upsert<T extends PlayerProfileUpsertArgs>(args: SelectSubset<T, PlayerProfileUpsertArgs<ExtArgs>>): Prisma__PlayerProfileClient<$Result.GetResult<Prisma.$PlayerProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlayerProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerProfileCountArgs} args - Arguments to filter PlayerProfiles to count.
     * @example
     * // Count the number of PlayerProfiles
     * const count = await prisma.playerProfile.count({
     *   where: {
     *     // ... the filter for the PlayerProfiles we want to count
     *   }
     * })
    **/
    count<T extends PlayerProfileCountArgs>(
      args?: Subset<T, PlayerProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlayerProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlayerProfileAggregateArgs>(args: Subset<T, PlayerProfileAggregateArgs>): Prisma.PrismaPromise<GetPlayerProfileAggregateType<T>>

    /**
     * Group by PlayerProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlayerProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerProfileGroupByArgs['orderBy'] }
        : { orderBy?: PlayerProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayerProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlayerProfile model
   */
  readonly fields: PlayerProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlayerProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    matchLogs<T extends PlayerProfile$matchLogsArgs<ExtArgs> = {}>(args?: Subset<T, PlayerProfile$matchLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPlayerLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    playerStats<T extends PlayerProfile$playerStatsArgs<ExtArgs> = {}>(args?: Subset<T, PlayerProfile$playerStatsArgs<ExtArgs>>): Prisma__PlayerStatsClient<$Result.GetResult<Prisma.$PlayerStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlayerProfile model
   */
  interface PlayerProfileFieldRefs {
    readonly id: FieldRef<"PlayerProfile", 'String'>
    readonly userId: FieldRef<"PlayerProfile", 'String'>
    readonly jerseyNumber: FieldRef<"PlayerProfile", 'Int'>
    readonly position: FieldRef<"PlayerProfile", 'String'>
    readonly isCaptain: FieldRef<"PlayerProfile", 'Boolean'>
    readonly teamId: FieldRef<"PlayerProfile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PlayerProfile findUnique
   */
  export type PlayerProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfile
     */
    select?: PlayerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerProfile
     */
    omit?: PlayerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerProfileInclude<ExtArgs> | null
    /**
     * Filter, which PlayerProfile to fetch.
     */
    where: PlayerProfileWhereUniqueInput
  }

  /**
   * PlayerProfile findUniqueOrThrow
   */
  export type PlayerProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfile
     */
    select?: PlayerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerProfile
     */
    omit?: PlayerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerProfileInclude<ExtArgs> | null
    /**
     * Filter, which PlayerProfile to fetch.
     */
    where: PlayerProfileWhereUniqueInput
  }

  /**
   * PlayerProfile findFirst
   */
  export type PlayerProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfile
     */
    select?: PlayerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerProfile
     */
    omit?: PlayerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerProfileInclude<ExtArgs> | null
    /**
     * Filter, which PlayerProfile to fetch.
     */
    where?: PlayerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerProfiles to fetch.
     */
    orderBy?: PlayerProfileOrderByWithRelationInput | PlayerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerProfiles.
     */
    cursor?: PlayerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerProfiles.
     */
    distinct?: PlayerProfileScalarFieldEnum | PlayerProfileScalarFieldEnum[]
  }

  /**
   * PlayerProfile findFirstOrThrow
   */
  export type PlayerProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfile
     */
    select?: PlayerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerProfile
     */
    omit?: PlayerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerProfileInclude<ExtArgs> | null
    /**
     * Filter, which PlayerProfile to fetch.
     */
    where?: PlayerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerProfiles to fetch.
     */
    orderBy?: PlayerProfileOrderByWithRelationInput | PlayerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerProfiles.
     */
    cursor?: PlayerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerProfiles.
     */
    distinct?: PlayerProfileScalarFieldEnum | PlayerProfileScalarFieldEnum[]
  }

  /**
   * PlayerProfile findMany
   */
  export type PlayerProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfile
     */
    select?: PlayerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerProfile
     */
    omit?: PlayerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerProfileInclude<ExtArgs> | null
    /**
     * Filter, which PlayerProfiles to fetch.
     */
    where?: PlayerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerProfiles to fetch.
     */
    orderBy?: PlayerProfileOrderByWithRelationInput | PlayerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlayerProfiles.
     */
    cursor?: PlayerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerProfiles.
     */
    skip?: number
    distinct?: PlayerProfileScalarFieldEnum | PlayerProfileScalarFieldEnum[]
  }

  /**
   * PlayerProfile create
   */
  export type PlayerProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfile
     */
    select?: PlayerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerProfile
     */
    omit?: PlayerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a PlayerProfile.
     */
    data: XOR<PlayerProfileCreateInput, PlayerProfileUncheckedCreateInput>
  }

  /**
   * PlayerProfile createMany
   */
  export type PlayerProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlayerProfiles.
     */
    data: PlayerProfileCreateManyInput | PlayerProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlayerProfile createManyAndReturn
   */
  export type PlayerProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfile
     */
    select?: PlayerProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerProfile
     */
    omit?: PlayerProfileOmit<ExtArgs> | null
    /**
     * The data used to create many PlayerProfiles.
     */
    data: PlayerProfileCreateManyInput | PlayerProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayerProfile update
   */
  export type PlayerProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfile
     */
    select?: PlayerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerProfile
     */
    omit?: PlayerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a PlayerProfile.
     */
    data: XOR<PlayerProfileUpdateInput, PlayerProfileUncheckedUpdateInput>
    /**
     * Choose, which PlayerProfile to update.
     */
    where: PlayerProfileWhereUniqueInput
  }

  /**
   * PlayerProfile updateMany
   */
  export type PlayerProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlayerProfiles.
     */
    data: XOR<PlayerProfileUpdateManyMutationInput, PlayerProfileUncheckedUpdateManyInput>
    /**
     * Filter which PlayerProfiles to update
     */
    where?: PlayerProfileWhereInput
    /**
     * Limit how many PlayerProfiles to update.
     */
    limit?: number
  }

  /**
   * PlayerProfile updateManyAndReturn
   */
  export type PlayerProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfile
     */
    select?: PlayerProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerProfile
     */
    omit?: PlayerProfileOmit<ExtArgs> | null
    /**
     * The data used to update PlayerProfiles.
     */
    data: XOR<PlayerProfileUpdateManyMutationInput, PlayerProfileUncheckedUpdateManyInput>
    /**
     * Filter which PlayerProfiles to update
     */
    where?: PlayerProfileWhereInput
    /**
     * Limit how many PlayerProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayerProfile upsert
   */
  export type PlayerProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfile
     */
    select?: PlayerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerProfile
     */
    omit?: PlayerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the PlayerProfile to update in case it exists.
     */
    where: PlayerProfileWhereUniqueInput
    /**
     * In case the PlayerProfile found by the `where` argument doesn't exist, create a new PlayerProfile with this data.
     */
    create: XOR<PlayerProfileCreateInput, PlayerProfileUncheckedCreateInput>
    /**
     * In case the PlayerProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerProfileUpdateInput, PlayerProfileUncheckedUpdateInput>
  }

  /**
   * PlayerProfile delete
   */
  export type PlayerProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfile
     */
    select?: PlayerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerProfile
     */
    omit?: PlayerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerProfileInclude<ExtArgs> | null
    /**
     * Filter which PlayerProfile to delete.
     */
    where: PlayerProfileWhereUniqueInput
  }

  /**
   * PlayerProfile deleteMany
   */
  export type PlayerProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerProfiles to delete
     */
    where?: PlayerProfileWhereInput
    /**
     * Limit how many PlayerProfiles to delete.
     */
    limit?: number
  }

  /**
   * PlayerProfile.matchLogs
   */
  export type PlayerProfile$matchLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPlayerLog
     */
    select?: MatchPlayerLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchPlayerLog
     */
    omit?: MatchPlayerLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchPlayerLogInclude<ExtArgs> | null
    where?: MatchPlayerLogWhereInput
    orderBy?: MatchPlayerLogOrderByWithRelationInput | MatchPlayerLogOrderByWithRelationInput[]
    cursor?: MatchPlayerLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchPlayerLogScalarFieldEnum | MatchPlayerLogScalarFieldEnum[]
  }

  /**
   * PlayerProfile.playerStats
   */
  export type PlayerProfile$playerStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStats
     */
    select?: PlayerStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStats
     */
    omit?: PlayerStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerStatsInclude<ExtArgs> | null
    where?: PlayerStatsWhereInput
  }

  /**
   * PlayerProfile without action
   */
  export type PlayerProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfile
     */
    select?: PlayerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerProfile
     */
    omit?: PlayerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerProfileInclude<ExtArgs> | null
  }


  /**
   * Model TeamStats
   */

  export type AggregateTeamStats = {
    _count: TeamStatsCountAggregateOutputType | null
    _avg: TeamStatsAvgAggregateOutputType | null
    _sum: TeamStatsSumAggregateOutputType | null
    _min: TeamStatsMinAggregateOutputType | null
    _max: TeamStatsMaxAggregateOutputType | null
  }

  export type TeamStatsAvgAggregateOutputType = {
    wins: number | null
    losses: number | null
    draws: number | null
    points: number | null
    goalsFor: number | null
    goalsAgainst: number | null
    goalDifference: number | null
  }

  export type TeamStatsSumAggregateOutputType = {
    wins: number | null
    losses: number | null
    draws: number | null
    points: number | null
    goalsFor: number | null
    goalsAgainst: number | null
    goalDifference: number | null
  }

  export type TeamStatsMinAggregateOutputType = {
    id: string | null
    teamId: string | null
    wins: number | null
    losses: number | null
    draws: number | null
    points: number | null
    goalsFor: number | null
    goalsAgainst: number | null
    goalDifference: number | null
    lastUpdated: Date | null
  }

  export type TeamStatsMaxAggregateOutputType = {
    id: string | null
    teamId: string | null
    wins: number | null
    losses: number | null
    draws: number | null
    points: number | null
    goalsFor: number | null
    goalsAgainst: number | null
    goalDifference: number | null
    lastUpdated: Date | null
  }

  export type TeamStatsCountAggregateOutputType = {
    id: number
    teamId: number
    wins: number
    losses: number
    draws: number
    points: number
    goalsFor: number
    goalsAgainst: number
    goalDifference: number
    lastUpdated: number
    _all: number
  }


  export type TeamStatsAvgAggregateInputType = {
    wins?: true
    losses?: true
    draws?: true
    points?: true
    goalsFor?: true
    goalsAgainst?: true
    goalDifference?: true
  }

  export type TeamStatsSumAggregateInputType = {
    wins?: true
    losses?: true
    draws?: true
    points?: true
    goalsFor?: true
    goalsAgainst?: true
    goalDifference?: true
  }

  export type TeamStatsMinAggregateInputType = {
    id?: true
    teamId?: true
    wins?: true
    losses?: true
    draws?: true
    points?: true
    goalsFor?: true
    goalsAgainst?: true
    goalDifference?: true
    lastUpdated?: true
  }

  export type TeamStatsMaxAggregateInputType = {
    id?: true
    teamId?: true
    wins?: true
    losses?: true
    draws?: true
    points?: true
    goalsFor?: true
    goalsAgainst?: true
    goalDifference?: true
    lastUpdated?: true
  }

  export type TeamStatsCountAggregateInputType = {
    id?: true
    teamId?: true
    wins?: true
    losses?: true
    draws?: true
    points?: true
    goalsFor?: true
    goalsAgainst?: true
    goalDifference?: true
    lastUpdated?: true
    _all?: true
  }

  export type TeamStatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamStats to aggregate.
     */
    where?: TeamStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamStats to fetch.
     */
    orderBy?: TeamStatsOrderByWithRelationInput | TeamStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeamStats
    **/
    _count?: true | TeamStatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamStatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamStatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamStatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamStatsMaxAggregateInputType
  }

  export type GetTeamStatsAggregateType<T extends TeamStatsAggregateArgs> = {
        [P in keyof T & keyof AggregateTeamStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamStats[P]>
      : GetScalarType<T[P], AggregateTeamStats[P]>
  }




  export type TeamStatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamStatsWhereInput
    orderBy?: TeamStatsOrderByWithAggregationInput | TeamStatsOrderByWithAggregationInput[]
    by: TeamStatsScalarFieldEnum[] | TeamStatsScalarFieldEnum
    having?: TeamStatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamStatsCountAggregateInputType | true
    _avg?: TeamStatsAvgAggregateInputType
    _sum?: TeamStatsSumAggregateInputType
    _min?: TeamStatsMinAggregateInputType
    _max?: TeamStatsMaxAggregateInputType
  }

  export type TeamStatsGroupByOutputType = {
    id: string
    teamId: string
    wins: number
    losses: number
    draws: number
    points: number
    goalsFor: number
    goalsAgainst: number
    goalDifference: number
    lastUpdated: Date
    _count: TeamStatsCountAggregateOutputType | null
    _avg: TeamStatsAvgAggregateOutputType | null
    _sum: TeamStatsSumAggregateOutputType | null
    _min: TeamStatsMinAggregateOutputType | null
    _max: TeamStatsMaxAggregateOutputType | null
  }

  type GetTeamStatsGroupByPayload<T extends TeamStatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamStatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamStatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamStatsGroupByOutputType[P]>
            : GetScalarType<T[P], TeamStatsGroupByOutputType[P]>
        }
      >
    >


  export type TeamStatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    wins?: boolean
    losses?: boolean
    draws?: boolean
    points?: boolean
    goalsFor?: boolean
    goalsAgainst?: boolean
    goalDifference?: boolean
    lastUpdated?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamStats"]>

  export type TeamStatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    wins?: boolean
    losses?: boolean
    draws?: boolean
    points?: boolean
    goalsFor?: boolean
    goalsAgainst?: boolean
    goalDifference?: boolean
    lastUpdated?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamStats"]>

  export type TeamStatsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    wins?: boolean
    losses?: boolean
    draws?: boolean
    points?: boolean
    goalsFor?: boolean
    goalsAgainst?: boolean
    goalDifference?: boolean
    lastUpdated?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamStats"]>

  export type TeamStatsSelectScalar = {
    id?: boolean
    teamId?: boolean
    wins?: boolean
    losses?: boolean
    draws?: boolean
    points?: boolean
    goalsFor?: boolean
    goalsAgainst?: boolean
    goalDifference?: boolean
    lastUpdated?: boolean
  }

  export type TeamStatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teamId" | "wins" | "losses" | "draws" | "points" | "goalsFor" | "goalsAgainst" | "goalDifference" | "lastUpdated", ExtArgs["result"]["teamStats"]>
  export type TeamStatsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type TeamStatsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type TeamStatsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }

  export type $TeamStatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeamStats"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      teamId: string
      wins: number
      losses: number
      draws: number
      points: number
      goalsFor: number
      goalsAgainst: number
      goalDifference: number
      lastUpdated: Date
    }, ExtArgs["result"]["teamStats"]>
    composites: {}
  }

  type TeamStatsGetPayload<S extends boolean | null | undefined | TeamStatsDefaultArgs> = $Result.GetResult<Prisma.$TeamStatsPayload, S>

  type TeamStatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamStatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamStatsCountAggregateInputType | true
    }

  export interface TeamStatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeamStats'], meta: { name: 'TeamStats' } }
    /**
     * Find zero or one TeamStats that matches the filter.
     * @param {TeamStatsFindUniqueArgs} args - Arguments to find a TeamStats
     * @example
     * // Get one TeamStats
     * const teamStats = await prisma.teamStats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamStatsFindUniqueArgs>(args: SelectSubset<T, TeamStatsFindUniqueArgs<ExtArgs>>): Prisma__TeamStatsClient<$Result.GetResult<Prisma.$TeamStatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeamStats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamStatsFindUniqueOrThrowArgs} args - Arguments to find a TeamStats
     * @example
     * // Get one TeamStats
     * const teamStats = await prisma.teamStats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamStatsFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamStatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamStatsClient<$Result.GetResult<Prisma.$TeamStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamStatsFindFirstArgs} args - Arguments to find a TeamStats
     * @example
     * // Get one TeamStats
     * const teamStats = await prisma.teamStats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamStatsFindFirstArgs>(args?: SelectSubset<T, TeamStatsFindFirstArgs<ExtArgs>>): Prisma__TeamStatsClient<$Result.GetResult<Prisma.$TeamStatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamStats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamStatsFindFirstOrThrowArgs} args - Arguments to find a TeamStats
     * @example
     * // Get one TeamStats
     * const teamStats = await prisma.teamStats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamStatsFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamStatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamStatsClient<$Result.GetResult<Prisma.$TeamStatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeamStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamStatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamStats
     * const teamStats = await prisma.teamStats.findMany()
     * 
     * // Get first 10 TeamStats
     * const teamStats = await prisma.teamStats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamStatsWithIdOnly = await prisma.teamStats.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamStatsFindManyArgs>(args?: SelectSubset<T, TeamStatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeamStats.
     * @param {TeamStatsCreateArgs} args - Arguments to create a TeamStats.
     * @example
     * // Create one TeamStats
     * const TeamStats = await prisma.teamStats.create({
     *   data: {
     *     // ... data to create a TeamStats
     *   }
     * })
     * 
     */
    create<T extends TeamStatsCreateArgs>(args: SelectSubset<T, TeamStatsCreateArgs<ExtArgs>>): Prisma__TeamStatsClient<$Result.GetResult<Prisma.$TeamStatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeamStats.
     * @param {TeamStatsCreateManyArgs} args - Arguments to create many TeamStats.
     * @example
     * // Create many TeamStats
     * const teamStats = await prisma.teamStats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamStatsCreateManyArgs>(args?: SelectSubset<T, TeamStatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeamStats and returns the data saved in the database.
     * @param {TeamStatsCreateManyAndReturnArgs} args - Arguments to create many TeamStats.
     * @example
     * // Create many TeamStats
     * const teamStats = await prisma.teamStats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeamStats and only return the `id`
     * const teamStatsWithIdOnly = await prisma.teamStats.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamStatsCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamStatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamStatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeamStats.
     * @param {TeamStatsDeleteArgs} args - Arguments to delete one TeamStats.
     * @example
     * // Delete one TeamStats
     * const TeamStats = await prisma.teamStats.delete({
     *   where: {
     *     // ... filter to delete one TeamStats
     *   }
     * })
     * 
     */
    delete<T extends TeamStatsDeleteArgs>(args: SelectSubset<T, TeamStatsDeleteArgs<ExtArgs>>): Prisma__TeamStatsClient<$Result.GetResult<Prisma.$TeamStatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeamStats.
     * @param {TeamStatsUpdateArgs} args - Arguments to update one TeamStats.
     * @example
     * // Update one TeamStats
     * const teamStats = await prisma.teamStats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamStatsUpdateArgs>(args: SelectSubset<T, TeamStatsUpdateArgs<ExtArgs>>): Prisma__TeamStatsClient<$Result.GetResult<Prisma.$TeamStatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeamStats.
     * @param {TeamStatsDeleteManyArgs} args - Arguments to filter TeamStats to delete.
     * @example
     * // Delete a few TeamStats
     * const { count } = await prisma.teamStats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamStatsDeleteManyArgs>(args?: SelectSubset<T, TeamStatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamStatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamStats
     * const teamStats = await prisma.teamStats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamStatsUpdateManyArgs>(args: SelectSubset<T, TeamStatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamStats and returns the data updated in the database.
     * @param {TeamStatsUpdateManyAndReturnArgs} args - Arguments to update many TeamStats.
     * @example
     * // Update many TeamStats
     * const teamStats = await prisma.teamStats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeamStats and only return the `id`
     * const teamStatsWithIdOnly = await prisma.teamStats.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeamStatsUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamStatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamStatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeamStats.
     * @param {TeamStatsUpsertArgs} args - Arguments to update or create a TeamStats.
     * @example
     * // Update or create a TeamStats
     * const teamStats = await prisma.teamStats.upsert({
     *   create: {
     *     // ... data to create a TeamStats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamStats we want to update
     *   }
     * })
     */
    upsert<T extends TeamStatsUpsertArgs>(args: SelectSubset<T, TeamStatsUpsertArgs<ExtArgs>>): Prisma__TeamStatsClient<$Result.GetResult<Prisma.$TeamStatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeamStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamStatsCountArgs} args - Arguments to filter TeamStats to count.
     * @example
     * // Count the number of TeamStats
     * const count = await prisma.teamStats.count({
     *   where: {
     *     // ... the filter for the TeamStats we want to count
     *   }
     * })
    **/
    count<T extends TeamStatsCountArgs>(
      args?: Subset<T, TeamStatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamStatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeamStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamStatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamStatsAggregateArgs>(args: Subset<T, TeamStatsAggregateArgs>): Prisma.PrismaPromise<GetTeamStatsAggregateType<T>>

    /**
     * Group by TeamStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamStatsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeamStatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamStatsGroupByArgs['orderBy'] }
        : { orderBy?: TeamStatsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamStatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeamStats model
   */
  readonly fields: TeamStatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeamStats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamStatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TeamStats model
   */
  interface TeamStatsFieldRefs {
    readonly id: FieldRef<"TeamStats", 'String'>
    readonly teamId: FieldRef<"TeamStats", 'String'>
    readonly wins: FieldRef<"TeamStats", 'Int'>
    readonly losses: FieldRef<"TeamStats", 'Int'>
    readonly draws: FieldRef<"TeamStats", 'Int'>
    readonly points: FieldRef<"TeamStats", 'Int'>
    readonly goalsFor: FieldRef<"TeamStats", 'Int'>
    readonly goalsAgainst: FieldRef<"TeamStats", 'Int'>
    readonly goalDifference: FieldRef<"TeamStats", 'Int'>
    readonly lastUpdated: FieldRef<"TeamStats", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TeamStats findUnique
   */
  export type TeamStatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamStats
     */
    select?: TeamStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamStats
     */
    omit?: TeamStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamStatsInclude<ExtArgs> | null
    /**
     * Filter, which TeamStats to fetch.
     */
    where: TeamStatsWhereUniqueInput
  }

  /**
   * TeamStats findUniqueOrThrow
   */
  export type TeamStatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamStats
     */
    select?: TeamStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamStats
     */
    omit?: TeamStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamStatsInclude<ExtArgs> | null
    /**
     * Filter, which TeamStats to fetch.
     */
    where: TeamStatsWhereUniqueInput
  }

  /**
   * TeamStats findFirst
   */
  export type TeamStatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamStats
     */
    select?: TeamStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamStats
     */
    omit?: TeamStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamStatsInclude<ExtArgs> | null
    /**
     * Filter, which TeamStats to fetch.
     */
    where?: TeamStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamStats to fetch.
     */
    orderBy?: TeamStatsOrderByWithRelationInput | TeamStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamStats.
     */
    cursor?: TeamStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamStats.
     */
    distinct?: TeamStatsScalarFieldEnum | TeamStatsScalarFieldEnum[]
  }

  /**
   * TeamStats findFirstOrThrow
   */
  export type TeamStatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamStats
     */
    select?: TeamStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamStats
     */
    omit?: TeamStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamStatsInclude<ExtArgs> | null
    /**
     * Filter, which TeamStats to fetch.
     */
    where?: TeamStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamStats to fetch.
     */
    orderBy?: TeamStatsOrderByWithRelationInput | TeamStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamStats.
     */
    cursor?: TeamStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamStats.
     */
    distinct?: TeamStatsScalarFieldEnum | TeamStatsScalarFieldEnum[]
  }

  /**
   * TeamStats findMany
   */
  export type TeamStatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamStats
     */
    select?: TeamStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamStats
     */
    omit?: TeamStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamStatsInclude<ExtArgs> | null
    /**
     * Filter, which TeamStats to fetch.
     */
    where?: TeamStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamStats to fetch.
     */
    orderBy?: TeamStatsOrderByWithRelationInput | TeamStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeamStats.
     */
    cursor?: TeamStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamStats.
     */
    skip?: number
    distinct?: TeamStatsScalarFieldEnum | TeamStatsScalarFieldEnum[]
  }

  /**
   * TeamStats create
   */
  export type TeamStatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamStats
     */
    select?: TeamStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamStats
     */
    omit?: TeamStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamStatsInclude<ExtArgs> | null
    /**
     * The data needed to create a TeamStats.
     */
    data: XOR<TeamStatsCreateInput, TeamStatsUncheckedCreateInput>
  }

  /**
   * TeamStats createMany
   */
  export type TeamStatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeamStats.
     */
    data: TeamStatsCreateManyInput | TeamStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeamStats createManyAndReturn
   */
  export type TeamStatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamStats
     */
    select?: TeamStatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamStats
     */
    omit?: TeamStatsOmit<ExtArgs> | null
    /**
     * The data used to create many TeamStats.
     */
    data: TeamStatsCreateManyInput | TeamStatsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamStatsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamStats update
   */
  export type TeamStatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamStats
     */
    select?: TeamStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamStats
     */
    omit?: TeamStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamStatsInclude<ExtArgs> | null
    /**
     * The data needed to update a TeamStats.
     */
    data: XOR<TeamStatsUpdateInput, TeamStatsUncheckedUpdateInput>
    /**
     * Choose, which TeamStats to update.
     */
    where: TeamStatsWhereUniqueInput
  }

  /**
   * TeamStats updateMany
   */
  export type TeamStatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeamStats.
     */
    data: XOR<TeamStatsUpdateManyMutationInput, TeamStatsUncheckedUpdateManyInput>
    /**
     * Filter which TeamStats to update
     */
    where?: TeamStatsWhereInput
    /**
     * Limit how many TeamStats to update.
     */
    limit?: number
  }

  /**
   * TeamStats updateManyAndReturn
   */
  export type TeamStatsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamStats
     */
    select?: TeamStatsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamStats
     */
    omit?: TeamStatsOmit<ExtArgs> | null
    /**
     * The data used to update TeamStats.
     */
    data: XOR<TeamStatsUpdateManyMutationInput, TeamStatsUncheckedUpdateManyInput>
    /**
     * Filter which TeamStats to update
     */
    where?: TeamStatsWhereInput
    /**
     * Limit how many TeamStats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamStatsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamStats upsert
   */
  export type TeamStatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamStats
     */
    select?: TeamStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamStats
     */
    omit?: TeamStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamStatsInclude<ExtArgs> | null
    /**
     * The filter to search for the TeamStats to update in case it exists.
     */
    where: TeamStatsWhereUniqueInput
    /**
     * In case the TeamStats found by the `where` argument doesn't exist, create a new TeamStats with this data.
     */
    create: XOR<TeamStatsCreateInput, TeamStatsUncheckedCreateInput>
    /**
     * In case the TeamStats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamStatsUpdateInput, TeamStatsUncheckedUpdateInput>
  }

  /**
   * TeamStats delete
   */
  export type TeamStatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamStats
     */
    select?: TeamStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamStats
     */
    omit?: TeamStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamStatsInclude<ExtArgs> | null
    /**
     * Filter which TeamStats to delete.
     */
    where: TeamStatsWhereUniqueInput
  }

  /**
   * TeamStats deleteMany
   */
  export type TeamStatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamStats to delete
     */
    where?: TeamStatsWhereInput
    /**
     * Limit how many TeamStats to delete.
     */
    limit?: number
  }

  /**
   * TeamStats without action
   */
  export type TeamStatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamStats
     */
    select?: TeamStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamStats
     */
    omit?: TeamStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamStatsInclude<ExtArgs> | null
  }


  /**
   * Model PlayerStats
   */

  export type AggregatePlayerStats = {
    _count: PlayerStatsCountAggregateOutputType | null
    _avg: PlayerStatsAvgAggregateOutputType | null
    _sum: PlayerStatsSumAggregateOutputType | null
    _min: PlayerStatsMinAggregateOutputType | null
    _max: PlayerStatsMaxAggregateOutputType | null
  }

  export type PlayerStatsAvgAggregateOutputType = {
    goals: number | null
    assists: number | null
    yellowCards: number | null
    redCards: number | null
    matchesPlayed: number | null
  }

  export type PlayerStatsSumAggregateOutputType = {
    goals: number | null
    assists: number | null
    yellowCards: number | null
    redCards: number | null
    matchesPlayed: number | null
  }

  export type PlayerStatsMinAggregateOutputType = {
    id: string | null
    playerId: string | null
    goals: number | null
    assists: number | null
    yellowCards: number | null
    redCards: number | null
    matchesPlayed: number | null
    lastUpdated: Date | null
  }

  export type PlayerStatsMaxAggregateOutputType = {
    id: string | null
    playerId: string | null
    goals: number | null
    assists: number | null
    yellowCards: number | null
    redCards: number | null
    matchesPlayed: number | null
    lastUpdated: Date | null
  }

  export type PlayerStatsCountAggregateOutputType = {
    id: number
    playerId: number
    goals: number
    assists: number
    yellowCards: number
    redCards: number
    matchesPlayed: number
    lastUpdated: number
    _all: number
  }


  export type PlayerStatsAvgAggregateInputType = {
    goals?: true
    assists?: true
    yellowCards?: true
    redCards?: true
    matchesPlayed?: true
  }

  export type PlayerStatsSumAggregateInputType = {
    goals?: true
    assists?: true
    yellowCards?: true
    redCards?: true
    matchesPlayed?: true
  }

  export type PlayerStatsMinAggregateInputType = {
    id?: true
    playerId?: true
    goals?: true
    assists?: true
    yellowCards?: true
    redCards?: true
    matchesPlayed?: true
    lastUpdated?: true
  }

  export type PlayerStatsMaxAggregateInputType = {
    id?: true
    playerId?: true
    goals?: true
    assists?: true
    yellowCards?: true
    redCards?: true
    matchesPlayed?: true
    lastUpdated?: true
  }

  export type PlayerStatsCountAggregateInputType = {
    id?: true
    playerId?: true
    goals?: true
    assists?: true
    yellowCards?: true
    redCards?: true
    matchesPlayed?: true
    lastUpdated?: true
    _all?: true
  }

  export type PlayerStatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerStats to aggregate.
     */
    where?: PlayerStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerStats to fetch.
     */
    orderBy?: PlayerStatsOrderByWithRelationInput | PlayerStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlayerStats
    **/
    _count?: true | PlayerStatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerStatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerStatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerStatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerStatsMaxAggregateInputType
  }

  export type GetPlayerStatsAggregateType<T extends PlayerStatsAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayerStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayerStats[P]>
      : GetScalarType<T[P], AggregatePlayerStats[P]>
  }




  export type PlayerStatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerStatsWhereInput
    orderBy?: PlayerStatsOrderByWithAggregationInput | PlayerStatsOrderByWithAggregationInput[]
    by: PlayerStatsScalarFieldEnum[] | PlayerStatsScalarFieldEnum
    having?: PlayerStatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerStatsCountAggregateInputType | true
    _avg?: PlayerStatsAvgAggregateInputType
    _sum?: PlayerStatsSumAggregateInputType
    _min?: PlayerStatsMinAggregateInputType
    _max?: PlayerStatsMaxAggregateInputType
  }

  export type PlayerStatsGroupByOutputType = {
    id: string
    playerId: string
    goals: number
    assists: number
    yellowCards: number
    redCards: number
    matchesPlayed: number
    lastUpdated: Date
    _count: PlayerStatsCountAggregateOutputType | null
    _avg: PlayerStatsAvgAggregateOutputType | null
    _sum: PlayerStatsSumAggregateOutputType | null
    _min: PlayerStatsMinAggregateOutputType | null
    _max: PlayerStatsMaxAggregateOutputType | null
  }

  type GetPlayerStatsGroupByPayload<T extends PlayerStatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerStatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerStatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerStatsGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerStatsGroupByOutputType[P]>
        }
      >
    >


  export type PlayerStatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    goals?: boolean
    assists?: boolean
    yellowCards?: boolean
    redCards?: boolean
    matchesPlayed?: boolean
    lastUpdated?: boolean
    player?: boolean | PlayerProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerStats"]>

  export type PlayerStatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    goals?: boolean
    assists?: boolean
    yellowCards?: boolean
    redCards?: boolean
    matchesPlayed?: boolean
    lastUpdated?: boolean
    player?: boolean | PlayerProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerStats"]>

  export type PlayerStatsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    goals?: boolean
    assists?: boolean
    yellowCards?: boolean
    redCards?: boolean
    matchesPlayed?: boolean
    lastUpdated?: boolean
    player?: boolean | PlayerProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerStats"]>

  export type PlayerStatsSelectScalar = {
    id?: boolean
    playerId?: boolean
    goals?: boolean
    assists?: boolean
    yellowCards?: boolean
    redCards?: boolean
    matchesPlayed?: boolean
    lastUpdated?: boolean
  }

  export type PlayerStatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "playerId" | "goals" | "assists" | "yellowCards" | "redCards" | "matchesPlayed" | "lastUpdated", ExtArgs["result"]["playerStats"]>
  export type PlayerStatsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerProfileDefaultArgs<ExtArgs>
  }
  export type PlayerStatsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerProfileDefaultArgs<ExtArgs>
  }
  export type PlayerStatsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerProfileDefaultArgs<ExtArgs>
  }

  export type $PlayerStatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlayerStats"
    objects: {
      player: Prisma.$PlayerProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      playerId: string
      goals: number
      assists: number
      yellowCards: number
      redCards: number
      matchesPlayed: number
      lastUpdated: Date
    }, ExtArgs["result"]["playerStats"]>
    composites: {}
  }

  type PlayerStatsGetPayload<S extends boolean | null | undefined | PlayerStatsDefaultArgs> = $Result.GetResult<Prisma.$PlayerStatsPayload, S>

  type PlayerStatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayerStatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerStatsCountAggregateInputType | true
    }

  export interface PlayerStatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlayerStats'], meta: { name: 'PlayerStats' } }
    /**
     * Find zero or one PlayerStats that matches the filter.
     * @param {PlayerStatsFindUniqueArgs} args - Arguments to find a PlayerStats
     * @example
     * // Get one PlayerStats
     * const playerStats = await prisma.playerStats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerStatsFindUniqueArgs>(args: SelectSubset<T, PlayerStatsFindUniqueArgs<ExtArgs>>): Prisma__PlayerStatsClient<$Result.GetResult<Prisma.$PlayerStatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlayerStats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerStatsFindUniqueOrThrowArgs} args - Arguments to find a PlayerStats
     * @example
     * // Get one PlayerStats
     * const playerStats = await prisma.playerStats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerStatsFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerStatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerStatsClient<$Result.GetResult<Prisma.$PlayerStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerStatsFindFirstArgs} args - Arguments to find a PlayerStats
     * @example
     * // Get one PlayerStats
     * const playerStats = await prisma.playerStats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerStatsFindFirstArgs>(args?: SelectSubset<T, PlayerStatsFindFirstArgs<ExtArgs>>): Prisma__PlayerStatsClient<$Result.GetResult<Prisma.$PlayerStatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerStats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerStatsFindFirstOrThrowArgs} args - Arguments to find a PlayerStats
     * @example
     * // Get one PlayerStats
     * const playerStats = await prisma.playerStats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerStatsFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerStatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerStatsClient<$Result.GetResult<Prisma.$PlayerStatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlayerStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerStatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlayerStats
     * const playerStats = await prisma.playerStats.findMany()
     * 
     * // Get first 10 PlayerStats
     * const playerStats = await prisma.playerStats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerStatsWithIdOnly = await prisma.playerStats.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayerStatsFindManyArgs>(args?: SelectSubset<T, PlayerStatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlayerStats.
     * @param {PlayerStatsCreateArgs} args - Arguments to create a PlayerStats.
     * @example
     * // Create one PlayerStats
     * const PlayerStats = await prisma.playerStats.create({
     *   data: {
     *     // ... data to create a PlayerStats
     *   }
     * })
     * 
     */
    create<T extends PlayerStatsCreateArgs>(args: SelectSubset<T, PlayerStatsCreateArgs<ExtArgs>>): Prisma__PlayerStatsClient<$Result.GetResult<Prisma.$PlayerStatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlayerStats.
     * @param {PlayerStatsCreateManyArgs} args - Arguments to create many PlayerStats.
     * @example
     * // Create many PlayerStats
     * const playerStats = await prisma.playerStats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerStatsCreateManyArgs>(args?: SelectSubset<T, PlayerStatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlayerStats and returns the data saved in the database.
     * @param {PlayerStatsCreateManyAndReturnArgs} args - Arguments to create many PlayerStats.
     * @example
     * // Create many PlayerStats
     * const playerStats = await prisma.playerStats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlayerStats and only return the `id`
     * const playerStatsWithIdOnly = await prisma.playerStats.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayerStatsCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayerStatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerStatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlayerStats.
     * @param {PlayerStatsDeleteArgs} args - Arguments to delete one PlayerStats.
     * @example
     * // Delete one PlayerStats
     * const PlayerStats = await prisma.playerStats.delete({
     *   where: {
     *     // ... filter to delete one PlayerStats
     *   }
     * })
     * 
     */
    delete<T extends PlayerStatsDeleteArgs>(args: SelectSubset<T, PlayerStatsDeleteArgs<ExtArgs>>): Prisma__PlayerStatsClient<$Result.GetResult<Prisma.$PlayerStatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlayerStats.
     * @param {PlayerStatsUpdateArgs} args - Arguments to update one PlayerStats.
     * @example
     * // Update one PlayerStats
     * const playerStats = await prisma.playerStats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerStatsUpdateArgs>(args: SelectSubset<T, PlayerStatsUpdateArgs<ExtArgs>>): Prisma__PlayerStatsClient<$Result.GetResult<Prisma.$PlayerStatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlayerStats.
     * @param {PlayerStatsDeleteManyArgs} args - Arguments to filter PlayerStats to delete.
     * @example
     * // Delete a few PlayerStats
     * const { count } = await prisma.playerStats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerStatsDeleteManyArgs>(args?: SelectSubset<T, PlayerStatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerStatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlayerStats
     * const playerStats = await prisma.playerStats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerStatsUpdateManyArgs>(args: SelectSubset<T, PlayerStatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerStats and returns the data updated in the database.
     * @param {PlayerStatsUpdateManyAndReturnArgs} args - Arguments to update many PlayerStats.
     * @example
     * // Update many PlayerStats
     * const playerStats = await prisma.playerStats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlayerStats and only return the `id`
     * const playerStatsWithIdOnly = await prisma.playerStats.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlayerStatsUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayerStatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerStatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlayerStats.
     * @param {PlayerStatsUpsertArgs} args - Arguments to update or create a PlayerStats.
     * @example
     * // Update or create a PlayerStats
     * const playerStats = await prisma.playerStats.upsert({
     *   create: {
     *     // ... data to create a PlayerStats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlayerStats we want to update
     *   }
     * })
     */
    upsert<T extends PlayerStatsUpsertArgs>(args: SelectSubset<T, PlayerStatsUpsertArgs<ExtArgs>>): Prisma__PlayerStatsClient<$Result.GetResult<Prisma.$PlayerStatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlayerStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerStatsCountArgs} args - Arguments to filter PlayerStats to count.
     * @example
     * // Count the number of PlayerStats
     * const count = await prisma.playerStats.count({
     *   where: {
     *     // ... the filter for the PlayerStats we want to count
     *   }
     * })
    **/
    count<T extends PlayerStatsCountArgs>(
      args?: Subset<T, PlayerStatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerStatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlayerStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerStatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlayerStatsAggregateArgs>(args: Subset<T, PlayerStatsAggregateArgs>): Prisma.PrismaPromise<GetPlayerStatsAggregateType<T>>

    /**
     * Group by PlayerStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerStatsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlayerStatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerStatsGroupByArgs['orderBy'] }
        : { orderBy?: PlayerStatsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayerStatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlayerStats model
   */
  readonly fields: PlayerStatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlayerStats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerStatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player<T extends PlayerProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayerProfileDefaultArgs<ExtArgs>>): Prisma__PlayerProfileClient<$Result.GetResult<Prisma.$PlayerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlayerStats model
   */
  interface PlayerStatsFieldRefs {
    readonly id: FieldRef<"PlayerStats", 'String'>
    readonly playerId: FieldRef<"PlayerStats", 'String'>
    readonly goals: FieldRef<"PlayerStats", 'Int'>
    readonly assists: FieldRef<"PlayerStats", 'Int'>
    readonly yellowCards: FieldRef<"PlayerStats", 'Int'>
    readonly redCards: FieldRef<"PlayerStats", 'Int'>
    readonly matchesPlayed: FieldRef<"PlayerStats", 'Int'>
    readonly lastUpdated: FieldRef<"PlayerStats", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PlayerStats findUnique
   */
  export type PlayerStatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStats
     */
    select?: PlayerStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStats
     */
    omit?: PlayerStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerStatsInclude<ExtArgs> | null
    /**
     * Filter, which PlayerStats to fetch.
     */
    where: PlayerStatsWhereUniqueInput
  }

  /**
   * PlayerStats findUniqueOrThrow
   */
  export type PlayerStatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStats
     */
    select?: PlayerStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStats
     */
    omit?: PlayerStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerStatsInclude<ExtArgs> | null
    /**
     * Filter, which PlayerStats to fetch.
     */
    where: PlayerStatsWhereUniqueInput
  }

  /**
   * PlayerStats findFirst
   */
  export type PlayerStatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStats
     */
    select?: PlayerStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStats
     */
    omit?: PlayerStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerStatsInclude<ExtArgs> | null
    /**
     * Filter, which PlayerStats to fetch.
     */
    where?: PlayerStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerStats to fetch.
     */
    orderBy?: PlayerStatsOrderByWithRelationInput | PlayerStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerStats.
     */
    cursor?: PlayerStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerStats.
     */
    distinct?: PlayerStatsScalarFieldEnum | PlayerStatsScalarFieldEnum[]
  }

  /**
   * PlayerStats findFirstOrThrow
   */
  export type PlayerStatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStats
     */
    select?: PlayerStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStats
     */
    omit?: PlayerStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerStatsInclude<ExtArgs> | null
    /**
     * Filter, which PlayerStats to fetch.
     */
    where?: PlayerStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerStats to fetch.
     */
    orderBy?: PlayerStatsOrderByWithRelationInput | PlayerStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerStats.
     */
    cursor?: PlayerStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerStats.
     */
    distinct?: PlayerStatsScalarFieldEnum | PlayerStatsScalarFieldEnum[]
  }

  /**
   * PlayerStats findMany
   */
  export type PlayerStatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStats
     */
    select?: PlayerStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStats
     */
    omit?: PlayerStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerStatsInclude<ExtArgs> | null
    /**
     * Filter, which PlayerStats to fetch.
     */
    where?: PlayerStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerStats to fetch.
     */
    orderBy?: PlayerStatsOrderByWithRelationInput | PlayerStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlayerStats.
     */
    cursor?: PlayerStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerStats.
     */
    skip?: number
    distinct?: PlayerStatsScalarFieldEnum | PlayerStatsScalarFieldEnum[]
  }

  /**
   * PlayerStats create
   */
  export type PlayerStatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStats
     */
    select?: PlayerStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStats
     */
    omit?: PlayerStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerStatsInclude<ExtArgs> | null
    /**
     * The data needed to create a PlayerStats.
     */
    data: XOR<PlayerStatsCreateInput, PlayerStatsUncheckedCreateInput>
  }

  /**
   * PlayerStats createMany
   */
  export type PlayerStatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlayerStats.
     */
    data: PlayerStatsCreateManyInput | PlayerStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlayerStats createManyAndReturn
   */
  export type PlayerStatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStats
     */
    select?: PlayerStatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStats
     */
    omit?: PlayerStatsOmit<ExtArgs> | null
    /**
     * The data used to create many PlayerStats.
     */
    data: PlayerStatsCreateManyInput | PlayerStatsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerStatsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayerStats update
   */
  export type PlayerStatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStats
     */
    select?: PlayerStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStats
     */
    omit?: PlayerStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerStatsInclude<ExtArgs> | null
    /**
     * The data needed to update a PlayerStats.
     */
    data: XOR<PlayerStatsUpdateInput, PlayerStatsUncheckedUpdateInput>
    /**
     * Choose, which PlayerStats to update.
     */
    where: PlayerStatsWhereUniqueInput
  }

  /**
   * PlayerStats updateMany
   */
  export type PlayerStatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlayerStats.
     */
    data: XOR<PlayerStatsUpdateManyMutationInput, PlayerStatsUncheckedUpdateManyInput>
    /**
     * Filter which PlayerStats to update
     */
    where?: PlayerStatsWhereInput
    /**
     * Limit how many PlayerStats to update.
     */
    limit?: number
  }

  /**
   * PlayerStats updateManyAndReturn
   */
  export type PlayerStatsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStats
     */
    select?: PlayerStatsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStats
     */
    omit?: PlayerStatsOmit<ExtArgs> | null
    /**
     * The data used to update PlayerStats.
     */
    data: XOR<PlayerStatsUpdateManyMutationInput, PlayerStatsUncheckedUpdateManyInput>
    /**
     * Filter which PlayerStats to update
     */
    where?: PlayerStatsWhereInput
    /**
     * Limit how many PlayerStats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerStatsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayerStats upsert
   */
  export type PlayerStatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStats
     */
    select?: PlayerStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStats
     */
    omit?: PlayerStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerStatsInclude<ExtArgs> | null
    /**
     * The filter to search for the PlayerStats to update in case it exists.
     */
    where: PlayerStatsWhereUniqueInput
    /**
     * In case the PlayerStats found by the `where` argument doesn't exist, create a new PlayerStats with this data.
     */
    create: XOR<PlayerStatsCreateInput, PlayerStatsUncheckedCreateInput>
    /**
     * In case the PlayerStats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerStatsUpdateInput, PlayerStatsUncheckedUpdateInput>
  }

  /**
   * PlayerStats delete
   */
  export type PlayerStatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStats
     */
    select?: PlayerStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStats
     */
    omit?: PlayerStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerStatsInclude<ExtArgs> | null
    /**
     * Filter which PlayerStats to delete.
     */
    where: PlayerStatsWhereUniqueInput
  }

  /**
   * PlayerStats deleteMany
   */
  export type PlayerStatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerStats to delete
     */
    where?: PlayerStatsWhereInput
    /**
     * Limit how many PlayerStats to delete.
     */
    limit?: number
  }

  /**
   * PlayerStats without action
   */
  export type PlayerStatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStats
     */
    select?: PlayerStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStats
     */
    omit?: PlayerStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerStatsInclude<ExtArgs> | null
  }


  /**
   * Model Fixture
   */

  export type AggregateFixture = {
    _count: FixtureCountAggregateOutputType | null
    _avg: FixtureAvgAggregateOutputType | null
    _sum: FixtureSumAggregateOutputType | null
    _min: FixtureMinAggregateOutputType | null
    _max: FixtureMaxAggregateOutputType | null
  }

  export type FixtureAvgAggregateOutputType = {
    homeScore: number | null
    awayScore: number | null
  }

  export type FixtureSumAggregateOutputType = {
    homeScore: number | null
    awayScore: number | null
  }

  export type FixtureMinAggregateOutputType = {
    id: string | null
    scheduledTime: Date | null
    venue: string | null
    status: $Enums.MatchStatus | null
    homeTeamId: string | null
    awayTeamId: string | null
    homeScore: number | null
    awayScore: number | null
    tournamentId: string | null
  }

  export type FixtureMaxAggregateOutputType = {
    id: string | null
    scheduledTime: Date | null
    venue: string | null
    status: $Enums.MatchStatus | null
    homeTeamId: string | null
    awayTeamId: string | null
    homeScore: number | null
    awayScore: number | null
    tournamentId: string | null
  }

  export type FixtureCountAggregateOutputType = {
    id: number
    scheduledTime: number
    venue: number
    status: number
    homeTeamId: number
    awayTeamId: number
    homeScore: number
    awayScore: number
    tournamentId: number
    _all: number
  }


  export type FixtureAvgAggregateInputType = {
    homeScore?: true
    awayScore?: true
  }

  export type FixtureSumAggregateInputType = {
    homeScore?: true
    awayScore?: true
  }

  export type FixtureMinAggregateInputType = {
    id?: true
    scheduledTime?: true
    venue?: true
    status?: true
    homeTeamId?: true
    awayTeamId?: true
    homeScore?: true
    awayScore?: true
    tournamentId?: true
  }

  export type FixtureMaxAggregateInputType = {
    id?: true
    scheduledTime?: true
    venue?: true
    status?: true
    homeTeamId?: true
    awayTeamId?: true
    homeScore?: true
    awayScore?: true
    tournamentId?: true
  }

  export type FixtureCountAggregateInputType = {
    id?: true
    scheduledTime?: true
    venue?: true
    status?: true
    homeTeamId?: true
    awayTeamId?: true
    homeScore?: true
    awayScore?: true
    tournamentId?: true
    _all?: true
  }

  export type FixtureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fixture to aggregate.
     */
    where?: FixtureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fixtures to fetch.
     */
    orderBy?: FixtureOrderByWithRelationInput | FixtureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FixtureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fixtures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fixtures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fixtures
    **/
    _count?: true | FixtureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FixtureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FixtureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FixtureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FixtureMaxAggregateInputType
  }

  export type GetFixtureAggregateType<T extends FixtureAggregateArgs> = {
        [P in keyof T & keyof AggregateFixture]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFixture[P]>
      : GetScalarType<T[P], AggregateFixture[P]>
  }




  export type FixtureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FixtureWhereInput
    orderBy?: FixtureOrderByWithAggregationInput | FixtureOrderByWithAggregationInput[]
    by: FixtureScalarFieldEnum[] | FixtureScalarFieldEnum
    having?: FixtureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FixtureCountAggregateInputType | true
    _avg?: FixtureAvgAggregateInputType
    _sum?: FixtureSumAggregateInputType
    _min?: FixtureMinAggregateInputType
    _max?: FixtureMaxAggregateInputType
  }

  export type FixtureGroupByOutputType = {
    id: string
    scheduledTime: Date
    venue: string
    status: $Enums.MatchStatus
    homeTeamId: string
    awayTeamId: string
    homeScore: number | null
    awayScore: number | null
    tournamentId: string | null
    _count: FixtureCountAggregateOutputType | null
    _avg: FixtureAvgAggregateOutputType | null
    _sum: FixtureSumAggregateOutputType | null
    _min: FixtureMinAggregateOutputType | null
    _max: FixtureMaxAggregateOutputType | null
  }

  type GetFixtureGroupByPayload<T extends FixtureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FixtureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FixtureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FixtureGroupByOutputType[P]>
            : GetScalarType<T[P], FixtureGroupByOutputType[P]>
        }
      >
    >


  export type FixtureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scheduledTime?: boolean
    venue?: boolean
    status?: boolean
    homeTeamId?: boolean
    awayTeamId?: boolean
    homeScore?: boolean
    awayScore?: boolean
    tournamentId?: boolean
    homeTeam?: boolean | TeamDefaultArgs<ExtArgs>
    awayTeam?: boolean | TeamDefaultArgs<ExtArgs>
    matchLogs?: boolean | Fixture$matchLogsArgs<ExtArgs>
    formation?: boolean | Fixture$formationArgs<ExtArgs>
    tournament?: boolean | Fixture$tournamentArgs<ExtArgs>
    _count?: boolean | FixtureCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fixture"]>

  export type FixtureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scheduledTime?: boolean
    venue?: boolean
    status?: boolean
    homeTeamId?: boolean
    awayTeamId?: boolean
    homeScore?: boolean
    awayScore?: boolean
    tournamentId?: boolean
    homeTeam?: boolean | TeamDefaultArgs<ExtArgs>
    awayTeam?: boolean | TeamDefaultArgs<ExtArgs>
    tournament?: boolean | Fixture$tournamentArgs<ExtArgs>
  }, ExtArgs["result"]["fixture"]>

  export type FixtureSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scheduledTime?: boolean
    venue?: boolean
    status?: boolean
    homeTeamId?: boolean
    awayTeamId?: boolean
    homeScore?: boolean
    awayScore?: boolean
    tournamentId?: boolean
    homeTeam?: boolean | TeamDefaultArgs<ExtArgs>
    awayTeam?: boolean | TeamDefaultArgs<ExtArgs>
    tournament?: boolean | Fixture$tournamentArgs<ExtArgs>
  }, ExtArgs["result"]["fixture"]>

  export type FixtureSelectScalar = {
    id?: boolean
    scheduledTime?: boolean
    venue?: boolean
    status?: boolean
    homeTeamId?: boolean
    awayTeamId?: boolean
    homeScore?: boolean
    awayScore?: boolean
    tournamentId?: boolean
  }

  export type FixtureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "scheduledTime" | "venue" | "status" | "homeTeamId" | "awayTeamId" | "homeScore" | "awayScore" | "tournamentId", ExtArgs["result"]["fixture"]>
  export type FixtureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    homeTeam?: boolean | TeamDefaultArgs<ExtArgs>
    awayTeam?: boolean | TeamDefaultArgs<ExtArgs>
    matchLogs?: boolean | Fixture$matchLogsArgs<ExtArgs>
    formation?: boolean | Fixture$formationArgs<ExtArgs>
    tournament?: boolean | Fixture$tournamentArgs<ExtArgs>
    _count?: boolean | FixtureCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FixtureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    homeTeam?: boolean | TeamDefaultArgs<ExtArgs>
    awayTeam?: boolean | TeamDefaultArgs<ExtArgs>
    tournament?: boolean | Fixture$tournamentArgs<ExtArgs>
  }
  export type FixtureIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    homeTeam?: boolean | TeamDefaultArgs<ExtArgs>
    awayTeam?: boolean | TeamDefaultArgs<ExtArgs>
    tournament?: boolean | Fixture$tournamentArgs<ExtArgs>
  }

  export type $FixturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fixture"
    objects: {
      homeTeam: Prisma.$TeamPayload<ExtArgs>
      awayTeam: Prisma.$TeamPayload<ExtArgs>
      matchLogs: Prisma.$MatchLogPayload<ExtArgs>[]
      formation: Prisma.$MatchFormationPayload<ExtArgs> | null
      tournament: Prisma.$TournamentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      scheduledTime: Date
      venue: string
      status: $Enums.MatchStatus
      homeTeamId: string
      awayTeamId: string
      homeScore: number | null
      awayScore: number | null
      tournamentId: string | null
    }, ExtArgs["result"]["fixture"]>
    composites: {}
  }

  type FixtureGetPayload<S extends boolean | null | undefined | FixtureDefaultArgs> = $Result.GetResult<Prisma.$FixturePayload, S>

  type FixtureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FixtureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FixtureCountAggregateInputType | true
    }

  export interface FixtureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fixture'], meta: { name: 'Fixture' } }
    /**
     * Find zero or one Fixture that matches the filter.
     * @param {FixtureFindUniqueArgs} args - Arguments to find a Fixture
     * @example
     * // Get one Fixture
     * const fixture = await prisma.fixture.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FixtureFindUniqueArgs>(args: SelectSubset<T, FixtureFindUniqueArgs<ExtArgs>>): Prisma__FixtureClient<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fixture that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FixtureFindUniqueOrThrowArgs} args - Arguments to find a Fixture
     * @example
     * // Get one Fixture
     * const fixture = await prisma.fixture.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FixtureFindUniqueOrThrowArgs>(args: SelectSubset<T, FixtureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FixtureClient<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fixture that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FixtureFindFirstArgs} args - Arguments to find a Fixture
     * @example
     * // Get one Fixture
     * const fixture = await prisma.fixture.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FixtureFindFirstArgs>(args?: SelectSubset<T, FixtureFindFirstArgs<ExtArgs>>): Prisma__FixtureClient<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fixture that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FixtureFindFirstOrThrowArgs} args - Arguments to find a Fixture
     * @example
     * // Get one Fixture
     * const fixture = await prisma.fixture.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FixtureFindFirstOrThrowArgs>(args?: SelectSubset<T, FixtureFindFirstOrThrowArgs<ExtArgs>>): Prisma__FixtureClient<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fixtures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FixtureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fixtures
     * const fixtures = await prisma.fixture.findMany()
     * 
     * // Get first 10 Fixtures
     * const fixtures = await prisma.fixture.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fixtureWithIdOnly = await prisma.fixture.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FixtureFindManyArgs>(args?: SelectSubset<T, FixtureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fixture.
     * @param {FixtureCreateArgs} args - Arguments to create a Fixture.
     * @example
     * // Create one Fixture
     * const Fixture = await prisma.fixture.create({
     *   data: {
     *     // ... data to create a Fixture
     *   }
     * })
     * 
     */
    create<T extends FixtureCreateArgs>(args: SelectSubset<T, FixtureCreateArgs<ExtArgs>>): Prisma__FixtureClient<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fixtures.
     * @param {FixtureCreateManyArgs} args - Arguments to create many Fixtures.
     * @example
     * // Create many Fixtures
     * const fixture = await prisma.fixture.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FixtureCreateManyArgs>(args?: SelectSubset<T, FixtureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fixtures and returns the data saved in the database.
     * @param {FixtureCreateManyAndReturnArgs} args - Arguments to create many Fixtures.
     * @example
     * // Create many Fixtures
     * const fixture = await prisma.fixture.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fixtures and only return the `id`
     * const fixtureWithIdOnly = await prisma.fixture.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FixtureCreateManyAndReturnArgs>(args?: SelectSubset<T, FixtureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fixture.
     * @param {FixtureDeleteArgs} args - Arguments to delete one Fixture.
     * @example
     * // Delete one Fixture
     * const Fixture = await prisma.fixture.delete({
     *   where: {
     *     // ... filter to delete one Fixture
     *   }
     * })
     * 
     */
    delete<T extends FixtureDeleteArgs>(args: SelectSubset<T, FixtureDeleteArgs<ExtArgs>>): Prisma__FixtureClient<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fixture.
     * @param {FixtureUpdateArgs} args - Arguments to update one Fixture.
     * @example
     * // Update one Fixture
     * const fixture = await prisma.fixture.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FixtureUpdateArgs>(args: SelectSubset<T, FixtureUpdateArgs<ExtArgs>>): Prisma__FixtureClient<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fixtures.
     * @param {FixtureDeleteManyArgs} args - Arguments to filter Fixtures to delete.
     * @example
     * // Delete a few Fixtures
     * const { count } = await prisma.fixture.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FixtureDeleteManyArgs>(args?: SelectSubset<T, FixtureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fixtures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FixtureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fixtures
     * const fixture = await prisma.fixture.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FixtureUpdateManyArgs>(args: SelectSubset<T, FixtureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fixtures and returns the data updated in the database.
     * @param {FixtureUpdateManyAndReturnArgs} args - Arguments to update many Fixtures.
     * @example
     * // Update many Fixtures
     * const fixture = await prisma.fixture.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fixtures and only return the `id`
     * const fixtureWithIdOnly = await prisma.fixture.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FixtureUpdateManyAndReturnArgs>(args: SelectSubset<T, FixtureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fixture.
     * @param {FixtureUpsertArgs} args - Arguments to update or create a Fixture.
     * @example
     * // Update or create a Fixture
     * const fixture = await prisma.fixture.upsert({
     *   create: {
     *     // ... data to create a Fixture
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fixture we want to update
     *   }
     * })
     */
    upsert<T extends FixtureUpsertArgs>(args: SelectSubset<T, FixtureUpsertArgs<ExtArgs>>): Prisma__FixtureClient<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fixtures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FixtureCountArgs} args - Arguments to filter Fixtures to count.
     * @example
     * // Count the number of Fixtures
     * const count = await prisma.fixture.count({
     *   where: {
     *     // ... the filter for the Fixtures we want to count
     *   }
     * })
    **/
    count<T extends FixtureCountArgs>(
      args?: Subset<T, FixtureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FixtureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fixture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FixtureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FixtureAggregateArgs>(args: Subset<T, FixtureAggregateArgs>): Prisma.PrismaPromise<GetFixtureAggregateType<T>>

    /**
     * Group by Fixture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FixtureGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FixtureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FixtureGroupByArgs['orderBy'] }
        : { orderBy?: FixtureGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FixtureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFixtureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fixture model
   */
  readonly fields: FixtureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fixture.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FixtureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    homeTeam<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    awayTeam<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    matchLogs<T extends Fixture$matchLogsArgs<ExtArgs> = {}>(args?: Subset<T, Fixture$matchLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    formation<T extends Fixture$formationArgs<ExtArgs> = {}>(args?: Subset<T, Fixture$formationArgs<ExtArgs>>): Prisma__MatchFormationClient<$Result.GetResult<Prisma.$MatchFormationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tournament<T extends Fixture$tournamentArgs<ExtArgs> = {}>(args?: Subset<T, Fixture$tournamentArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Fixture model
   */
  interface FixtureFieldRefs {
    readonly id: FieldRef<"Fixture", 'String'>
    readonly scheduledTime: FieldRef<"Fixture", 'DateTime'>
    readonly venue: FieldRef<"Fixture", 'String'>
    readonly status: FieldRef<"Fixture", 'MatchStatus'>
    readonly homeTeamId: FieldRef<"Fixture", 'String'>
    readonly awayTeamId: FieldRef<"Fixture", 'String'>
    readonly homeScore: FieldRef<"Fixture", 'Int'>
    readonly awayScore: FieldRef<"Fixture", 'Int'>
    readonly tournamentId: FieldRef<"Fixture", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Fixture findUnique
   */
  export type FixtureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fixture
     */
    omit?: FixtureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
    /**
     * Filter, which Fixture to fetch.
     */
    where: FixtureWhereUniqueInput
  }

  /**
   * Fixture findUniqueOrThrow
   */
  export type FixtureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fixture
     */
    omit?: FixtureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
    /**
     * Filter, which Fixture to fetch.
     */
    where: FixtureWhereUniqueInput
  }

  /**
   * Fixture findFirst
   */
  export type FixtureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fixture
     */
    omit?: FixtureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
    /**
     * Filter, which Fixture to fetch.
     */
    where?: FixtureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fixtures to fetch.
     */
    orderBy?: FixtureOrderByWithRelationInput | FixtureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fixtures.
     */
    cursor?: FixtureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fixtures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fixtures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fixtures.
     */
    distinct?: FixtureScalarFieldEnum | FixtureScalarFieldEnum[]
  }

  /**
   * Fixture findFirstOrThrow
   */
  export type FixtureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fixture
     */
    omit?: FixtureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
    /**
     * Filter, which Fixture to fetch.
     */
    where?: FixtureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fixtures to fetch.
     */
    orderBy?: FixtureOrderByWithRelationInput | FixtureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fixtures.
     */
    cursor?: FixtureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fixtures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fixtures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fixtures.
     */
    distinct?: FixtureScalarFieldEnum | FixtureScalarFieldEnum[]
  }

  /**
   * Fixture findMany
   */
  export type FixtureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fixture
     */
    omit?: FixtureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
    /**
     * Filter, which Fixtures to fetch.
     */
    where?: FixtureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fixtures to fetch.
     */
    orderBy?: FixtureOrderByWithRelationInput | FixtureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fixtures.
     */
    cursor?: FixtureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fixtures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fixtures.
     */
    skip?: number
    distinct?: FixtureScalarFieldEnum | FixtureScalarFieldEnum[]
  }

  /**
   * Fixture create
   */
  export type FixtureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fixture
     */
    omit?: FixtureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
    /**
     * The data needed to create a Fixture.
     */
    data: XOR<FixtureCreateInput, FixtureUncheckedCreateInput>
  }

  /**
   * Fixture createMany
   */
  export type FixtureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fixtures.
     */
    data: FixtureCreateManyInput | FixtureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fixture createManyAndReturn
   */
  export type FixtureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fixture
     */
    omit?: FixtureOmit<ExtArgs> | null
    /**
     * The data used to create many Fixtures.
     */
    data: FixtureCreateManyInput | FixtureCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fixture update
   */
  export type FixtureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fixture
     */
    omit?: FixtureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
    /**
     * The data needed to update a Fixture.
     */
    data: XOR<FixtureUpdateInput, FixtureUncheckedUpdateInput>
    /**
     * Choose, which Fixture to update.
     */
    where: FixtureWhereUniqueInput
  }

  /**
   * Fixture updateMany
   */
  export type FixtureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fixtures.
     */
    data: XOR<FixtureUpdateManyMutationInput, FixtureUncheckedUpdateManyInput>
    /**
     * Filter which Fixtures to update
     */
    where?: FixtureWhereInput
    /**
     * Limit how many Fixtures to update.
     */
    limit?: number
  }

  /**
   * Fixture updateManyAndReturn
   */
  export type FixtureUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fixture
     */
    omit?: FixtureOmit<ExtArgs> | null
    /**
     * The data used to update Fixtures.
     */
    data: XOR<FixtureUpdateManyMutationInput, FixtureUncheckedUpdateManyInput>
    /**
     * Filter which Fixtures to update
     */
    where?: FixtureWhereInput
    /**
     * Limit how many Fixtures to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fixture upsert
   */
  export type FixtureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fixture
     */
    omit?: FixtureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
    /**
     * The filter to search for the Fixture to update in case it exists.
     */
    where: FixtureWhereUniqueInput
    /**
     * In case the Fixture found by the `where` argument doesn't exist, create a new Fixture with this data.
     */
    create: XOR<FixtureCreateInput, FixtureUncheckedCreateInput>
    /**
     * In case the Fixture was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FixtureUpdateInput, FixtureUncheckedUpdateInput>
  }

  /**
   * Fixture delete
   */
  export type FixtureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fixture
     */
    omit?: FixtureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
    /**
     * Filter which Fixture to delete.
     */
    where: FixtureWhereUniqueInput
  }

  /**
   * Fixture deleteMany
   */
  export type FixtureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fixtures to delete
     */
    where?: FixtureWhereInput
    /**
     * Limit how many Fixtures to delete.
     */
    limit?: number
  }

  /**
   * Fixture.matchLogs
   */
  export type Fixture$matchLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchLog
     */
    select?: MatchLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchLog
     */
    omit?: MatchLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchLogInclude<ExtArgs> | null
    where?: MatchLogWhereInput
    orderBy?: MatchLogOrderByWithRelationInput | MatchLogOrderByWithRelationInput[]
    cursor?: MatchLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchLogScalarFieldEnum | MatchLogScalarFieldEnum[]
  }

  /**
   * Fixture.formation
   */
  export type Fixture$formationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchFormation
     */
    select?: MatchFormationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchFormation
     */
    omit?: MatchFormationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchFormationInclude<ExtArgs> | null
    where?: MatchFormationWhereInput
  }

  /**
   * Fixture.tournament
   */
  export type Fixture$tournamentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    where?: TournamentWhereInput
  }

  /**
   * Fixture without action
   */
  export type FixtureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fixture
     */
    omit?: FixtureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
  }


  /**
   * Model MatchFormation
   */

  export type AggregateMatchFormation = {
    _count: MatchFormationCountAggregateOutputType | null
    _min: MatchFormationMinAggregateOutputType | null
    _max: MatchFormationMaxAggregateOutputType | null
  }

  export type MatchFormationMinAggregateOutputType = {
    id: string | null
    fixtureId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatchFormationMaxAggregateOutputType = {
    id: string | null
    fixtureId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatchFormationCountAggregateOutputType = {
    id: number
    fixtureId: number
    formationDetails: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MatchFormationMinAggregateInputType = {
    id?: true
    fixtureId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatchFormationMaxAggregateInputType = {
    id?: true
    fixtureId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatchFormationCountAggregateInputType = {
    id?: true
    fixtureId?: true
    formationDetails?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MatchFormationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchFormation to aggregate.
     */
    where?: MatchFormationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchFormations to fetch.
     */
    orderBy?: MatchFormationOrderByWithRelationInput | MatchFormationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchFormationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchFormations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchFormations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MatchFormations
    **/
    _count?: true | MatchFormationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchFormationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchFormationMaxAggregateInputType
  }

  export type GetMatchFormationAggregateType<T extends MatchFormationAggregateArgs> = {
        [P in keyof T & keyof AggregateMatchFormation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatchFormation[P]>
      : GetScalarType<T[P], AggregateMatchFormation[P]>
  }




  export type MatchFormationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchFormationWhereInput
    orderBy?: MatchFormationOrderByWithAggregationInput | MatchFormationOrderByWithAggregationInput[]
    by: MatchFormationScalarFieldEnum[] | MatchFormationScalarFieldEnum
    having?: MatchFormationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchFormationCountAggregateInputType | true
    _min?: MatchFormationMinAggregateInputType
    _max?: MatchFormationMaxAggregateInputType
  }

  export type MatchFormationGroupByOutputType = {
    id: string
    fixtureId: string
    formationDetails: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: MatchFormationCountAggregateOutputType | null
    _min: MatchFormationMinAggregateOutputType | null
    _max: MatchFormationMaxAggregateOutputType | null
  }

  type GetMatchFormationGroupByPayload<T extends MatchFormationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchFormationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchFormationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchFormationGroupByOutputType[P]>
            : GetScalarType<T[P], MatchFormationGroupByOutputType[P]>
        }
      >
    >


  export type MatchFormationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fixtureId?: boolean
    formationDetails?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fixture?: boolean | FixtureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchFormation"]>

  export type MatchFormationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fixtureId?: boolean
    formationDetails?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fixture?: boolean | FixtureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchFormation"]>

  export type MatchFormationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fixtureId?: boolean
    formationDetails?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fixture?: boolean | FixtureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchFormation"]>

  export type MatchFormationSelectScalar = {
    id?: boolean
    fixtureId?: boolean
    formationDetails?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MatchFormationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fixtureId" | "formationDetails" | "createdAt" | "updatedAt", ExtArgs["result"]["matchFormation"]>
  export type MatchFormationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fixture?: boolean | FixtureDefaultArgs<ExtArgs>
  }
  export type MatchFormationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fixture?: boolean | FixtureDefaultArgs<ExtArgs>
  }
  export type MatchFormationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fixture?: boolean | FixtureDefaultArgs<ExtArgs>
  }

  export type $MatchFormationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MatchFormation"
    objects: {
      fixture: Prisma.$FixturePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fixtureId: string
      formationDetails: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["matchFormation"]>
    composites: {}
  }

  type MatchFormationGetPayload<S extends boolean | null | undefined | MatchFormationDefaultArgs> = $Result.GetResult<Prisma.$MatchFormationPayload, S>

  type MatchFormationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchFormationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchFormationCountAggregateInputType | true
    }

  export interface MatchFormationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MatchFormation'], meta: { name: 'MatchFormation' } }
    /**
     * Find zero or one MatchFormation that matches the filter.
     * @param {MatchFormationFindUniqueArgs} args - Arguments to find a MatchFormation
     * @example
     * // Get one MatchFormation
     * const matchFormation = await prisma.matchFormation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchFormationFindUniqueArgs>(args: SelectSubset<T, MatchFormationFindUniqueArgs<ExtArgs>>): Prisma__MatchFormationClient<$Result.GetResult<Prisma.$MatchFormationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MatchFormation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchFormationFindUniqueOrThrowArgs} args - Arguments to find a MatchFormation
     * @example
     * // Get one MatchFormation
     * const matchFormation = await prisma.matchFormation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchFormationFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchFormationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchFormationClient<$Result.GetResult<Prisma.$MatchFormationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MatchFormation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFormationFindFirstArgs} args - Arguments to find a MatchFormation
     * @example
     * // Get one MatchFormation
     * const matchFormation = await prisma.matchFormation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchFormationFindFirstArgs>(args?: SelectSubset<T, MatchFormationFindFirstArgs<ExtArgs>>): Prisma__MatchFormationClient<$Result.GetResult<Prisma.$MatchFormationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MatchFormation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFormationFindFirstOrThrowArgs} args - Arguments to find a MatchFormation
     * @example
     * // Get one MatchFormation
     * const matchFormation = await prisma.matchFormation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchFormationFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchFormationFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchFormationClient<$Result.GetResult<Prisma.$MatchFormationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MatchFormations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFormationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MatchFormations
     * const matchFormations = await prisma.matchFormation.findMany()
     * 
     * // Get first 10 MatchFormations
     * const matchFormations = await prisma.matchFormation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchFormationWithIdOnly = await prisma.matchFormation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchFormationFindManyArgs>(args?: SelectSubset<T, MatchFormationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchFormationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MatchFormation.
     * @param {MatchFormationCreateArgs} args - Arguments to create a MatchFormation.
     * @example
     * // Create one MatchFormation
     * const MatchFormation = await prisma.matchFormation.create({
     *   data: {
     *     // ... data to create a MatchFormation
     *   }
     * })
     * 
     */
    create<T extends MatchFormationCreateArgs>(args: SelectSubset<T, MatchFormationCreateArgs<ExtArgs>>): Prisma__MatchFormationClient<$Result.GetResult<Prisma.$MatchFormationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MatchFormations.
     * @param {MatchFormationCreateManyArgs} args - Arguments to create many MatchFormations.
     * @example
     * // Create many MatchFormations
     * const matchFormation = await prisma.matchFormation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchFormationCreateManyArgs>(args?: SelectSubset<T, MatchFormationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MatchFormations and returns the data saved in the database.
     * @param {MatchFormationCreateManyAndReturnArgs} args - Arguments to create many MatchFormations.
     * @example
     * // Create many MatchFormations
     * const matchFormation = await prisma.matchFormation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MatchFormations and only return the `id`
     * const matchFormationWithIdOnly = await prisma.matchFormation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchFormationCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchFormationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchFormationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MatchFormation.
     * @param {MatchFormationDeleteArgs} args - Arguments to delete one MatchFormation.
     * @example
     * // Delete one MatchFormation
     * const MatchFormation = await prisma.matchFormation.delete({
     *   where: {
     *     // ... filter to delete one MatchFormation
     *   }
     * })
     * 
     */
    delete<T extends MatchFormationDeleteArgs>(args: SelectSubset<T, MatchFormationDeleteArgs<ExtArgs>>): Prisma__MatchFormationClient<$Result.GetResult<Prisma.$MatchFormationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MatchFormation.
     * @param {MatchFormationUpdateArgs} args - Arguments to update one MatchFormation.
     * @example
     * // Update one MatchFormation
     * const matchFormation = await prisma.matchFormation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchFormationUpdateArgs>(args: SelectSubset<T, MatchFormationUpdateArgs<ExtArgs>>): Prisma__MatchFormationClient<$Result.GetResult<Prisma.$MatchFormationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MatchFormations.
     * @param {MatchFormationDeleteManyArgs} args - Arguments to filter MatchFormations to delete.
     * @example
     * // Delete a few MatchFormations
     * const { count } = await prisma.matchFormation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchFormationDeleteManyArgs>(args?: SelectSubset<T, MatchFormationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchFormations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFormationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MatchFormations
     * const matchFormation = await prisma.matchFormation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchFormationUpdateManyArgs>(args: SelectSubset<T, MatchFormationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchFormations and returns the data updated in the database.
     * @param {MatchFormationUpdateManyAndReturnArgs} args - Arguments to update many MatchFormations.
     * @example
     * // Update many MatchFormations
     * const matchFormation = await prisma.matchFormation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MatchFormations and only return the `id`
     * const matchFormationWithIdOnly = await prisma.matchFormation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MatchFormationUpdateManyAndReturnArgs>(args: SelectSubset<T, MatchFormationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchFormationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MatchFormation.
     * @param {MatchFormationUpsertArgs} args - Arguments to update or create a MatchFormation.
     * @example
     * // Update or create a MatchFormation
     * const matchFormation = await prisma.matchFormation.upsert({
     *   create: {
     *     // ... data to create a MatchFormation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MatchFormation we want to update
     *   }
     * })
     */
    upsert<T extends MatchFormationUpsertArgs>(args: SelectSubset<T, MatchFormationUpsertArgs<ExtArgs>>): Prisma__MatchFormationClient<$Result.GetResult<Prisma.$MatchFormationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MatchFormations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFormationCountArgs} args - Arguments to filter MatchFormations to count.
     * @example
     * // Count the number of MatchFormations
     * const count = await prisma.matchFormation.count({
     *   where: {
     *     // ... the filter for the MatchFormations we want to count
     *   }
     * })
    **/
    count<T extends MatchFormationCountArgs>(
      args?: Subset<T, MatchFormationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchFormationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MatchFormation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFormationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MatchFormationAggregateArgs>(args: Subset<T, MatchFormationAggregateArgs>): Prisma.PrismaPromise<GetMatchFormationAggregateType<T>>

    /**
     * Group by MatchFormation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFormationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MatchFormationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchFormationGroupByArgs['orderBy'] }
        : { orderBy?: MatchFormationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MatchFormationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchFormationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MatchFormation model
   */
  readonly fields: MatchFormationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MatchFormation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchFormationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fixture<T extends FixtureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FixtureDefaultArgs<ExtArgs>>): Prisma__FixtureClient<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MatchFormation model
   */
  interface MatchFormationFieldRefs {
    readonly id: FieldRef<"MatchFormation", 'String'>
    readonly fixtureId: FieldRef<"MatchFormation", 'String'>
    readonly formationDetails: FieldRef<"MatchFormation", 'Json'>
    readonly createdAt: FieldRef<"MatchFormation", 'DateTime'>
    readonly updatedAt: FieldRef<"MatchFormation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MatchFormation findUnique
   */
  export type MatchFormationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchFormation
     */
    select?: MatchFormationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchFormation
     */
    omit?: MatchFormationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchFormationInclude<ExtArgs> | null
    /**
     * Filter, which MatchFormation to fetch.
     */
    where: MatchFormationWhereUniqueInput
  }

  /**
   * MatchFormation findUniqueOrThrow
   */
  export type MatchFormationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchFormation
     */
    select?: MatchFormationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchFormation
     */
    omit?: MatchFormationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchFormationInclude<ExtArgs> | null
    /**
     * Filter, which MatchFormation to fetch.
     */
    where: MatchFormationWhereUniqueInput
  }

  /**
   * MatchFormation findFirst
   */
  export type MatchFormationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchFormation
     */
    select?: MatchFormationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchFormation
     */
    omit?: MatchFormationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchFormationInclude<ExtArgs> | null
    /**
     * Filter, which MatchFormation to fetch.
     */
    where?: MatchFormationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchFormations to fetch.
     */
    orderBy?: MatchFormationOrderByWithRelationInput | MatchFormationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchFormations.
     */
    cursor?: MatchFormationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchFormations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchFormations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchFormations.
     */
    distinct?: MatchFormationScalarFieldEnum | MatchFormationScalarFieldEnum[]
  }

  /**
   * MatchFormation findFirstOrThrow
   */
  export type MatchFormationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchFormation
     */
    select?: MatchFormationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchFormation
     */
    omit?: MatchFormationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchFormationInclude<ExtArgs> | null
    /**
     * Filter, which MatchFormation to fetch.
     */
    where?: MatchFormationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchFormations to fetch.
     */
    orderBy?: MatchFormationOrderByWithRelationInput | MatchFormationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchFormations.
     */
    cursor?: MatchFormationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchFormations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchFormations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchFormations.
     */
    distinct?: MatchFormationScalarFieldEnum | MatchFormationScalarFieldEnum[]
  }

  /**
   * MatchFormation findMany
   */
  export type MatchFormationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchFormation
     */
    select?: MatchFormationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchFormation
     */
    omit?: MatchFormationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchFormationInclude<ExtArgs> | null
    /**
     * Filter, which MatchFormations to fetch.
     */
    where?: MatchFormationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchFormations to fetch.
     */
    orderBy?: MatchFormationOrderByWithRelationInput | MatchFormationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MatchFormations.
     */
    cursor?: MatchFormationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchFormations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchFormations.
     */
    skip?: number
    distinct?: MatchFormationScalarFieldEnum | MatchFormationScalarFieldEnum[]
  }

  /**
   * MatchFormation create
   */
  export type MatchFormationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchFormation
     */
    select?: MatchFormationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchFormation
     */
    omit?: MatchFormationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchFormationInclude<ExtArgs> | null
    /**
     * The data needed to create a MatchFormation.
     */
    data: XOR<MatchFormationCreateInput, MatchFormationUncheckedCreateInput>
  }

  /**
   * MatchFormation createMany
   */
  export type MatchFormationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MatchFormations.
     */
    data: MatchFormationCreateManyInput | MatchFormationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MatchFormation createManyAndReturn
   */
  export type MatchFormationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchFormation
     */
    select?: MatchFormationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MatchFormation
     */
    omit?: MatchFormationOmit<ExtArgs> | null
    /**
     * The data used to create many MatchFormations.
     */
    data: MatchFormationCreateManyInput | MatchFormationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchFormationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MatchFormation update
   */
  export type MatchFormationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchFormation
     */
    select?: MatchFormationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchFormation
     */
    omit?: MatchFormationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchFormationInclude<ExtArgs> | null
    /**
     * The data needed to update a MatchFormation.
     */
    data: XOR<MatchFormationUpdateInput, MatchFormationUncheckedUpdateInput>
    /**
     * Choose, which MatchFormation to update.
     */
    where: MatchFormationWhereUniqueInput
  }

  /**
   * MatchFormation updateMany
   */
  export type MatchFormationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MatchFormations.
     */
    data: XOR<MatchFormationUpdateManyMutationInput, MatchFormationUncheckedUpdateManyInput>
    /**
     * Filter which MatchFormations to update
     */
    where?: MatchFormationWhereInput
    /**
     * Limit how many MatchFormations to update.
     */
    limit?: number
  }

  /**
   * MatchFormation updateManyAndReturn
   */
  export type MatchFormationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchFormation
     */
    select?: MatchFormationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MatchFormation
     */
    omit?: MatchFormationOmit<ExtArgs> | null
    /**
     * The data used to update MatchFormations.
     */
    data: XOR<MatchFormationUpdateManyMutationInput, MatchFormationUncheckedUpdateManyInput>
    /**
     * Filter which MatchFormations to update
     */
    where?: MatchFormationWhereInput
    /**
     * Limit how many MatchFormations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchFormationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MatchFormation upsert
   */
  export type MatchFormationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchFormation
     */
    select?: MatchFormationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchFormation
     */
    omit?: MatchFormationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchFormationInclude<ExtArgs> | null
    /**
     * The filter to search for the MatchFormation to update in case it exists.
     */
    where: MatchFormationWhereUniqueInput
    /**
     * In case the MatchFormation found by the `where` argument doesn't exist, create a new MatchFormation with this data.
     */
    create: XOR<MatchFormationCreateInput, MatchFormationUncheckedCreateInput>
    /**
     * In case the MatchFormation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchFormationUpdateInput, MatchFormationUncheckedUpdateInput>
  }

  /**
   * MatchFormation delete
   */
  export type MatchFormationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchFormation
     */
    select?: MatchFormationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchFormation
     */
    omit?: MatchFormationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchFormationInclude<ExtArgs> | null
    /**
     * Filter which MatchFormation to delete.
     */
    where: MatchFormationWhereUniqueInput
  }

  /**
   * MatchFormation deleteMany
   */
  export type MatchFormationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchFormations to delete
     */
    where?: MatchFormationWhereInput
    /**
     * Limit how many MatchFormations to delete.
     */
    limit?: number
  }

  /**
   * MatchFormation without action
   */
  export type MatchFormationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchFormation
     */
    select?: MatchFormationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchFormation
     */
    omit?: MatchFormationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchFormationInclude<ExtArgs> | null
  }


  /**
   * Model MatchLog
   */

  export type AggregateMatchLog = {
    _count: MatchLogCountAggregateOutputType | null
    _min: MatchLogMinAggregateOutputType | null
    _max: MatchLogMaxAggregateOutputType | null
  }

  export type MatchLogMinAggregateOutputType = {
    id: string | null
    fixtureId: string | null
    logEntry: string | null
    createdAt: Date | null
  }

  export type MatchLogMaxAggregateOutputType = {
    id: string | null
    fixtureId: string | null
    logEntry: string | null
    createdAt: Date | null
  }

  export type MatchLogCountAggregateOutputType = {
    id: number
    fixtureId: number
    logEntry: number
    createdAt: number
    _all: number
  }


  export type MatchLogMinAggregateInputType = {
    id?: true
    fixtureId?: true
    logEntry?: true
    createdAt?: true
  }

  export type MatchLogMaxAggregateInputType = {
    id?: true
    fixtureId?: true
    logEntry?: true
    createdAt?: true
  }

  export type MatchLogCountAggregateInputType = {
    id?: true
    fixtureId?: true
    logEntry?: true
    createdAt?: true
    _all?: true
  }

  export type MatchLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchLog to aggregate.
     */
    where?: MatchLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchLogs to fetch.
     */
    orderBy?: MatchLogOrderByWithRelationInput | MatchLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MatchLogs
    **/
    _count?: true | MatchLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchLogMaxAggregateInputType
  }

  export type GetMatchLogAggregateType<T extends MatchLogAggregateArgs> = {
        [P in keyof T & keyof AggregateMatchLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatchLog[P]>
      : GetScalarType<T[P], AggregateMatchLog[P]>
  }




  export type MatchLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchLogWhereInput
    orderBy?: MatchLogOrderByWithAggregationInput | MatchLogOrderByWithAggregationInput[]
    by: MatchLogScalarFieldEnum[] | MatchLogScalarFieldEnum
    having?: MatchLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchLogCountAggregateInputType | true
    _min?: MatchLogMinAggregateInputType
    _max?: MatchLogMaxAggregateInputType
  }

  export type MatchLogGroupByOutputType = {
    id: string
    fixtureId: string
    logEntry: string
    createdAt: Date
    _count: MatchLogCountAggregateOutputType | null
    _min: MatchLogMinAggregateOutputType | null
    _max: MatchLogMaxAggregateOutputType | null
  }

  type GetMatchLogGroupByPayload<T extends MatchLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchLogGroupByOutputType[P]>
            : GetScalarType<T[P], MatchLogGroupByOutputType[P]>
        }
      >
    >


  export type MatchLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fixtureId?: boolean
    logEntry?: boolean
    createdAt?: boolean
    fixture?: boolean | FixtureDefaultArgs<ExtArgs>
    playerLogs?: boolean | MatchLog$playerLogsArgs<ExtArgs>
    _count?: boolean | MatchLogCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchLog"]>

  export type MatchLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fixtureId?: boolean
    logEntry?: boolean
    createdAt?: boolean
    fixture?: boolean | FixtureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchLog"]>

  export type MatchLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fixtureId?: boolean
    logEntry?: boolean
    createdAt?: boolean
    fixture?: boolean | FixtureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchLog"]>

  export type MatchLogSelectScalar = {
    id?: boolean
    fixtureId?: boolean
    logEntry?: boolean
    createdAt?: boolean
  }

  export type MatchLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fixtureId" | "logEntry" | "createdAt", ExtArgs["result"]["matchLog"]>
  export type MatchLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fixture?: boolean | FixtureDefaultArgs<ExtArgs>
    playerLogs?: boolean | MatchLog$playerLogsArgs<ExtArgs>
    _count?: boolean | MatchLogCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MatchLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fixture?: boolean | FixtureDefaultArgs<ExtArgs>
  }
  export type MatchLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fixture?: boolean | FixtureDefaultArgs<ExtArgs>
  }

  export type $MatchLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MatchLog"
    objects: {
      fixture: Prisma.$FixturePayload<ExtArgs>
      playerLogs: Prisma.$MatchPlayerLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fixtureId: string
      logEntry: string
      createdAt: Date
    }, ExtArgs["result"]["matchLog"]>
    composites: {}
  }

  type MatchLogGetPayload<S extends boolean | null | undefined | MatchLogDefaultArgs> = $Result.GetResult<Prisma.$MatchLogPayload, S>

  type MatchLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchLogCountAggregateInputType | true
    }

  export interface MatchLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MatchLog'], meta: { name: 'MatchLog' } }
    /**
     * Find zero or one MatchLog that matches the filter.
     * @param {MatchLogFindUniqueArgs} args - Arguments to find a MatchLog
     * @example
     * // Get one MatchLog
     * const matchLog = await prisma.matchLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchLogFindUniqueArgs>(args: SelectSubset<T, MatchLogFindUniqueArgs<ExtArgs>>): Prisma__MatchLogClient<$Result.GetResult<Prisma.$MatchLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MatchLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchLogFindUniqueOrThrowArgs} args - Arguments to find a MatchLog
     * @example
     * // Get one MatchLog
     * const matchLog = await prisma.matchLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchLogFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchLogClient<$Result.GetResult<Prisma.$MatchLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MatchLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchLogFindFirstArgs} args - Arguments to find a MatchLog
     * @example
     * // Get one MatchLog
     * const matchLog = await prisma.matchLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchLogFindFirstArgs>(args?: SelectSubset<T, MatchLogFindFirstArgs<ExtArgs>>): Prisma__MatchLogClient<$Result.GetResult<Prisma.$MatchLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MatchLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchLogFindFirstOrThrowArgs} args - Arguments to find a MatchLog
     * @example
     * // Get one MatchLog
     * const matchLog = await prisma.matchLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchLogFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchLogClient<$Result.GetResult<Prisma.$MatchLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MatchLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MatchLogs
     * const matchLogs = await prisma.matchLog.findMany()
     * 
     * // Get first 10 MatchLogs
     * const matchLogs = await prisma.matchLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchLogWithIdOnly = await prisma.matchLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchLogFindManyArgs>(args?: SelectSubset<T, MatchLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MatchLog.
     * @param {MatchLogCreateArgs} args - Arguments to create a MatchLog.
     * @example
     * // Create one MatchLog
     * const MatchLog = await prisma.matchLog.create({
     *   data: {
     *     // ... data to create a MatchLog
     *   }
     * })
     * 
     */
    create<T extends MatchLogCreateArgs>(args: SelectSubset<T, MatchLogCreateArgs<ExtArgs>>): Prisma__MatchLogClient<$Result.GetResult<Prisma.$MatchLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MatchLogs.
     * @param {MatchLogCreateManyArgs} args - Arguments to create many MatchLogs.
     * @example
     * // Create many MatchLogs
     * const matchLog = await prisma.matchLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchLogCreateManyArgs>(args?: SelectSubset<T, MatchLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MatchLogs and returns the data saved in the database.
     * @param {MatchLogCreateManyAndReturnArgs} args - Arguments to create many MatchLogs.
     * @example
     * // Create many MatchLogs
     * const matchLog = await prisma.matchLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MatchLogs and only return the `id`
     * const matchLogWithIdOnly = await prisma.matchLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchLogCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MatchLog.
     * @param {MatchLogDeleteArgs} args - Arguments to delete one MatchLog.
     * @example
     * // Delete one MatchLog
     * const MatchLog = await prisma.matchLog.delete({
     *   where: {
     *     // ... filter to delete one MatchLog
     *   }
     * })
     * 
     */
    delete<T extends MatchLogDeleteArgs>(args: SelectSubset<T, MatchLogDeleteArgs<ExtArgs>>): Prisma__MatchLogClient<$Result.GetResult<Prisma.$MatchLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MatchLog.
     * @param {MatchLogUpdateArgs} args - Arguments to update one MatchLog.
     * @example
     * // Update one MatchLog
     * const matchLog = await prisma.matchLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchLogUpdateArgs>(args: SelectSubset<T, MatchLogUpdateArgs<ExtArgs>>): Prisma__MatchLogClient<$Result.GetResult<Prisma.$MatchLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MatchLogs.
     * @param {MatchLogDeleteManyArgs} args - Arguments to filter MatchLogs to delete.
     * @example
     * // Delete a few MatchLogs
     * const { count } = await prisma.matchLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchLogDeleteManyArgs>(args?: SelectSubset<T, MatchLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MatchLogs
     * const matchLog = await prisma.matchLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchLogUpdateManyArgs>(args: SelectSubset<T, MatchLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchLogs and returns the data updated in the database.
     * @param {MatchLogUpdateManyAndReturnArgs} args - Arguments to update many MatchLogs.
     * @example
     * // Update many MatchLogs
     * const matchLog = await prisma.matchLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MatchLogs and only return the `id`
     * const matchLogWithIdOnly = await prisma.matchLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MatchLogUpdateManyAndReturnArgs>(args: SelectSubset<T, MatchLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MatchLog.
     * @param {MatchLogUpsertArgs} args - Arguments to update or create a MatchLog.
     * @example
     * // Update or create a MatchLog
     * const matchLog = await prisma.matchLog.upsert({
     *   create: {
     *     // ... data to create a MatchLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MatchLog we want to update
     *   }
     * })
     */
    upsert<T extends MatchLogUpsertArgs>(args: SelectSubset<T, MatchLogUpsertArgs<ExtArgs>>): Prisma__MatchLogClient<$Result.GetResult<Prisma.$MatchLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MatchLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchLogCountArgs} args - Arguments to filter MatchLogs to count.
     * @example
     * // Count the number of MatchLogs
     * const count = await prisma.matchLog.count({
     *   where: {
     *     // ... the filter for the MatchLogs we want to count
     *   }
     * })
    **/
    count<T extends MatchLogCountArgs>(
      args?: Subset<T, MatchLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MatchLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MatchLogAggregateArgs>(args: Subset<T, MatchLogAggregateArgs>): Prisma.PrismaPromise<GetMatchLogAggregateType<T>>

    /**
     * Group by MatchLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MatchLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchLogGroupByArgs['orderBy'] }
        : { orderBy?: MatchLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MatchLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MatchLog model
   */
  readonly fields: MatchLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MatchLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fixture<T extends FixtureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FixtureDefaultArgs<ExtArgs>>): Prisma__FixtureClient<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    playerLogs<T extends MatchLog$playerLogsArgs<ExtArgs> = {}>(args?: Subset<T, MatchLog$playerLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPlayerLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MatchLog model
   */
  interface MatchLogFieldRefs {
    readonly id: FieldRef<"MatchLog", 'String'>
    readonly fixtureId: FieldRef<"MatchLog", 'String'>
    readonly logEntry: FieldRef<"MatchLog", 'String'>
    readonly createdAt: FieldRef<"MatchLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MatchLog findUnique
   */
  export type MatchLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchLog
     */
    select?: MatchLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchLog
     */
    omit?: MatchLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchLogInclude<ExtArgs> | null
    /**
     * Filter, which MatchLog to fetch.
     */
    where: MatchLogWhereUniqueInput
  }

  /**
   * MatchLog findUniqueOrThrow
   */
  export type MatchLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchLog
     */
    select?: MatchLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchLog
     */
    omit?: MatchLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchLogInclude<ExtArgs> | null
    /**
     * Filter, which MatchLog to fetch.
     */
    where: MatchLogWhereUniqueInput
  }

  /**
   * MatchLog findFirst
   */
  export type MatchLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchLog
     */
    select?: MatchLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchLog
     */
    omit?: MatchLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchLogInclude<ExtArgs> | null
    /**
     * Filter, which MatchLog to fetch.
     */
    where?: MatchLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchLogs to fetch.
     */
    orderBy?: MatchLogOrderByWithRelationInput | MatchLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchLogs.
     */
    cursor?: MatchLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchLogs.
     */
    distinct?: MatchLogScalarFieldEnum | MatchLogScalarFieldEnum[]
  }

  /**
   * MatchLog findFirstOrThrow
   */
  export type MatchLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchLog
     */
    select?: MatchLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchLog
     */
    omit?: MatchLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchLogInclude<ExtArgs> | null
    /**
     * Filter, which MatchLog to fetch.
     */
    where?: MatchLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchLogs to fetch.
     */
    orderBy?: MatchLogOrderByWithRelationInput | MatchLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchLogs.
     */
    cursor?: MatchLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchLogs.
     */
    distinct?: MatchLogScalarFieldEnum | MatchLogScalarFieldEnum[]
  }

  /**
   * MatchLog findMany
   */
  export type MatchLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchLog
     */
    select?: MatchLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchLog
     */
    omit?: MatchLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchLogInclude<ExtArgs> | null
    /**
     * Filter, which MatchLogs to fetch.
     */
    where?: MatchLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchLogs to fetch.
     */
    orderBy?: MatchLogOrderByWithRelationInput | MatchLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MatchLogs.
     */
    cursor?: MatchLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchLogs.
     */
    skip?: number
    distinct?: MatchLogScalarFieldEnum | MatchLogScalarFieldEnum[]
  }

  /**
   * MatchLog create
   */
  export type MatchLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchLog
     */
    select?: MatchLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchLog
     */
    omit?: MatchLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchLogInclude<ExtArgs> | null
    /**
     * The data needed to create a MatchLog.
     */
    data: XOR<MatchLogCreateInput, MatchLogUncheckedCreateInput>
  }

  /**
   * MatchLog createMany
   */
  export type MatchLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MatchLogs.
     */
    data: MatchLogCreateManyInput | MatchLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MatchLog createManyAndReturn
   */
  export type MatchLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchLog
     */
    select?: MatchLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MatchLog
     */
    omit?: MatchLogOmit<ExtArgs> | null
    /**
     * The data used to create many MatchLogs.
     */
    data: MatchLogCreateManyInput | MatchLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MatchLog update
   */
  export type MatchLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchLog
     */
    select?: MatchLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchLog
     */
    omit?: MatchLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchLogInclude<ExtArgs> | null
    /**
     * The data needed to update a MatchLog.
     */
    data: XOR<MatchLogUpdateInput, MatchLogUncheckedUpdateInput>
    /**
     * Choose, which MatchLog to update.
     */
    where: MatchLogWhereUniqueInput
  }

  /**
   * MatchLog updateMany
   */
  export type MatchLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MatchLogs.
     */
    data: XOR<MatchLogUpdateManyMutationInput, MatchLogUncheckedUpdateManyInput>
    /**
     * Filter which MatchLogs to update
     */
    where?: MatchLogWhereInput
    /**
     * Limit how many MatchLogs to update.
     */
    limit?: number
  }

  /**
   * MatchLog updateManyAndReturn
   */
  export type MatchLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchLog
     */
    select?: MatchLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MatchLog
     */
    omit?: MatchLogOmit<ExtArgs> | null
    /**
     * The data used to update MatchLogs.
     */
    data: XOR<MatchLogUpdateManyMutationInput, MatchLogUncheckedUpdateManyInput>
    /**
     * Filter which MatchLogs to update
     */
    where?: MatchLogWhereInput
    /**
     * Limit how many MatchLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MatchLog upsert
   */
  export type MatchLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchLog
     */
    select?: MatchLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchLog
     */
    omit?: MatchLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchLogInclude<ExtArgs> | null
    /**
     * The filter to search for the MatchLog to update in case it exists.
     */
    where: MatchLogWhereUniqueInput
    /**
     * In case the MatchLog found by the `where` argument doesn't exist, create a new MatchLog with this data.
     */
    create: XOR<MatchLogCreateInput, MatchLogUncheckedCreateInput>
    /**
     * In case the MatchLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchLogUpdateInput, MatchLogUncheckedUpdateInput>
  }

  /**
   * MatchLog delete
   */
  export type MatchLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchLog
     */
    select?: MatchLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchLog
     */
    omit?: MatchLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchLogInclude<ExtArgs> | null
    /**
     * Filter which MatchLog to delete.
     */
    where: MatchLogWhereUniqueInput
  }

  /**
   * MatchLog deleteMany
   */
  export type MatchLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchLogs to delete
     */
    where?: MatchLogWhereInput
    /**
     * Limit how many MatchLogs to delete.
     */
    limit?: number
  }

  /**
   * MatchLog.playerLogs
   */
  export type MatchLog$playerLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPlayerLog
     */
    select?: MatchPlayerLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchPlayerLog
     */
    omit?: MatchPlayerLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchPlayerLogInclude<ExtArgs> | null
    where?: MatchPlayerLogWhereInput
    orderBy?: MatchPlayerLogOrderByWithRelationInput | MatchPlayerLogOrderByWithRelationInput[]
    cursor?: MatchPlayerLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchPlayerLogScalarFieldEnum | MatchPlayerLogScalarFieldEnum[]
  }

  /**
   * MatchLog without action
   */
  export type MatchLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchLog
     */
    select?: MatchLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchLog
     */
    omit?: MatchLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchLogInclude<ExtArgs> | null
  }


  /**
   * Model MatchPlayerLog
   */

  export type AggregateMatchPlayerLog = {
    _count: MatchPlayerLogCountAggregateOutputType | null
    _avg: MatchPlayerLogAvgAggregateOutputType | null
    _sum: MatchPlayerLogSumAggregateOutputType | null
    _min: MatchPlayerLogMinAggregateOutputType | null
    _max: MatchPlayerLogMaxAggregateOutputType | null
  }

  export type MatchPlayerLogAvgAggregateOutputType = {
    minute: number | null
  }

  export type MatchPlayerLogSumAggregateOutputType = {
    minute: number | null
  }

  export type MatchPlayerLogMinAggregateOutputType = {
    id: string | null
    logId: string | null
    playerId: string | null
    eventType: $Enums.LogType | null
    minute: number | null
    goalScorerId: string | null
    assistPlayerId: string | null
  }

  export type MatchPlayerLogMaxAggregateOutputType = {
    id: string | null
    logId: string | null
    playerId: string | null
    eventType: $Enums.LogType | null
    minute: number | null
    goalScorerId: string | null
    assistPlayerId: string | null
  }

  export type MatchPlayerLogCountAggregateOutputType = {
    id: number
    logId: number
    playerId: number
    eventType: number
    minute: number
    goalScorerId: number
    assistPlayerId: number
    _all: number
  }


  export type MatchPlayerLogAvgAggregateInputType = {
    minute?: true
  }

  export type MatchPlayerLogSumAggregateInputType = {
    minute?: true
  }

  export type MatchPlayerLogMinAggregateInputType = {
    id?: true
    logId?: true
    playerId?: true
    eventType?: true
    minute?: true
    goalScorerId?: true
    assistPlayerId?: true
  }

  export type MatchPlayerLogMaxAggregateInputType = {
    id?: true
    logId?: true
    playerId?: true
    eventType?: true
    minute?: true
    goalScorerId?: true
    assistPlayerId?: true
  }

  export type MatchPlayerLogCountAggregateInputType = {
    id?: true
    logId?: true
    playerId?: true
    eventType?: true
    minute?: true
    goalScorerId?: true
    assistPlayerId?: true
    _all?: true
  }

  export type MatchPlayerLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchPlayerLog to aggregate.
     */
    where?: MatchPlayerLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchPlayerLogs to fetch.
     */
    orderBy?: MatchPlayerLogOrderByWithRelationInput | MatchPlayerLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchPlayerLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchPlayerLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchPlayerLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MatchPlayerLogs
    **/
    _count?: true | MatchPlayerLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatchPlayerLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatchPlayerLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchPlayerLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchPlayerLogMaxAggregateInputType
  }

  export type GetMatchPlayerLogAggregateType<T extends MatchPlayerLogAggregateArgs> = {
        [P in keyof T & keyof AggregateMatchPlayerLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatchPlayerLog[P]>
      : GetScalarType<T[P], AggregateMatchPlayerLog[P]>
  }




  export type MatchPlayerLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchPlayerLogWhereInput
    orderBy?: MatchPlayerLogOrderByWithAggregationInput | MatchPlayerLogOrderByWithAggregationInput[]
    by: MatchPlayerLogScalarFieldEnum[] | MatchPlayerLogScalarFieldEnum
    having?: MatchPlayerLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchPlayerLogCountAggregateInputType | true
    _avg?: MatchPlayerLogAvgAggregateInputType
    _sum?: MatchPlayerLogSumAggregateInputType
    _min?: MatchPlayerLogMinAggregateInputType
    _max?: MatchPlayerLogMaxAggregateInputType
  }

  export type MatchPlayerLogGroupByOutputType = {
    id: string
    logId: string
    playerId: string
    eventType: $Enums.LogType
    minute: number | null
    goalScorerId: string | null
    assistPlayerId: string | null
    _count: MatchPlayerLogCountAggregateOutputType | null
    _avg: MatchPlayerLogAvgAggregateOutputType | null
    _sum: MatchPlayerLogSumAggregateOutputType | null
    _min: MatchPlayerLogMinAggregateOutputType | null
    _max: MatchPlayerLogMaxAggregateOutputType | null
  }

  type GetMatchPlayerLogGroupByPayload<T extends MatchPlayerLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchPlayerLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchPlayerLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchPlayerLogGroupByOutputType[P]>
            : GetScalarType<T[P], MatchPlayerLogGroupByOutputType[P]>
        }
      >
    >


  export type MatchPlayerLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    logId?: boolean
    playerId?: boolean
    eventType?: boolean
    minute?: boolean
    goalScorerId?: boolean
    assistPlayerId?: boolean
    log?: boolean | MatchLogDefaultArgs<ExtArgs>
    player?: boolean | PlayerProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchPlayerLog"]>

  export type MatchPlayerLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    logId?: boolean
    playerId?: boolean
    eventType?: boolean
    minute?: boolean
    goalScorerId?: boolean
    assistPlayerId?: boolean
    log?: boolean | MatchLogDefaultArgs<ExtArgs>
    player?: boolean | PlayerProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchPlayerLog"]>

  export type MatchPlayerLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    logId?: boolean
    playerId?: boolean
    eventType?: boolean
    minute?: boolean
    goalScorerId?: boolean
    assistPlayerId?: boolean
    log?: boolean | MatchLogDefaultArgs<ExtArgs>
    player?: boolean | PlayerProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchPlayerLog"]>

  export type MatchPlayerLogSelectScalar = {
    id?: boolean
    logId?: boolean
    playerId?: boolean
    eventType?: boolean
    minute?: boolean
    goalScorerId?: boolean
    assistPlayerId?: boolean
  }

  export type MatchPlayerLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "logId" | "playerId" | "eventType" | "minute" | "goalScorerId" | "assistPlayerId", ExtArgs["result"]["matchPlayerLog"]>
  export type MatchPlayerLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    log?: boolean | MatchLogDefaultArgs<ExtArgs>
    player?: boolean | PlayerProfileDefaultArgs<ExtArgs>
  }
  export type MatchPlayerLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    log?: boolean | MatchLogDefaultArgs<ExtArgs>
    player?: boolean | PlayerProfileDefaultArgs<ExtArgs>
  }
  export type MatchPlayerLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    log?: boolean | MatchLogDefaultArgs<ExtArgs>
    player?: boolean | PlayerProfileDefaultArgs<ExtArgs>
  }

  export type $MatchPlayerLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MatchPlayerLog"
    objects: {
      log: Prisma.$MatchLogPayload<ExtArgs>
      player: Prisma.$PlayerProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      logId: string
      playerId: string
      eventType: $Enums.LogType
      minute: number | null
      goalScorerId: string | null
      assistPlayerId: string | null
    }, ExtArgs["result"]["matchPlayerLog"]>
    composites: {}
  }

  type MatchPlayerLogGetPayload<S extends boolean | null | undefined | MatchPlayerLogDefaultArgs> = $Result.GetResult<Prisma.$MatchPlayerLogPayload, S>

  type MatchPlayerLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchPlayerLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchPlayerLogCountAggregateInputType | true
    }

  export interface MatchPlayerLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MatchPlayerLog'], meta: { name: 'MatchPlayerLog' } }
    /**
     * Find zero or one MatchPlayerLog that matches the filter.
     * @param {MatchPlayerLogFindUniqueArgs} args - Arguments to find a MatchPlayerLog
     * @example
     * // Get one MatchPlayerLog
     * const matchPlayerLog = await prisma.matchPlayerLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchPlayerLogFindUniqueArgs>(args: SelectSubset<T, MatchPlayerLogFindUniqueArgs<ExtArgs>>): Prisma__MatchPlayerLogClient<$Result.GetResult<Prisma.$MatchPlayerLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MatchPlayerLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchPlayerLogFindUniqueOrThrowArgs} args - Arguments to find a MatchPlayerLog
     * @example
     * // Get one MatchPlayerLog
     * const matchPlayerLog = await prisma.matchPlayerLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchPlayerLogFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchPlayerLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchPlayerLogClient<$Result.GetResult<Prisma.$MatchPlayerLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MatchPlayerLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchPlayerLogFindFirstArgs} args - Arguments to find a MatchPlayerLog
     * @example
     * // Get one MatchPlayerLog
     * const matchPlayerLog = await prisma.matchPlayerLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchPlayerLogFindFirstArgs>(args?: SelectSubset<T, MatchPlayerLogFindFirstArgs<ExtArgs>>): Prisma__MatchPlayerLogClient<$Result.GetResult<Prisma.$MatchPlayerLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MatchPlayerLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchPlayerLogFindFirstOrThrowArgs} args - Arguments to find a MatchPlayerLog
     * @example
     * // Get one MatchPlayerLog
     * const matchPlayerLog = await prisma.matchPlayerLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchPlayerLogFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchPlayerLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchPlayerLogClient<$Result.GetResult<Prisma.$MatchPlayerLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MatchPlayerLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchPlayerLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MatchPlayerLogs
     * const matchPlayerLogs = await prisma.matchPlayerLog.findMany()
     * 
     * // Get first 10 MatchPlayerLogs
     * const matchPlayerLogs = await prisma.matchPlayerLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchPlayerLogWithIdOnly = await prisma.matchPlayerLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchPlayerLogFindManyArgs>(args?: SelectSubset<T, MatchPlayerLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPlayerLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MatchPlayerLog.
     * @param {MatchPlayerLogCreateArgs} args - Arguments to create a MatchPlayerLog.
     * @example
     * // Create one MatchPlayerLog
     * const MatchPlayerLog = await prisma.matchPlayerLog.create({
     *   data: {
     *     // ... data to create a MatchPlayerLog
     *   }
     * })
     * 
     */
    create<T extends MatchPlayerLogCreateArgs>(args: SelectSubset<T, MatchPlayerLogCreateArgs<ExtArgs>>): Prisma__MatchPlayerLogClient<$Result.GetResult<Prisma.$MatchPlayerLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MatchPlayerLogs.
     * @param {MatchPlayerLogCreateManyArgs} args - Arguments to create many MatchPlayerLogs.
     * @example
     * // Create many MatchPlayerLogs
     * const matchPlayerLog = await prisma.matchPlayerLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchPlayerLogCreateManyArgs>(args?: SelectSubset<T, MatchPlayerLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MatchPlayerLogs and returns the data saved in the database.
     * @param {MatchPlayerLogCreateManyAndReturnArgs} args - Arguments to create many MatchPlayerLogs.
     * @example
     * // Create many MatchPlayerLogs
     * const matchPlayerLog = await prisma.matchPlayerLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MatchPlayerLogs and only return the `id`
     * const matchPlayerLogWithIdOnly = await prisma.matchPlayerLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchPlayerLogCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchPlayerLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPlayerLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MatchPlayerLog.
     * @param {MatchPlayerLogDeleteArgs} args - Arguments to delete one MatchPlayerLog.
     * @example
     * // Delete one MatchPlayerLog
     * const MatchPlayerLog = await prisma.matchPlayerLog.delete({
     *   where: {
     *     // ... filter to delete one MatchPlayerLog
     *   }
     * })
     * 
     */
    delete<T extends MatchPlayerLogDeleteArgs>(args: SelectSubset<T, MatchPlayerLogDeleteArgs<ExtArgs>>): Prisma__MatchPlayerLogClient<$Result.GetResult<Prisma.$MatchPlayerLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MatchPlayerLog.
     * @param {MatchPlayerLogUpdateArgs} args - Arguments to update one MatchPlayerLog.
     * @example
     * // Update one MatchPlayerLog
     * const matchPlayerLog = await prisma.matchPlayerLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchPlayerLogUpdateArgs>(args: SelectSubset<T, MatchPlayerLogUpdateArgs<ExtArgs>>): Prisma__MatchPlayerLogClient<$Result.GetResult<Prisma.$MatchPlayerLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MatchPlayerLogs.
     * @param {MatchPlayerLogDeleteManyArgs} args - Arguments to filter MatchPlayerLogs to delete.
     * @example
     * // Delete a few MatchPlayerLogs
     * const { count } = await prisma.matchPlayerLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchPlayerLogDeleteManyArgs>(args?: SelectSubset<T, MatchPlayerLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchPlayerLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchPlayerLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MatchPlayerLogs
     * const matchPlayerLog = await prisma.matchPlayerLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchPlayerLogUpdateManyArgs>(args: SelectSubset<T, MatchPlayerLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchPlayerLogs and returns the data updated in the database.
     * @param {MatchPlayerLogUpdateManyAndReturnArgs} args - Arguments to update many MatchPlayerLogs.
     * @example
     * // Update many MatchPlayerLogs
     * const matchPlayerLog = await prisma.matchPlayerLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MatchPlayerLogs and only return the `id`
     * const matchPlayerLogWithIdOnly = await prisma.matchPlayerLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MatchPlayerLogUpdateManyAndReturnArgs>(args: SelectSubset<T, MatchPlayerLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPlayerLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MatchPlayerLog.
     * @param {MatchPlayerLogUpsertArgs} args - Arguments to update or create a MatchPlayerLog.
     * @example
     * // Update or create a MatchPlayerLog
     * const matchPlayerLog = await prisma.matchPlayerLog.upsert({
     *   create: {
     *     // ... data to create a MatchPlayerLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MatchPlayerLog we want to update
     *   }
     * })
     */
    upsert<T extends MatchPlayerLogUpsertArgs>(args: SelectSubset<T, MatchPlayerLogUpsertArgs<ExtArgs>>): Prisma__MatchPlayerLogClient<$Result.GetResult<Prisma.$MatchPlayerLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MatchPlayerLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchPlayerLogCountArgs} args - Arguments to filter MatchPlayerLogs to count.
     * @example
     * // Count the number of MatchPlayerLogs
     * const count = await prisma.matchPlayerLog.count({
     *   where: {
     *     // ... the filter for the MatchPlayerLogs we want to count
     *   }
     * })
    **/
    count<T extends MatchPlayerLogCountArgs>(
      args?: Subset<T, MatchPlayerLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchPlayerLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MatchPlayerLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchPlayerLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MatchPlayerLogAggregateArgs>(args: Subset<T, MatchPlayerLogAggregateArgs>): Prisma.PrismaPromise<GetMatchPlayerLogAggregateType<T>>

    /**
     * Group by MatchPlayerLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchPlayerLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MatchPlayerLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchPlayerLogGroupByArgs['orderBy'] }
        : { orderBy?: MatchPlayerLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MatchPlayerLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchPlayerLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MatchPlayerLog model
   */
  readonly fields: MatchPlayerLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MatchPlayerLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchPlayerLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    log<T extends MatchLogDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MatchLogDefaultArgs<ExtArgs>>): Prisma__MatchLogClient<$Result.GetResult<Prisma.$MatchLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    player<T extends PlayerProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayerProfileDefaultArgs<ExtArgs>>): Prisma__PlayerProfileClient<$Result.GetResult<Prisma.$PlayerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MatchPlayerLog model
   */
  interface MatchPlayerLogFieldRefs {
    readonly id: FieldRef<"MatchPlayerLog", 'String'>
    readonly logId: FieldRef<"MatchPlayerLog", 'String'>
    readonly playerId: FieldRef<"MatchPlayerLog", 'String'>
    readonly eventType: FieldRef<"MatchPlayerLog", 'LogType'>
    readonly minute: FieldRef<"MatchPlayerLog", 'Int'>
    readonly goalScorerId: FieldRef<"MatchPlayerLog", 'String'>
    readonly assistPlayerId: FieldRef<"MatchPlayerLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MatchPlayerLog findUnique
   */
  export type MatchPlayerLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPlayerLog
     */
    select?: MatchPlayerLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchPlayerLog
     */
    omit?: MatchPlayerLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchPlayerLogInclude<ExtArgs> | null
    /**
     * Filter, which MatchPlayerLog to fetch.
     */
    where: MatchPlayerLogWhereUniqueInput
  }

  /**
   * MatchPlayerLog findUniqueOrThrow
   */
  export type MatchPlayerLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPlayerLog
     */
    select?: MatchPlayerLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchPlayerLog
     */
    omit?: MatchPlayerLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchPlayerLogInclude<ExtArgs> | null
    /**
     * Filter, which MatchPlayerLog to fetch.
     */
    where: MatchPlayerLogWhereUniqueInput
  }

  /**
   * MatchPlayerLog findFirst
   */
  export type MatchPlayerLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPlayerLog
     */
    select?: MatchPlayerLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchPlayerLog
     */
    omit?: MatchPlayerLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchPlayerLogInclude<ExtArgs> | null
    /**
     * Filter, which MatchPlayerLog to fetch.
     */
    where?: MatchPlayerLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchPlayerLogs to fetch.
     */
    orderBy?: MatchPlayerLogOrderByWithRelationInput | MatchPlayerLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchPlayerLogs.
     */
    cursor?: MatchPlayerLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchPlayerLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchPlayerLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchPlayerLogs.
     */
    distinct?: MatchPlayerLogScalarFieldEnum | MatchPlayerLogScalarFieldEnum[]
  }

  /**
   * MatchPlayerLog findFirstOrThrow
   */
  export type MatchPlayerLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPlayerLog
     */
    select?: MatchPlayerLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchPlayerLog
     */
    omit?: MatchPlayerLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchPlayerLogInclude<ExtArgs> | null
    /**
     * Filter, which MatchPlayerLog to fetch.
     */
    where?: MatchPlayerLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchPlayerLogs to fetch.
     */
    orderBy?: MatchPlayerLogOrderByWithRelationInput | MatchPlayerLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchPlayerLogs.
     */
    cursor?: MatchPlayerLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchPlayerLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchPlayerLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchPlayerLogs.
     */
    distinct?: MatchPlayerLogScalarFieldEnum | MatchPlayerLogScalarFieldEnum[]
  }

  /**
   * MatchPlayerLog findMany
   */
  export type MatchPlayerLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPlayerLog
     */
    select?: MatchPlayerLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchPlayerLog
     */
    omit?: MatchPlayerLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchPlayerLogInclude<ExtArgs> | null
    /**
     * Filter, which MatchPlayerLogs to fetch.
     */
    where?: MatchPlayerLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchPlayerLogs to fetch.
     */
    orderBy?: MatchPlayerLogOrderByWithRelationInput | MatchPlayerLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MatchPlayerLogs.
     */
    cursor?: MatchPlayerLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchPlayerLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchPlayerLogs.
     */
    skip?: number
    distinct?: MatchPlayerLogScalarFieldEnum | MatchPlayerLogScalarFieldEnum[]
  }

  /**
   * MatchPlayerLog create
   */
  export type MatchPlayerLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPlayerLog
     */
    select?: MatchPlayerLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchPlayerLog
     */
    omit?: MatchPlayerLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchPlayerLogInclude<ExtArgs> | null
    /**
     * The data needed to create a MatchPlayerLog.
     */
    data: XOR<MatchPlayerLogCreateInput, MatchPlayerLogUncheckedCreateInput>
  }

  /**
   * MatchPlayerLog createMany
   */
  export type MatchPlayerLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MatchPlayerLogs.
     */
    data: MatchPlayerLogCreateManyInput | MatchPlayerLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MatchPlayerLog createManyAndReturn
   */
  export type MatchPlayerLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPlayerLog
     */
    select?: MatchPlayerLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MatchPlayerLog
     */
    omit?: MatchPlayerLogOmit<ExtArgs> | null
    /**
     * The data used to create many MatchPlayerLogs.
     */
    data: MatchPlayerLogCreateManyInput | MatchPlayerLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchPlayerLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MatchPlayerLog update
   */
  export type MatchPlayerLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPlayerLog
     */
    select?: MatchPlayerLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchPlayerLog
     */
    omit?: MatchPlayerLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchPlayerLogInclude<ExtArgs> | null
    /**
     * The data needed to update a MatchPlayerLog.
     */
    data: XOR<MatchPlayerLogUpdateInput, MatchPlayerLogUncheckedUpdateInput>
    /**
     * Choose, which MatchPlayerLog to update.
     */
    where: MatchPlayerLogWhereUniqueInput
  }

  /**
   * MatchPlayerLog updateMany
   */
  export type MatchPlayerLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MatchPlayerLogs.
     */
    data: XOR<MatchPlayerLogUpdateManyMutationInput, MatchPlayerLogUncheckedUpdateManyInput>
    /**
     * Filter which MatchPlayerLogs to update
     */
    where?: MatchPlayerLogWhereInput
    /**
     * Limit how many MatchPlayerLogs to update.
     */
    limit?: number
  }

  /**
   * MatchPlayerLog updateManyAndReturn
   */
  export type MatchPlayerLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPlayerLog
     */
    select?: MatchPlayerLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MatchPlayerLog
     */
    omit?: MatchPlayerLogOmit<ExtArgs> | null
    /**
     * The data used to update MatchPlayerLogs.
     */
    data: XOR<MatchPlayerLogUpdateManyMutationInput, MatchPlayerLogUncheckedUpdateManyInput>
    /**
     * Filter which MatchPlayerLogs to update
     */
    where?: MatchPlayerLogWhereInput
    /**
     * Limit how many MatchPlayerLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchPlayerLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MatchPlayerLog upsert
   */
  export type MatchPlayerLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPlayerLog
     */
    select?: MatchPlayerLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchPlayerLog
     */
    omit?: MatchPlayerLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchPlayerLogInclude<ExtArgs> | null
    /**
     * The filter to search for the MatchPlayerLog to update in case it exists.
     */
    where: MatchPlayerLogWhereUniqueInput
    /**
     * In case the MatchPlayerLog found by the `where` argument doesn't exist, create a new MatchPlayerLog with this data.
     */
    create: XOR<MatchPlayerLogCreateInput, MatchPlayerLogUncheckedCreateInput>
    /**
     * In case the MatchPlayerLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchPlayerLogUpdateInput, MatchPlayerLogUncheckedUpdateInput>
  }

  /**
   * MatchPlayerLog delete
   */
  export type MatchPlayerLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPlayerLog
     */
    select?: MatchPlayerLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchPlayerLog
     */
    omit?: MatchPlayerLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchPlayerLogInclude<ExtArgs> | null
    /**
     * Filter which MatchPlayerLog to delete.
     */
    where: MatchPlayerLogWhereUniqueInput
  }

  /**
   * MatchPlayerLog deleteMany
   */
  export type MatchPlayerLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchPlayerLogs to delete
     */
    where?: MatchPlayerLogWhereInput
    /**
     * Limit how many MatchPlayerLogs to delete.
     */
    limit?: number
  }

  /**
   * MatchPlayerLog without action
   */
  export type MatchPlayerLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPlayerLog
     */
    select?: MatchPlayerLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchPlayerLog
     */
    omit?: MatchPlayerLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchPlayerLogInclude<ExtArgs> | null
  }


  /**
   * Model Tournament
   */

  export type AggregateTournament = {
    _count: TournamentCountAggregateOutputType | null
    _min: TournamentMinAggregateOutputType | null
    _max: TournamentMaxAggregateOutputType | null
  }

  export type TournamentMinAggregateOutputType = {
    id: string | null
    name: string | null
    startDate: Date | null
    endDate: Date | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TournamentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    startDate: Date | null
    endDate: Date | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TournamentCountAggregateOutputType = {
    id: number
    name: number
    startDate: number
    endDate: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TournamentMinAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TournamentMaxAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TournamentCountAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TournamentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tournament to aggregate.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tournaments
    **/
    _count?: true | TournamentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TournamentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TournamentMaxAggregateInputType
  }

  export type GetTournamentAggregateType<T extends TournamentAggregateArgs> = {
        [P in keyof T & keyof AggregateTournament]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTournament[P]>
      : GetScalarType<T[P], AggregateTournament[P]>
  }




  export type TournamentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TournamentWhereInput
    orderBy?: TournamentOrderByWithAggregationInput | TournamentOrderByWithAggregationInput[]
    by: TournamentScalarFieldEnum[] | TournamentScalarFieldEnum
    having?: TournamentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TournamentCountAggregateInputType | true
    _min?: TournamentMinAggregateInputType
    _max?: TournamentMaxAggregateInputType
  }

  export type TournamentGroupByOutputType = {
    id: string
    name: string
    startDate: Date
    endDate: Date
    status: string
    createdAt: Date
    updatedAt: Date
    _count: TournamentCountAggregateOutputType | null
    _min: TournamentMinAggregateOutputType | null
    _max: TournamentMaxAggregateOutputType | null
  }

  type GetTournamentGroupByPayload<T extends TournamentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TournamentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TournamentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TournamentGroupByOutputType[P]>
            : GetScalarType<T[P], TournamentGroupByOutputType[P]>
        }
      >
    >


  export type TournamentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fixtures?: boolean | Tournament$fixturesArgs<ExtArgs>
    _count?: boolean | TournamentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tournament"]>

  export type TournamentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tournament"]>

  export type TournamentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tournament"]>

  export type TournamentSelectScalar = {
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TournamentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "startDate" | "endDate" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["tournament"]>
  export type TournamentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fixtures?: boolean | Tournament$fixturesArgs<ExtArgs>
    _count?: boolean | TournamentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TournamentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TournamentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TournamentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tournament"
    objects: {
      fixtures: Prisma.$FixturePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      startDate: Date
      endDate: Date
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tournament"]>
    composites: {}
  }

  type TournamentGetPayload<S extends boolean | null | undefined | TournamentDefaultArgs> = $Result.GetResult<Prisma.$TournamentPayload, S>

  type TournamentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TournamentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TournamentCountAggregateInputType | true
    }

  export interface TournamentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tournament'], meta: { name: 'Tournament' } }
    /**
     * Find zero or one Tournament that matches the filter.
     * @param {TournamentFindUniqueArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TournamentFindUniqueArgs>(args: SelectSubset<T, TournamentFindUniqueArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tournament that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TournamentFindUniqueOrThrowArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TournamentFindUniqueOrThrowArgs>(args: SelectSubset<T, TournamentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tournament that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindFirstArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TournamentFindFirstArgs>(args?: SelectSubset<T, TournamentFindFirstArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tournament that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindFirstOrThrowArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TournamentFindFirstOrThrowArgs>(args?: SelectSubset<T, TournamentFindFirstOrThrowArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tournaments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tournaments
     * const tournaments = await prisma.tournament.findMany()
     * 
     * // Get first 10 Tournaments
     * const tournaments = await prisma.tournament.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tournamentWithIdOnly = await prisma.tournament.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TournamentFindManyArgs>(args?: SelectSubset<T, TournamentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tournament.
     * @param {TournamentCreateArgs} args - Arguments to create a Tournament.
     * @example
     * // Create one Tournament
     * const Tournament = await prisma.tournament.create({
     *   data: {
     *     // ... data to create a Tournament
     *   }
     * })
     * 
     */
    create<T extends TournamentCreateArgs>(args: SelectSubset<T, TournamentCreateArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tournaments.
     * @param {TournamentCreateManyArgs} args - Arguments to create many Tournaments.
     * @example
     * // Create many Tournaments
     * const tournament = await prisma.tournament.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TournamentCreateManyArgs>(args?: SelectSubset<T, TournamentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tournaments and returns the data saved in the database.
     * @param {TournamentCreateManyAndReturnArgs} args - Arguments to create many Tournaments.
     * @example
     * // Create many Tournaments
     * const tournament = await prisma.tournament.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tournaments and only return the `id`
     * const tournamentWithIdOnly = await prisma.tournament.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TournamentCreateManyAndReturnArgs>(args?: SelectSubset<T, TournamentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tournament.
     * @param {TournamentDeleteArgs} args - Arguments to delete one Tournament.
     * @example
     * // Delete one Tournament
     * const Tournament = await prisma.tournament.delete({
     *   where: {
     *     // ... filter to delete one Tournament
     *   }
     * })
     * 
     */
    delete<T extends TournamentDeleteArgs>(args: SelectSubset<T, TournamentDeleteArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tournament.
     * @param {TournamentUpdateArgs} args - Arguments to update one Tournament.
     * @example
     * // Update one Tournament
     * const tournament = await prisma.tournament.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TournamentUpdateArgs>(args: SelectSubset<T, TournamentUpdateArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tournaments.
     * @param {TournamentDeleteManyArgs} args - Arguments to filter Tournaments to delete.
     * @example
     * // Delete a few Tournaments
     * const { count } = await prisma.tournament.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TournamentDeleteManyArgs>(args?: SelectSubset<T, TournamentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tournaments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tournaments
     * const tournament = await prisma.tournament.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TournamentUpdateManyArgs>(args: SelectSubset<T, TournamentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tournaments and returns the data updated in the database.
     * @param {TournamentUpdateManyAndReturnArgs} args - Arguments to update many Tournaments.
     * @example
     * // Update many Tournaments
     * const tournament = await prisma.tournament.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tournaments and only return the `id`
     * const tournamentWithIdOnly = await prisma.tournament.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TournamentUpdateManyAndReturnArgs>(args: SelectSubset<T, TournamentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tournament.
     * @param {TournamentUpsertArgs} args - Arguments to update or create a Tournament.
     * @example
     * // Update or create a Tournament
     * const tournament = await prisma.tournament.upsert({
     *   create: {
     *     // ... data to create a Tournament
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tournament we want to update
     *   }
     * })
     */
    upsert<T extends TournamentUpsertArgs>(args: SelectSubset<T, TournamentUpsertArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tournaments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentCountArgs} args - Arguments to filter Tournaments to count.
     * @example
     * // Count the number of Tournaments
     * const count = await prisma.tournament.count({
     *   where: {
     *     // ... the filter for the Tournaments we want to count
     *   }
     * })
    **/
    count<T extends TournamentCountArgs>(
      args?: Subset<T, TournamentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TournamentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tournament.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TournamentAggregateArgs>(args: Subset<T, TournamentAggregateArgs>): Prisma.PrismaPromise<GetTournamentAggregateType<T>>

    /**
     * Group by Tournament.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TournamentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TournamentGroupByArgs['orderBy'] }
        : { orderBy?: TournamentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TournamentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTournamentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tournament model
   */
  readonly fields: TournamentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tournament.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TournamentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fixtures<T extends Tournament$fixturesArgs<ExtArgs> = {}>(args?: Subset<T, Tournament$fixturesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tournament model
   */
  interface TournamentFieldRefs {
    readonly id: FieldRef<"Tournament", 'String'>
    readonly name: FieldRef<"Tournament", 'String'>
    readonly startDate: FieldRef<"Tournament", 'DateTime'>
    readonly endDate: FieldRef<"Tournament", 'DateTime'>
    readonly status: FieldRef<"Tournament", 'String'>
    readonly createdAt: FieldRef<"Tournament", 'DateTime'>
    readonly updatedAt: FieldRef<"Tournament", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tournament findUnique
   */
  export type TournamentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where: TournamentWhereUniqueInput
  }

  /**
   * Tournament findUniqueOrThrow
   */
  export type TournamentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where: TournamentWhereUniqueInput
  }

  /**
   * Tournament findFirst
   */
  export type TournamentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tournaments.
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tournaments.
     */
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
  }

  /**
   * Tournament findFirstOrThrow
   */
  export type TournamentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tournaments.
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tournaments.
     */
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
  }

  /**
   * Tournament findMany
   */
  export type TournamentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournaments to fetch.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tournaments.
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
  }

  /**
   * Tournament create
   */
  export type TournamentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * The data needed to create a Tournament.
     */
    data: XOR<TournamentCreateInput, TournamentUncheckedCreateInput>
  }

  /**
   * Tournament createMany
   */
  export type TournamentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tournaments.
     */
    data: TournamentCreateManyInput | TournamentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tournament createManyAndReturn
   */
  export type TournamentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * The data used to create many Tournaments.
     */
    data: TournamentCreateManyInput | TournamentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tournament update
   */
  export type TournamentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * The data needed to update a Tournament.
     */
    data: XOR<TournamentUpdateInput, TournamentUncheckedUpdateInput>
    /**
     * Choose, which Tournament to update.
     */
    where: TournamentWhereUniqueInput
  }

  /**
   * Tournament updateMany
   */
  export type TournamentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tournaments.
     */
    data: XOR<TournamentUpdateManyMutationInput, TournamentUncheckedUpdateManyInput>
    /**
     * Filter which Tournaments to update
     */
    where?: TournamentWhereInput
    /**
     * Limit how many Tournaments to update.
     */
    limit?: number
  }

  /**
   * Tournament updateManyAndReturn
   */
  export type TournamentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * The data used to update Tournaments.
     */
    data: XOR<TournamentUpdateManyMutationInput, TournamentUncheckedUpdateManyInput>
    /**
     * Filter which Tournaments to update
     */
    where?: TournamentWhereInput
    /**
     * Limit how many Tournaments to update.
     */
    limit?: number
  }

  /**
   * Tournament upsert
   */
  export type TournamentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * The filter to search for the Tournament to update in case it exists.
     */
    where: TournamentWhereUniqueInput
    /**
     * In case the Tournament found by the `where` argument doesn't exist, create a new Tournament with this data.
     */
    create: XOR<TournamentCreateInput, TournamentUncheckedCreateInput>
    /**
     * In case the Tournament was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TournamentUpdateInput, TournamentUncheckedUpdateInput>
  }

  /**
   * Tournament delete
   */
  export type TournamentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter which Tournament to delete.
     */
    where: TournamentWhereUniqueInput
  }

  /**
   * Tournament deleteMany
   */
  export type TournamentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tournaments to delete
     */
    where?: TournamentWhereInput
    /**
     * Limit how many Tournaments to delete.
     */
    limit?: number
  }

  /**
   * Tournament.fixtures
   */
  export type Tournament$fixturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fixture
     */
    omit?: FixtureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
    where?: FixtureWhereInput
    orderBy?: FixtureOrderByWithRelationInput | FixtureOrderByWithRelationInput[]
    cursor?: FixtureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FixtureScalarFieldEnum | FixtureScalarFieldEnum[]
  }

  /**
   * Tournament without action
   */
  export type TournamentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
  }


  /**
   * Model AdminLog
   */

  export type AggregateAdminLog = {
    _count: AdminLogCountAggregateOutputType | null
    _min: AdminLogMinAggregateOutputType | null
    _max: AdminLogMaxAggregateOutputType | null
  }

  export type AdminLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    targetId: string | null
    createdAt: Date | null
  }

  export type AdminLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    targetId: string | null
    createdAt: Date | null
  }

  export type AdminLogCountAggregateOutputType = {
    id: number
    userId: number
    action: number
    targetId: number
    createdAt: number
    _all: number
  }


  export type AdminLogMinAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    targetId?: true
    createdAt?: true
  }

  export type AdminLogMaxAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    targetId?: true
    createdAt?: true
  }

  export type AdminLogCountAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    targetId?: true
    createdAt?: true
    _all?: true
  }

  export type AdminLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminLog to aggregate.
     */
    where?: AdminLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminLogs to fetch.
     */
    orderBy?: AdminLogOrderByWithRelationInput | AdminLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminLogs
    **/
    _count?: true | AdminLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminLogMaxAggregateInputType
  }

  export type GetAdminLogAggregateType<T extends AdminLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminLog[P]>
      : GetScalarType<T[P], AggregateAdminLog[P]>
  }




  export type AdminLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminLogWhereInput
    orderBy?: AdminLogOrderByWithAggregationInput | AdminLogOrderByWithAggregationInput[]
    by: AdminLogScalarFieldEnum[] | AdminLogScalarFieldEnum
    having?: AdminLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminLogCountAggregateInputType | true
    _min?: AdminLogMinAggregateInputType
    _max?: AdminLogMaxAggregateInputType
  }

  export type AdminLogGroupByOutputType = {
    id: string
    userId: string
    action: string
    targetId: string | null
    createdAt: Date
    _count: AdminLogCountAggregateOutputType | null
    _min: AdminLogMinAggregateOutputType | null
    _max: AdminLogMaxAggregateOutputType | null
  }

  type GetAdminLogGroupByPayload<T extends AdminLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminLogGroupByOutputType[P]>
            : GetScalarType<T[P], AdminLogGroupByOutputType[P]>
        }
      >
    >


  export type AdminLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    targetId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminLog"]>

  export type AdminLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    targetId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminLog"]>

  export type AdminLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    targetId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminLog"]>

  export type AdminLogSelectScalar = {
    id?: boolean
    userId?: boolean
    action?: boolean
    targetId?: boolean
    createdAt?: boolean
  }

  export type AdminLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "action" | "targetId" | "createdAt", ExtArgs["result"]["adminLog"]>
  export type AdminLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdminLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdminLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AdminLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      action: string
      targetId: string | null
      createdAt: Date
    }, ExtArgs["result"]["adminLog"]>
    composites: {}
  }

  type AdminLogGetPayload<S extends boolean | null | undefined | AdminLogDefaultArgs> = $Result.GetResult<Prisma.$AdminLogPayload, S>

  type AdminLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminLogCountAggregateInputType | true
    }

  export interface AdminLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminLog'], meta: { name: 'AdminLog' } }
    /**
     * Find zero or one AdminLog that matches the filter.
     * @param {AdminLogFindUniqueArgs} args - Arguments to find a AdminLog
     * @example
     * // Get one AdminLog
     * const adminLog = await prisma.adminLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminLogFindUniqueArgs>(args: SelectSubset<T, AdminLogFindUniqueArgs<ExtArgs>>): Prisma__AdminLogClient<$Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdminLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminLogFindUniqueOrThrowArgs} args - Arguments to find a AdminLog
     * @example
     * // Get one AdminLog
     * const adminLog = await prisma.adminLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminLogClient<$Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminLogFindFirstArgs} args - Arguments to find a AdminLog
     * @example
     * // Get one AdminLog
     * const adminLog = await prisma.adminLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminLogFindFirstArgs>(args?: SelectSubset<T, AdminLogFindFirstArgs<ExtArgs>>): Prisma__AdminLogClient<$Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminLogFindFirstOrThrowArgs} args - Arguments to find a AdminLog
     * @example
     * // Get one AdminLog
     * const adminLog = await prisma.adminLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminLogClient<$Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminLogs
     * const adminLogs = await prisma.adminLog.findMany()
     * 
     * // Get first 10 AdminLogs
     * const adminLogs = await prisma.adminLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminLogWithIdOnly = await prisma.adminLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminLogFindManyArgs>(args?: SelectSubset<T, AdminLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdminLog.
     * @param {AdminLogCreateArgs} args - Arguments to create a AdminLog.
     * @example
     * // Create one AdminLog
     * const AdminLog = await prisma.adminLog.create({
     *   data: {
     *     // ... data to create a AdminLog
     *   }
     * })
     * 
     */
    create<T extends AdminLogCreateArgs>(args: SelectSubset<T, AdminLogCreateArgs<ExtArgs>>): Prisma__AdminLogClient<$Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdminLogs.
     * @param {AdminLogCreateManyArgs} args - Arguments to create many AdminLogs.
     * @example
     * // Create many AdminLogs
     * const adminLog = await prisma.adminLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminLogCreateManyArgs>(args?: SelectSubset<T, AdminLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminLogs and returns the data saved in the database.
     * @param {AdminLogCreateManyAndReturnArgs} args - Arguments to create many AdminLogs.
     * @example
     * // Create many AdminLogs
     * const adminLog = await prisma.adminLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminLogs and only return the `id`
     * const adminLogWithIdOnly = await prisma.adminLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdminLog.
     * @param {AdminLogDeleteArgs} args - Arguments to delete one AdminLog.
     * @example
     * // Delete one AdminLog
     * const AdminLog = await prisma.adminLog.delete({
     *   where: {
     *     // ... filter to delete one AdminLog
     *   }
     * })
     * 
     */
    delete<T extends AdminLogDeleteArgs>(args: SelectSubset<T, AdminLogDeleteArgs<ExtArgs>>): Prisma__AdminLogClient<$Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdminLog.
     * @param {AdminLogUpdateArgs} args - Arguments to update one AdminLog.
     * @example
     * // Update one AdminLog
     * const adminLog = await prisma.adminLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminLogUpdateArgs>(args: SelectSubset<T, AdminLogUpdateArgs<ExtArgs>>): Prisma__AdminLogClient<$Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdminLogs.
     * @param {AdminLogDeleteManyArgs} args - Arguments to filter AdminLogs to delete.
     * @example
     * // Delete a few AdminLogs
     * const { count } = await prisma.adminLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminLogDeleteManyArgs>(args?: SelectSubset<T, AdminLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminLogs
     * const adminLog = await prisma.adminLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminLogUpdateManyArgs>(args: SelectSubset<T, AdminLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminLogs and returns the data updated in the database.
     * @param {AdminLogUpdateManyAndReturnArgs} args - Arguments to update many AdminLogs.
     * @example
     * // Update many AdminLogs
     * const adminLog = await prisma.adminLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdminLogs and only return the `id`
     * const adminLogWithIdOnly = await prisma.adminLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdminLog.
     * @param {AdminLogUpsertArgs} args - Arguments to update or create a AdminLog.
     * @example
     * // Update or create a AdminLog
     * const adminLog = await prisma.adminLog.upsert({
     *   create: {
     *     // ... data to create a AdminLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminLog we want to update
     *   }
     * })
     */
    upsert<T extends AdminLogUpsertArgs>(args: SelectSubset<T, AdminLogUpsertArgs<ExtArgs>>): Prisma__AdminLogClient<$Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdminLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminLogCountArgs} args - Arguments to filter AdminLogs to count.
     * @example
     * // Count the number of AdminLogs
     * const count = await prisma.adminLog.count({
     *   where: {
     *     // ... the filter for the AdminLogs we want to count
     *   }
     * })
    **/
    count<T extends AdminLogCountArgs>(
      args?: Subset<T, AdminLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminLogAggregateArgs>(args: Subset<T, AdminLogAggregateArgs>): Prisma.PrismaPromise<GetAdminLogAggregateType<T>>

    /**
     * Group by AdminLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminLogGroupByArgs['orderBy'] }
        : { orderBy?: AdminLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminLog model
   */
  readonly fields: AdminLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdminLog model
   */
  interface AdminLogFieldRefs {
    readonly id: FieldRef<"AdminLog", 'String'>
    readonly userId: FieldRef<"AdminLog", 'String'>
    readonly action: FieldRef<"AdminLog", 'String'>
    readonly targetId: FieldRef<"AdminLog", 'String'>
    readonly createdAt: FieldRef<"AdminLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminLog findUnique
   */
  export type AdminLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLog
     */
    select?: AdminLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminLog
     */
    omit?: AdminLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminLogInclude<ExtArgs> | null
    /**
     * Filter, which AdminLog to fetch.
     */
    where: AdminLogWhereUniqueInput
  }

  /**
   * AdminLog findUniqueOrThrow
   */
  export type AdminLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLog
     */
    select?: AdminLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminLog
     */
    omit?: AdminLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminLogInclude<ExtArgs> | null
    /**
     * Filter, which AdminLog to fetch.
     */
    where: AdminLogWhereUniqueInput
  }

  /**
   * AdminLog findFirst
   */
  export type AdminLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLog
     */
    select?: AdminLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminLog
     */
    omit?: AdminLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminLogInclude<ExtArgs> | null
    /**
     * Filter, which AdminLog to fetch.
     */
    where?: AdminLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminLogs to fetch.
     */
    orderBy?: AdminLogOrderByWithRelationInput | AdminLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminLogs.
     */
    cursor?: AdminLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminLogs.
     */
    distinct?: AdminLogScalarFieldEnum | AdminLogScalarFieldEnum[]
  }

  /**
   * AdminLog findFirstOrThrow
   */
  export type AdminLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLog
     */
    select?: AdminLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminLog
     */
    omit?: AdminLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminLogInclude<ExtArgs> | null
    /**
     * Filter, which AdminLog to fetch.
     */
    where?: AdminLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminLogs to fetch.
     */
    orderBy?: AdminLogOrderByWithRelationInput | AdminLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminLogs.
     */
    cursor?: AdminLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminLogs.
     */
    distinct?: AdminLogScalarFieldEnum | AdminLogScalarFieldEnum[]
  }

  /**
   * AdminLog findMany
   */
  export type AdminLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLog
     */
    select?: AdminLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminLog
     */
    omit?: AdminLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminLogInclude<ExtArgs> | null
    /**
     * Filter, which AdminLogs to fetch.
     */
    where?: AdminLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminLogs to fetch.
     */
    orderBy?: AdminLogOrderByWithRelationInput | AdminLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminLogs.
     */
    cursor?: AdminLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminLogs.
     */
    skip?: number
    distinct?: AdminLogScalarFieldEnum | AdminLogScalarFieldEnum[]
  }

  /**
   * AdminLog create
   */
  export type AdminLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLog
     */
    select?: AdminLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminLog
     */
    omit?: AdminLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AdminLog.
     */
    data: XOR<AdminLogCreateInput, AdminLogUncheckedCreateInput>
  }

  /**
   * AdminLog createMany
   */
  export type AdminLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminLogs.
     */
    data: AdminLogCreateManyInput | AdminLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminLog createManyAndReturn
   */
  export type AdminLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLog
     */
    select?: AdminLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminLog
     */
    omit?: AdminLogOmit<ExtArgs> | null
    /**
     * The data used to create many AdminLogs.
     */
    data: AdminLogCreateManyInput | AdminLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdminLog update
   */
  export type AdminLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLog
     */
    select?: AdminLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminLog
     */
    omit?: AdminLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AdminLog.
     */
    data: XOR<AdminLogUpdateInput, AdminLogUncheckedUpdateInput>
    /**
     * Choose, which AdminLog to update.
     */
    where: AdminLogWhereUniqueInput
  }

  /**
   * AdminLog updateMany
   */
  export type AdminLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminLogs.
     */
    data: XOR<AdminLogUpdateManyMutationInput, AdminLogUncheckedUpdateManyInput>
    /**
     * Filter which AdminLogs to update
     */
    where?: AdminLogWhereInput
    /**
     * Limit how many AdminLogs to update.
     */
    limit?: number
  }

  /**
   * AdminLog updateManyAndReturn
   */
  export type AdminLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLog
     */
    select?: AdminLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminLog
     */
    omit?: AdminLogOmit<ExtArgs> | null
    /**
     * The data used to update AdminLogs.
     */
    data: XOR<AdminLogUpdateManyMutationInput, AdminLogUncheckedUpdateManyInput>
    /**
     * Filter which AdminLogs to update
     */
    where?: AdminLogWhereInput
    /**
     * Limit how many AdminLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdminLog upsert
   */
  export type AdminLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLog
     */
    select?: AdminLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminLog
     */
    omit?: AdminLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AdminLog to update in case it exists.
     */
    where: AdminLogWhereUniqueInput
    /**
     * In case the AdminLog found by the `where` argument doesn't exist, create a new AdminLog with this data.
     */
    create: XOR<AdminLogCreateInput, AdminLogUncheckedCreateInput>
    /**
     * In case the AdminLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminLogUpdateInput, AdminLogUncheckedUpdateInput>
  }

  /**
   * AdminLog delete
   */
  export type AdminLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLog
     */
    select?: AdminLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminLog
     */
    omit?: AdminLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminLogInclude<ExtArgs> | null
    /**
     * Filter which AdminLog to delete.
     */
    where: AdminLogWhereUniqueInput
  }

  /**
   * AdminLog deleteMany
   */
  export type AdminLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminLogs to delete
     */
    where?: AdminLogWhereInput
    /**
     * Limit how many AdminLogs to delete.
     */
    limit?: number
  }

  /**
   * AdminLog without action
   */
  export type AdminLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLog
     */
    select?: AdminLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminLog
     */
    omit?: AdminLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminLogInclude<ExtArgs> | null
  }


  /**
   * Model TournamentStat
   */

  export type AggregateTournamentStat = {
    _count: TournamentStatCountAggregateOutputType | null
    _min: TournamentStatMinAggregateOutputType | null
    _max: TournamentStatMaxAggregateOutputType | null
  }

  export type TournamentStatMinAggregateOutputType = {
    id: string | null
    name: string | null
    value: string | null
    lastUpdated: Date | null
  }

  export type TournamentStatMaxAggregateOutputType = {
    id: string | null
    name: string | null
    value: string | null
    lastUpdated: Date | null
  }

  export type TournamentStatCountAggregateOutputType = {
    id: number
    name: number
    value: number
    lastUpdated: number
    _all: number
  }


  export type TournamentStatMinAggregateInputType = {
    id?: true
    name?: true
    value?: true
    lastUpdated?: true
  }

  export type TournamentStatMaxAggregateInputType = {
    id?: true
    name?: true
    value?: true
    lastUpdated?: true
  }

  export type TournamentStatCountAggregateInputType = {
    id?: true
    name?: true
    value?: true
    lastUpdated?: true
    _all?: true
  }

  export type TournamentStatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TournamentStat to aggregate.
     */
    where?: TournamentStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TournamentStats to fetch.
     */
    orderBy?: TournamentStatOrderByWithRelationInput | TournamentStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TournamentStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TournamentStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TournamentStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TournamentStats
    **/
    _count?: true | TournamentStatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TournamentStatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TournamentStatMaxAggregateInputType
  }

  export type GetTournamentStatAggregateType<T extends TournamentStatAggregateArgs> = {
        [P in keyof T & keyof AggregateTournamentStat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTournamentStat[P]>
      : GetScalarType<T[P], AggregateTournamentStat[P]>
  }




  export type TournamentStatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TournamentStatWhereInput
    orderBy?: TournamentStatOrderByWithAggregationInput | TournamentStatOrderByWithAggregationInput[]
    by: TournamentStatScalarFieldEnum[] | TournamentStatScalarFieldEnum
    having?: TournamentStatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TournamentStatCountAggregateInputType | true
    _min?: TournamentStatMinAggregateInputType
    _max?: TournamentStatMaxAggregateInputType
  }

  export type TournamentStatGroupByOutputType = {
    id: string
    name: string
    value: string
    lastUpdated: Date
    _count: TournamentStatCountAggregateOutputType | null
    _min: TournamentStatMinAggregateOutputType | null
    _max: TournamentStatMaxAggregateOutputType | null
  }

  type GetTournamentStatGroupByPayload<T extends TournamentStatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TournamentStatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TournamentStatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TournamentStatGroupByOutputType[P]>
            : GetScalarType<T[P], TournamentStatGroupByOutputType[P]>
        }
      >
    >


  export type TournamentStatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
    lastUpdated?: boolean
  }, ExtArgs["result"]["tournamentStat"]>

  export type TournamentStatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
    lastUpdated?: boolean
  }, ExtArgs["result"]["tournamentStat"]>

  export type TournamentStatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
    lastUpdated?: boolean
  }, ExtArgs["result"]["tournamentStat"]>

  export type TournamentStatSelectScalar = {
    id?: boolean
    name?: boolean
    value?: boolean
    lastUpdated?: boolean
  }

  export type TournamentStatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "value" | "lastUpdated", ExtArgs["result"]["tournamentStat"]>

  export type $TournamentStatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TournamentStat"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      value: string
      lastUpdated: Date
    }, ExtArgs["result"]["tournamentStat"]>
    composites: {}
  }

  type TournamentStatGetPayload<S extends boolean | null | undefined | TournamentStatDefaultArgs> = $Result.GetResult<Prisma.$TournamentStatPayload, S>

  type TournamentStatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TournamentStatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TournamentStatCountAggregateInputType | true
    }

  export interface TournamentStatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TournamentStat'], meta: { name: 'TournamentStat' } }
    /**
     * Find zero or one TournamentStat that matches the filter.
     * @param {TournamentStatFindUniqueArgs} args - Arguments to find a TournamentStat
     * @example
     * // Get one TournamentStat
     * const tournamentStat = await prisma.tournamentStat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TournamentStatFindUniqueArgs>(args: SelectSubset<T, TournamentStatFindUniqueArgs<ExtArgs>>): Prisma__TournamentStatClient<$Result.GetResult<Prisma.$TournamentStatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TournamentStat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TournamentStatFindUniqueOrThrowArgs} args - Arguments to find a TournamentStat
     * @example
     * // Get one TournamentStat
     * const tournamentStat = await prisma.tournamentStat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TournamentStatFindUniqueOrThrowArgs>(args: SelectSubset<T, TournamentStatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TournamentStatClient<$Result.GetResult<Prisma.$TournamentStatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TournamentStat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentStatFindFirstArgs} args - Arguments to find a TournamentStat
     * @example
     * // Get one TournamentStat
     * const tournamentStat = await prisma.tournamentStat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TournamentStatFindFirstArgs>(args?: SelectSubset<T, TournamentStatFindFirstArgs<ExtArgs>>): Prisma__TournamentStatClient<$Result.GetResult<Prisma.$TournamentStatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TournamentStat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentStatFindFirstOrThrowArgs} args - Arguments to find a TournamentStat
     * @example
     * // Get one TournamentStat
     * const tournamentStat = await prisma.tournamentStat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TournamentStatFindFirstOrThrowArgs>(args?: SelectSubset<T, TournamentStatFindFirstOrThrowArgs<ExtArgs>>): Prisma__TournamentStatClient<$Result.GetResult<Prisma.$TournamentStatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TournamentStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentStatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TournamentStats
     * const tournamentStats = await prisma.tournamentStat.findMany()
     * 
     * // Get first 10 TournamentStats
     * const tournamentStats = await prisma.tournamentStat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tournamentStatWithIdOnly = await prisma.tournamentStat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TournamentStatFindManyArgs>(args?: SelectSubset<T, TournamentStatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentStatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TournamentStat.
     * @param {TournamentStatCreateArgs} args - Arguments to create a TournamentStat.
     * @example
     * // Create one TournamentStat
     * const TournamentStat = await prisma.tournamentStat.create({
     *   data: {
     *     // ... data to create a TournamentStat
     *   }
     * })
     * 
     */
    create<T extends TournamentStatCreateArgs>(args: SelectSubset<T, TournamentStatCreateArgs<ExtArgs>>): Prisma__TournamentStatClient<$Result.GetResult<Prisma.$TournamentStatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TournamentStats.
     * @param {TournamentStatCreateManyArgs} args - Arguments to create many TournamentStats.
     * @example
     * // Create many TournamentStats
     * const tournamentStat = await prisma.tournamentStat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TournamentStatCreateManyArgs>(args?: SelectSubset<T, TournamentStatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TournamentStats and returns the data saved in the database.
     * @param {TournamentStatCreateManyAndReturnArgs} args - Arguments to create many TournamentStats.
     * @example
     * // Create many TournamentStats
     * const tournamentStat = await prisma.tournamentStat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TournamentStats and only return the `id`
     * const tournamentStatWithIdOnly = await prisma.tournamentStat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TournamentStatCreateManyAndReturnArgs>(args?: SelectSubset<T, TournamentStatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentStatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TournamentStat.
     * @param {TournamentStatDeleteArgs} args - Arguments to delete one TournamentStat.
     * @example
     * // Delete one TournamentStat
     * const TournamentStat = await prisma.tournamentStat.delete({
     *   where: {
     *     // ... filter to delete one TournamentStat
     *   }
     * })
     * 
     */
    delete<T extends TournamentStatDeleteArgs>(args: SelectSubset<T, TournamentStatDeleteArgs<ExtArgs>>): Prisma__TournamentStatClient<$Result.GetResult<Prisma.$TournamentStatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TournamentStat.
     * @param {TournamentStatUpdateArgs} args - Arguments to update one TournamentStat.
     * @example
     * // Update one TournamentStat
     * const tournamentStat = await prisma.tournamentStat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TournamentStatUpdateArgs>(args: SelectSubset<T, TournamentStatUpdateArgs<ExtArgs>>): Prisma__TournamentStatClient<$Result.GetResult<Prisma.$TournamentStatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TournamentStats.
     * @param {TournamentStatDeleteManyArgs} args - Arguments to filter TournamentStats to delete.
     * @example
     * // Delete a few TournamentStats
     * const { count } = await prisma.tournamentStat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TournamentStatDeleteManyArgs>(args?: SelectSubset<T, TournamentStatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TournamentStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentStatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TournamentStats
     * const tournamentStat = await prisma.tournamentStat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TournamentStatUpdateManyArgs>(args: SelectSubset<T, TournamentStatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TournamentStats and returns the data updated in the database.
     * @param {TournamentStatUpdateManyAndReturnArgs} args - Arguments to update many TournamentStats.
     * @example
     * // Update many TournamentStats
     * const tournamentStat = await prisma.tournamentStat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TournamentStats and only return the `id`
     * const tournamentStatWithIdOnly = await prisma.tournamentStat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TournamentStatUpdateManyAndReturnArgs>(args: SelectSubset<T, TournamentStatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentStatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TournamentStat.
     * @param {TournamentStatUpsertArgs} args - Arguments to update or create a TournamentStat.
     * @example
     * // Update or create a TournamentStat
     * const tournamentStat = await prisma.tournamentStat.upsert({
     *   create: {
     *     // ... data to create a TournamentStat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TournamentStat we want to update
     *   }
     * })
     */
    upsert<T extends TournamentStatUpsertArgs>(args: SelectSubset<T, TournamentStatUpsertArgs<ExtArgs>>): Prisma__TournamentStatClient<$Result.GetResult<Prisma.$TournamentStatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TournamentStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentStatCountArgs} args - Arguments to filter TournamentStats to count.
     * @example
     * // Count the number of TournamentStats
     * const count = await prisma.tournamentStat.count({
     *   where: {
     *     // ... the filter for the TournamentStats we want to count
     *   }
     * })
    **/
    count<T extends TournamentStatCountArgs>(
      args?: Subset<T, TournamentStatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TournamentStatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TournamentStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentStatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TournamentStatAggregateArgs>(args: Subset<T, TournamentStatAggregateArgs>): Prisma.PrismaPromise<GetTournamentStatAggregateType<T>>

    /**
     * Group by TournamentStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentStatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TournamentStatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TournamentStatGroupByArgs['orderBy'] }
        : { orderBy?: TournamentStatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TournamentStatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTournamentStatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TournamentStat model
   */
  readonly fields: TournamentStatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TournamentStat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TournamentStatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TournamentStat model
   */
  interface TournamentStatFieldRefs {
    readonly id: FieldRef<"TournamentStat", 'String'>
    readonly name: FieldRef<"TournamentStat", 'String'>
    readonly value: FieldRef<"TournamentStat", 'String'>
    readonly lastUpdated: FieldRef<"TournamentStat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TournamentStat findUnique
   */
  export type TournamentStatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentStat
     */
    select?: TournamentStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentStat
     */
    omit?: TournamentStatOmit<ExtArgs> | null
    /**
     * Filter, which TournamentStat to fetch.
     */
    where: TournamentStatWhereUniqueInput
  }

  /**
   * TournamentStat findUniqueOrThrow
   */
  export type TournamentStatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentStat
     */
    select?: TournamentStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentStat
     */
    omit?: TournamentStatOmit<ExtArgs> | null
    /**
     * Filter, which TournamentStat to fetch.
     */
    where: TournamentStatWhereUniqueInput
  }

  /**
   * TournamentStat findFirst
   */
  export type TournamentStatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentStat
     */
    select?: TournamentStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentStat
     */
    omit?: TournamentStatOmit<ExtArgs> | null
    /**
     * Filter, which TournamentStat to fetch.
     */
    where?: TournamentStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TournamentStats to fetch.
     */
    orderBy?: TournamentStatOrderByWithRelationInput | TournamentStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TournamentStats.
     */
    cursor?: TournamentStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TournamentStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TournamentStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TournamentStats.
     */
    distinct?: TournamentStatScalarFieldEnum | TournamentStatScalarFieldEnum[]
  }

  /**
   * TournamentStat findFirstOrThrow
   */
  export type TournamentStatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentStat
     */
    select?: TournamentStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentStat
     */
    omit?: TournamentStatOmit<ExtArgs> | null
    /**
     * Filter, which TournamentStat to fetch.
     */
    where?: TournamentStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TournamentStats to fetch.
     */
    orderBy?: TournamentStatOrderByWithRelationInput | TournamentStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TournamentStats.
     */
    cursor?: TournamentStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TournamentStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TournamentStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TournamentStats.
     */
    distinct?: TournamentStatScalarFieldEnum | TournamentStatScalarFieldEnum[]
  }

  /**
   * TournamentStat findMany
   */
  export type TournamentStatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentStat
     */
    select?: TournamentStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentStat
     */
    omit?: TournamentStatOmit<ExtArgs> | null
    /**
     * Filter, which TournamentStats to fetch.
     */
    where?: TournamentStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TournamentStats to fetch.
     */
    orderBy?: TournamentStatOrderByWithRelationInput | TournamentStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TournamentStats.
     */
    cursor?: TournamentStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TournamentStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TournamentStats.
     */
    skip?: number
    distinct?: TournamentStatScalarFieldEnum | TournamentStatScalarFieldEnum[]
  }

  /**
   * TournamentStat create
   */
  export type TournamentStatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentStat
     */
    select?: TournamentStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentStat
     */
    omit?: TournamentStatOmit<ExtArgs> | null
    /**
     * The data needed to create a TournamentStat.
     */
    data: XOR<TournamentStatCreateInput, TournamentStatUncheckedCreateInput>
  }

  /**
   * TournamentStat createMany
   */
  export type TournamentStatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TournamentStats.
     */
    data: TournamentStatCreateManyInput | TournamentStatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TournamentStat createManyAndReturn
   */
  export type TournamentStatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentStat
     */
    select?: TournamentStatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentStat
     */
    omit?: TournamentStatOmit<ExtArgs> | null
    /**
     * The data used to create many TournamentStats.
     */
    data: TournamentStatCreateManyInput | TournamentStatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TournamentStat update
   */
  export type TournamentStatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentStat
     */
    select?: TournamentStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentStat
     */
    omit?: TournamentStatOmit<ExtArgs> | null
    /**
     * The data needed to update a TournamentStat.
     */
    data: XOR<TournamentStatUpdateInput, TournamentStatUncheckedUpdateInput>
    /**
     * Choose, which TournamentStat to update.
     */
    where: TournamentStatWhereUniqueInput
  }

  /**
   * TournamentStat updateMany
   */
  export type TournamentStatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TournamentStats.
     */
    data: XOR<TournamentStatUpdateManyMutationInput, TournamentStatUncheckedUpdateManyInput>
    /**
     * Filter which TournamentStats to update
     */
    where?: TournamentStatWhereInput
    /**
     * Limit how many TournamentStats to update.
     */
    limit?: number
  }

  /**
   * TournamentStat updateManyAndReturn
   */
  export type TournamentStatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentStat
     */
    select?: TournamentStatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentStat
     */
    omit?: TournamentStatOmit<ExtArgs> | null
    /**
     * The data used to update TournamentStats.
     */
    data: XOR<TournamentStatUpdateManyMutationInput, TournamentStatUncheckedUpdateManyInput>
    /**
     * Filter which TournamentStats to update
     */
    where?: TournamentStatWhereInput
    /**
     * Limit how many TournamentStats to update.
     */
    limit?: number
  }

  /**
   * TournamentStat upsert
   */
  export type TournamentStatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentStat
     */
    select?: TournamentStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentStat
     */
    omit?: TournamentStatOmit<ExtArgs> | null
    /**
     * The filter to search for the TournamentStat to update in case it exists.
     */
    where: TournamentStatWhereUniqueInput
    /**
     * In case the TournamentStat found by the `where` argument doesn't exist, create a new TournamentStat with this data.
     */
    create: XOR<TournamentStatCreateInput, TournamentStatUncheckedCreateInput>
    /**
     * In case the TournamentStat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TournamentStatUpdateInput, TournamentStatUncheckedUpdateInput>
  }

  /**
   * TournamentStat delete
   */
  export type TournamentStatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentStat
     */
    select?: TournamentStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentStat
     */
    omit?: TournamentStatOmit<ExtArgs> | null
    /**
     * Filter which TournamentStat to delete.
     */
    where: TournamentStatWhereUniqueInput
  }

  /**
   * TournamentStat deleteMany
   */
  export type TournamentStatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TournamentStats to delete
     */
    where?: TournamentStatWhereInput
    /**
     * Limit how many TournamentStats to delete.
     */
    limit?: number
  }

  /**
   * TournamentStat without action
   */
  export type TournamentStatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentStat
     */
    select?: TournamentStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentStat
     */
    omit?: TournamentStatOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    verificationToken: 'verificationToken',
    verificationTokenExpires: 'verificationTokenExpires',
    emailVerified: 'emailVerified',
    dateOfBirth: 'dateOfBirth',
    idNumber: 'idNumber',
    image: 'image',
    managedTeamId: 'managedTeamId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state',
    refresh_token_expires_in: 'refresh_token_expires_in'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    id: 'id',
    name: 'name',
    affiliationFeePaid: 'affiliationFeePaid',
    createdAt: 'createdAt'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const PlayerProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    jerseyNumber: 'jerseyNumber',
    position: 'position',
    isCaptain: 'isCaptain',
    teamId: 'teamId'
  };

  export type PlayerProfileScalarFieldEnum = (typeof PlayerProfileScalarFieldEnum)[keyof typeof PlayerProfileScalarFieldEnum]


  export const TeamStatsScalarFieldEnum: {
    id: 'id',
    teamId: 'teamId',
    wins: 'wins',
    losses: 'losses',
    draws: 'draws',
    points: 'points',
    goalsFor: 'goalsFor',
    goalsAgainst: 'goalsAgainst',
    goalDifference: 'goalDifference',
    lastUpdated: 'lastUpdated'
  };

  export type TeamStatsScalarFieldEnum = (typeof TeamStatsScalarFieldEnum)[keyof typeof TeamStatsScalarFieldEnum]


  export const PlayerStatsScalarFieldEnum: {
    id: 'id',
    playerId: 'playerId',
    goals: 'goals',
    assists: 'assists',
    yellowCards: 'yellowCards',
    redCards: 'redCards',
    matchesPlayed: 'matchesPlayed',
    lastUpdated: 'lastUpdated'
  };

  export type PlayerStatsScalarFieldEnum = (typeof PlayerStatsScalarFieldEnum)[keyof typeof PlayerStatsScalarFieldEnum]


  export const FixtureScalarFieldEnum: {
    id: 'id',
    scheduledTime: 'scheduledTime',
    venue: 'venue',
    status: 'status',
    homeTeamId: 'homeTeamId',
    awayTeamId: 'awayTeamId',
    homeScore: 'homeScore',
    awayScore: 'awayScore',
    tournamentId: 'tournamentId'
  };

  export type FixtureScalarFieldEnum = (typeof FixtureScalarFieldEnum)[keyof typeof FixtureScalarFieldEnum]


  export const MatchFormationScalarFieldEnum: {
    id: 'id',
    fixtureId: 'fixtureId',
    formationDetails: 'formationDetails',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MatchFormationScalarFieldEnum = (typeof MatchFormationScalarFieldEnum)[keyof typeof MatchFormationScalarFieldEnum]


  export const MatchLogScalarFieldEnum: {
    id: 'id',
    fixtureId: 'fixtureId',
    logEntry: 'logEntry',
    createdAt: 'createdAt'
  };

  export type MatchLogScalarFieldEnum = (typeof MatchLogScalarFieldEnum)[keyof typeof MatchLogScalarFieldEnum]


  export const MatchPlayerLogScalarFieldEnum: {
    id: 'id',
    logId: 'logId',
    playerId: 'playerId',
    eventType: 'eventType',
    minute: 'minute',
    goalScorerId: 'goalScorerId',
    assistPlayerId: 'assistPlayerId'
  };

  export type MatchPlayerLogScalarFieldEnum = (typeof MatchPlayerLogScalarFieldEnum)[keyof typeof MatchPlayerLogScalarFieldEnum]


  export const TournamentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    startDate: 'startDate',
    endDate: 'endDate',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TournamentScalarFieldEnum = (typeof TournamentScalarFieldEnum)[keyof typeof TournamentScalarFieldEnum]


  export const AdminLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    action: 'action',
    targetId: 'targetId',
    createdAt: 'createdAt'
  };

  export type AdminLogScalarFieldEnum = (typeof AdminLogScalarFieldEnum)[keyof typeof AdminLogScalarFieldEnum]


  export const TournamentStatScalarFieldEnum: {
    id: 'id',
    name: 'name',
    value: 'value',
    lastUpdated: 'lastUpdated'
  };

  export type TournamentStatScalarFieldEnum = (typeof TournamentStatScalarFieldEnum)[keyof typeof TournamentStatScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'MatchStatus'
   */
  export type EnumMatchStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MatchStatus'>
    


  /**
   * Reference to a field of type 'MatchStatus[]'
   */
  export type ListEnumMatchStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MatchStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'LogType'
   */
  export type EnumLogTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LogType'>
    


  /**
   * Reference to a field of type 'LogType[]'
   */
  export type ListEnumLogTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LogType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    verificationToken?: StringNullableFilter<"User"> | string | null
    verificationTokenExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    dateOfBirth?: DateTimeNullableFilter<"User"> | Date | string | null
    idNumber?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    managedTeamId?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    managedTeam?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
    playerProfile?: XOR<PlayerProfileNullableScalarRelationFilter, PlayerProfileWhereInput> | null
    adminLogs?: AdminLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    verificationToken?: SortOrderInput | SortOrder
    verificationTokenExpires?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    idNumber?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    managedTeamId?: SortOrderInput | SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    managedTeam?: TeamOrderByWithRelationInput
    playerProfile?: PlayerProfileOrderByWithRelationInput
    adminLogs?: AdminLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    idNumber?: string
    managedTeamId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    verificationToken?: StringNullableFilter<"User"> | string | null
    verificationTokenExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    dateOfBirth?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    managedTeam?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
    playerProfile?: XOR<PlayerProfileNullableScalarRelationFilter, PlayerProfileWhereInput> | null
    adminLogs?: AdminLogListRelationFilter
  }, "id" | "email" | "idNumber" | "managedTeamId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    verificationToken?: SortOrderInput | SortOrder
    verificationTokenExpires?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    idNumber?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    managedTeamId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    verificationToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    verificationTokenExpires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    idNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    managedTeamId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    refresh_token_expires_in?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    refresh_token_expires_in?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableWithAggregatesFilter<"Account"> | number | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    id?: StringFilter<"Team"> | string
    name?: StringFilter<"Team"> | string
    affiliationFeePaid?: BoolFilter<"Team"> | boolean
    createdAt?: DateTimeFilter<"Team"> | Date | string
    coach?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    players?: PlayerProfileListRelationFilter
    homeFixtures?: FixtureListRelationFilter
    awayFixtures?: FixtureListRelationFilter
    teamStats?: XOR<TeamStatsNullableScalarRelationFilter, TeamStatsWhereInput> | null
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    affiliationFeePaid?: SortOrder
    createdAt?: SortOrder
    coach?: UserOrderByWithRelationInput
    players?: PlayerProfileOrderByRelationAggregateInput
    homeFixtures?: FixtureOrderByRelationAggregateInput
    awayFixtures?: FixtureOrderByRelationAggregateInput
    teamStats?: TeamStatsOrderByWithRelationInput
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    affiliationFeePaid?: BoolFilter<"Team"> | boolean
    createdAt?: DateTimeFilter<"Team"> | Date | string
    coach?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    players?: PlayerProfileListRelationFilter
    homeFixtures?: FixtureListRelationFilter
    awayFixtures?: FixtureListRelationFilter
    teamStats?: XOR<TeamStatsNullableScalarRelationFilter, TeamStatsWhereInput> | null
  }, "id" | "name">

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    affiliationFeePaid?: SortOrder
    createdAt?: SortOrder
    _count?: TeamCountOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    OR?: TeamScalarWhereWithAggregatesInput[]
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Team"> | string
    name?: StringWithAggregatesFilter<"Team"> | string
    affiliationFeePaid?: BoolWithAggregatesFilter<"Team"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string
  }

  export type PlayerProfileWhereInput = {
    AND?: PlayerProfileWhereInput | PlayerProfileWhereInput[]
    OR?: PlayerProfileWhereInput[]
    NOT?: PlayerProfileWhereInput | PlayerProfileWhereInput[]
    id?: StringFilter<"PlayerProfile"> | string
    userId?: StringFilter<"PlayerProfile"> | string
    jerseyNumber?: IntNullableFilter<"PlayerProfile"> | number | null
    position?: StringNullableFilter<"PlayerProfile"> | string | null
    isCaptain?: BoolFilter<"PlayerProfile"> | boolean
    teamId?: StringFilter<"PlayerProfile"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    matchLogs?: MatchPlayerLogListRelationFilter
    playerStats?: XOR<PlayerStatsNullableScalarRelationFilter, PlayerStatsWhereInput> | null
  }

  export type PlayerProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    jerseyNumber?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    isCaptain?: SortOrder
    teamId?: SortOrder
    user?: UserOrderByWithRelationInput
    team?: TeamOrderByWithRelationInput
    matchLogs?: MatchPlayerLogOrderByRelationAggregateInput
    playerStats?: PlayerStatsOrderByWithRelationInput
  }

  export type PlayerProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    teamId_jerseyNumber?: PlayerProfileTeamIdJerseyNumberCompoundUniqueInput
    AND?: PlayerProfileWhereInput | PlayerProfileWhereInput[]
    OR?: PlayerProfileWhereInput[]
    NOT?: PlayerProfileWhereInput | PlayerProfileWhereInput[]
    jerseyNumber?: IntNullableFilter<"PlayerProfile"> | number | null
    position?: StringNullableFilter<"PlayerProfile"> | string | null
    isCaptain?: BoolFilter<"PlayerProfile"> | boolean
    teamId?: StringFilter<"PlayerProfile"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    matchLogs?: MatchPlayerLogListRelationFilter
    playerStats?: XOR<PlayerStatsNullableScalarRelationFilter, PlayerStatsWhereInput> | null
  }, "id" | "userId" | "teamId_jerseyNumber">

  export type PlayerProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    jerseyNumber?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    isCaptain?: SortOrder
    teamId?: SortOrder
    _count?: PlayerProfileCountOrderByAggregateInput
    _avg?: PlayerProfileAvgOrderByAggregateInput
    _max?: PlayerProfileMaxOrderByAggregateInput
    _min?: PlayerProfileMinOrderByAggregateInput
    _sum?: PlayerProfileSumOrderByAggregateInput
  }

  export type PlayerProfileScalarWhereWithAggregatesInput = {
    AND?: PlayerProfileScalarWhereWithAggregatesInput | PlayerProfileScalarWhereWithAggregatesInput[]
    OR?: PlayerProfileScalarWhereWithAggregatesInput[]
    NOT?: PlayerProfileScalarWhereWithAggregatesInput | PlayerProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlayerProfile"> | string
    userId?: StringWithAggregatesFilter<"PlayerProfile"> | string
    jerseyNumber?: IntNullableWithAggregatesFilter<"PlayerProfile"> | number | null
    position?: StringNullableWithAggregatesFilter<"PlayerProfile"> | string | null
    isCaptain?: BoolWithAggregatesFilter<"PlayerProfile"> | boolean
    teamId?: StringWithAggregatesFilter<"PlayerProfile"> | string
  }

  export type TeamStatsWhereInput = {
    AND?: TeamStatsWhereInput | TeamStatsWhereInput[]
    OR?: TeamStatsWhereInput[]
    NOT?: TeamStatsWhereInput | TeamStatsWhereInput[]
    id?: StringFilter<"TeamStats"> | string
    teamId?: StringFilter<"TeamStats"> | string
    wins?: IntFilter<"TeamStats"> | number
    losses?: IntFilter<"TeamStats"> | number
    draws?: IntFilter<"TeamStats"> | number
    points?: IntFilter<"TeamStats"> | number
    goalsFor?: IntFilter<"TeamStats"> | number
    goalsAgainst?: IntFilter<"TeamStats"> | number
    goalDifference?: IntFilter<"TeamStats"> | number
    lastUpdated?: DateTimeFilter<"TeamStats"> | Date | string
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }

  export type TeamStatsOrderByWithRelationInput = {
    id?: SortOrder
    teamId?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    draws?: SortOrder
    points?: SortOrder
    goalsFor?: SortOrder
    goalsAgainst?: SortOrder
    goalDifference?: SortOrder
    lastUpdated?: SortOrder
    team?: TeamOrderByWithRelationInput
  }

  export type TeamStatsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    teamId?: string
    AND?: TeamStatsWhereInput | TeamStatsWhereInput[]
    OR?: TeamStatsWhereInput[]
    NOT?: TeamStatsWhereInput | TeamStatsWhereInput[]
    wins?: IntFilter<"TeamStats"> | number
    losses?: IntFilter<"TeamStats"> | number
    draws?: IntFilter<"TeamStats"> | number
    points?: IntFilter<"TeamStats"> | number
    goalsFor?: IntFilter<"TeamStats"> | number
    goalsAgainst?: IntFilter<"TeamStats"> | number
    goalDifference?: IntFilter<"TeamStats"> | number
    lastUpdated?: DateTimeFilter<"TeamStats"> | Date | string
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }, "id" | "teamId">

  export type TeamStatsOrderByWithAggregationInput = {
    id?: SortOrder
    teamId?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    draws?: SortOrder
    points?: SortOrder
    goalsFor?: SortOrder
    goalsAgainst?: SortOrder
    goalDifference?: SortOrder
    lastUpdated?: SortOrder
    _count?: TeamStatsCountOrderByAggregateInput
    _avg?: TeamStatsAvgOrderByAggregateInput
    _max?: TeamStatsMaxOrderByAggregateInput
    _min?: TeamStatsMinOrderByAggregateInput
    _sum?: TeamStatsSumOrderByAggregateInput
  }

  export type TeamStatsScalarWhereWithAggregatesInput = {
    AND?: TeamStatsScalarWhereWithAggregatesInput | TeamStatsScalarWhereWithAggregatesInput[]
    OR?: TeamStatsScalarWhereWithAggregatesInput[]
    NOT?: TeamStatsScalarWhereWithAggregatesInput | TeamStatsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TeamStats"> | string
    teamId?: StringWithAggregatesFilter<"TeamStats"> | string
    wins?: IntWithAggregatesFilter<"TeamStats"> | number
    losses?: IntWithAggregatesFilter<"TeamStats"> | number
    draws?: IntWithAggregatesFilter<"TeamStats"> | number
    points?: IntWithAggregatesFilter<"TeamStats"> | number
    goalsFor?: IntWithAggregatesFilter<"TeamStats"> | number
    goalsAgainst?: IntWithAggregatesFilter<"TeamStats"> | number
    goalDifference?: IntWithAggregatesFilter<"TeamStats"> | number
    lastUpdated?: DateTimeWithAggregatesFilter<"TeamStats"> | Date | string
  }

  export type PlayerStatsWhereInput = {
    AND?: PlayerStatsWhereInput | PlayerStatsWhereInput[]
    OR?: PlayerStatsWhereInput[]
    NOT?: PlayerStatsWhereInput | PlayerStatsWhereInput[]
    id?: StringFilter<"PlayerStats"> | string
    playerId?: StringFilter<"PlayerStats"> | string
    goals?: IntFilter<"PlayerStats"> | number
    assists?: IntFilter<"PlayerStats"> | number
    yellowCards?: IntFilter<"PlayerStats"> | number
    redCards?: IntFilter<"PlayerStats"> | number
    matchesPlayed?: IntFilter<"PlayerStats"> | number
    lastUpdated?: DateTimeFilter<"PlayerStats"> | Date | string
    player?: XOR<PlayerProfileScalarRelationFilter, PlayerProfileWhereInput>
  }

  export type PlayerStatsOrderByWithRelationInput = {
    id?: SortOrder
    playerId?: SortOrder
    goals?: SortOrder
    assists?: SortOrder
    yellowCards?: SortOrder
    redCards?: SortOrder
    matchesPlayed?: SortOrder
    lastUpdated?: SortOrder
    player?: PlayerProfileOrderByWithRelationInput
  }

  export type PlayerStatsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    playerId?: string
    AND?: PlayerStatsWhereInput | PlayerStatsWhereInput[]
    OR?: PlayerStatsWhereInput[]
    NOT?: PlayerStatsWhereInput | PlayerStatsWhereInput[]
    goals?: IntFilter<"PlayerStats"> | number
    assists?: IntFilter<"PlayerStats"> | number
    yellowCards?: IntFilter<"PlayerStats"> | number
    redCards?: IntFilter<"PlayerStats"> | number
    matchesPlayed?: IntFilter<"PlayerStats"> | number
    lastUpdated?: DateTimeFilter<"PlayerStats"> | Date | string
    player?: XOR<PlayerProfileScalarRelationFilter, PlayerProfileWhereInput>
  }, "id" | "playerId">

  export type PlayerStatsOrderByWithAggregationInput = {
    id?: SortOrder
    playerId?: SortOrder
    goals?: SortOrder
    assists?: SortOrder
    yellowCards?: SortOrder
    redCards?: SortOrder
    matchesPlayed?: SortOrder
    lastUpdated?: SortOrder
    _count?: PlayerStatsCountOrderByAggregateInput
    _avg?: PlayerStatsAvgOrderByAggregateInput
    _max?: PlayerStatsMaxOrderByAggregateInput
    _min?: PlayerStatsMinOrderByAggregateInput
    _sum?: PlayerStatsSumOrderByAggregateInput
  }

  export type PlayerStatsScalarWhereWithAggregatesInput = {
    AND?: PlayerStatsScalarWhereWithAggregatesInput | PlayerStatsScalarWhereWithAggregatesInput[]
    OR?: PlayerStatsScalarWhereWithAggregatesInput[]
    NOT?: PlayerStatsScalarWhereWithAggregatesInput | PlayerStatsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlayerStats"> | string
    playerId?: StringWithAggregatesFilter<"PlayerStats"> | string
    goals?: IntWithAggregatesFilter<"PlayerStats"> | number
    assists?: IntWithAggregatesFilter<"PlayerStats"> | number
    yellowCards?: IntWithAggregatesFilter<"PlayerStats"> | number
    redCards?: IntWithAggregatesFilter<"PlayerStats"> | number
    matchesPlayed?: IntWithAggregatesFilter<"PlayerStats"> | number
    lastUpdated?: DateTimeWithAggregatesFilter<"PlayerStats"> | Date | string
  }

  export type FixtureWhereInput = {
    AND?: FixtureWhereInput | FixtureWhereInput[]
    OR?: FixtureWhereInput[]
    NOT?: FixtureWhereInput | FixtureWhereInput[]
    id?: StringFilter<"Fixture"> | string
    scheduledTime?: DateTimeFilter<"Fixture"> | Date | string
    venue?: StringFilter<"Fixture"> | string
    status?: EnumMatchStatusFilter<"Fixture"> | $Enums.MatchStatus
    homeTeamId?: StringFilter<"Fixture"> | string
    awayTeamId?: StringFilter<"Fixture"> | string
    homeScore?: IntNullableFilter<"Fixture"> | number | null
    awayScore?: IntNullableFilter<"Fixture"> | number | null
    tournamentId?: StringNullableFilter<"Fixture"> | string | null
    homeTeam?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    awayTeam?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    matchLogs?: MatchLogListRelationFilter
    formation?: XOR<MatchFormationNullableScalarRelationFilter, MatchFormationWhereInput> | null
    tournament?: XOR<TournamentNullableScalarRelationFilter, TournamentWhereInput> | null
  }

  export type FixtureOrderByWithRelationInput = {
    id?: SortOrder
    scheduledTime?: SortOrder
    venue?: SortOrder
    status?: SortOrder
    homeTeamId?: SortOrder
    awayTeamId?: SortOrder
    homeScore?: SortOrderInput | SortOrder
    awayScore?: SortOrderInput | SortOrder
    tournamentId?: SortOrderInput | SortOrder
    homeTeam?: TeamOrderByWithRelationInput
    awayTeam?: TeamOrderByWithRelationInput
    matchLogs?: MatchLogOrderByRelationAggregateInput
    formation?: MatchFormationOrderByWithRelationInput
    tournament?: TournamentOrderByWithRelationInput
  }

  export type FixtureWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FixtureWhereInput | FixtureWhereInput[]
    OR?: FixtureWhereInput[]
    NOT?: FixtureWhereInput | FixtureWhereInput[]
    scheduledTime?: DateTimeFilter<"Fixture"> | Date | string
    venue?: StringFilter<"Fixture"> | string
    status?: EnumMatchStatusFilter<"Fixture"> | $Enums.MatchStatus
    homeTeamId?: StringFilter<"Fixture"> | string
    awayTeamId?: StringFilter<"Fixture"> | string
    homeScore?: IntNullableFilter<"Fixture"> | number | null
    awayScore?: IntNullableFilter<"Fixture"> | number | null
    tournamentId?: StringNullableFilter<"Fixture"> | string | null
    homeTeam?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    awayTeam?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    matchLogs?: MatchLogListRelationFilter
    formation?: XOR<MatchFormationNullableScalarRelationFilter, MatchFormationWhereInput> | null
    tournament?: XOR<TournamentNullableScalarRelationFilter, TournamentWhereInput> | null
  }, "id">

  export type FixtureOrderByWithAggregationInput = {
    id?: SortOrder
    scheduledTime?: SortOrder
    venue?: SortOrder
    status?: SortOrder
    homeTeamId?: SortOrder
    awayTeamId?: SortOrder
    homeScore?: SortOrderInput | SortOrder
    awayScore?: SortOrderInput | SortOrder
    tournamentId?: SortOrderInput | SortOrder
    _count?: FixtureCountOrderByAggregateInput
    _avg?: FixtureAvgOrderByAggregateInput
    _max?: FixtureMaxOrderByAggregateInput
    _min?: FixtureMinOrderByAggregateInput
    _sum?: FixtureSumOrderByAggregateInput
  }

  export type FixtureScalarWhereWithAggregatesInput = {
    AND?: FixtureScalarWhereWithAggregatesInput | FixtureScalarWhereWithAggregatesInput[]
    OR?: FixtureScalarWhereWithAggregatesInput[]
    NOT?: FixtureScalarWhereWithAggregatesInput | FixtureScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Fixture"> | string
    scheduledTime?: DateTimeWithAggregatesFilter<"Fixture"> | Date | string
    venue?: StringWithAggregatesFilter<"Fixture"> | string
    status?: EnumMatchStatusWithAggregatesFilter<"Fixture"> | $Enums.MatchStatus
    homeTeamId?: StringWithAggregatesFilter<"Fixture"> | string
    awayTeamId?: StringWithAggregatesFilter<"Fixture"> | string
    homeScore?: IntNullableWithAggregatesFilter<"Fixture"> | number | null
    awayScore?: IntNullableWithAggregatesFilter<"Fixture"> | number | null
    tournamentId?: StringNullableWithAggregatesFilter<"Fixture"> | string | null
  }

  export type MatchFormationWhereInput = {
    AND?: MatchFormationWhereInput | MatchFormationWhereInput[]
    OR?: MatchFormationWhereInput[]
    NOT?: MatchFormationWhereInput | MatchFormationWhereInput[]
    id?: StringFilter<"MatchFormation"> | string
    fixtureId?: StringFilter<"MatchFormation"> | string
    formationDetails?: JsonNullableFilter<"MatchFormation">
    createdAt?: DateTimeFilter<"MatchFormation"> | Date | string
    updatedAt?: DateTimeFilter<"MatchFormation"> | Date | string
    fixture?: XOR<FixtureScalarRelationFilter, FixtureWhereInput>
  }

  export type MatchFormationOrderByWithRelationInput = {
    id?: SortOrder
    fixtureId?: SortOrder
    formationDetails?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fixture?: FixtureOrderByWithRelationInput
  }

  export type MatchFormationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    fixtureId?: string
    AND?: MatchFormationWhereInput | MatchFormationWhereInput[]
    OR?: MatchFormationWhereInput[]
    NOT?: MatchFormationWhereInput | MatchFormationWhereInput[]
    formationDetails?: JsonNullableFilter<"MatchFormation">
    createdAt?: DateTimeFilter<"MatchFormation"> | Date | string
    updatedAt?: DateTimeFilter<"MatchFormation"> | Date | string
    fixture?: XOR<FixtureScalarRelationFilter, FixtureWhereInput>
  }, "id" | "fixtureId">

  export type MatchFormationOrderByWithAggregationInput = {
    id?: SortOrder
    fixtureId?: SortOrder
    formationDetails?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MatchFormationCountOrderByAggregateInput
    _max?: MatchFormationMaxOrderByAggregateInput
    _min?: MatchFormationMinOrderByAggregateInput
  }

  export type MatchFormationScalarWhereWithAggregatesInput = {
    AND?: MatchFormationScalarWhereWithAggregatesInput | MatchFormationScalarWhereWithAggregatesInput[]
    OR?: MatchFormationScalarWhereWithAggregatesInput[]
    NOT?: MatchFormationScalarWhereWithAggregatesInput | MatchFormationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MatchFormation"> | string
    fixtureId?: StringWithAggregatesFilter<"MatchFormation"> | string
    formationDetails?: JsonNullableWithAggregatesFilter<"MatchFormation">
    createdAt?: DateTimeWithAggregatesFilter<"MatchFormation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MatchFormation"> | Date | string
  }

  export type MatchLogWhereInput = {
    AND?: MatchLogWhereInput | MatchLogWhereInput[]
    OR?: MatchLogWhereInput[]
    NOT?: MatchLogWhereInput | MatchLogWhereInput[]
    id?: StringFilter<"MatchLog"> | string
    fixtureId?: StringFilter<"MatchLog"> | string
    logEntry?: StringFilter<"MatchLog"> | string
    createdAt?: DateTimeFilter<"MatchLog"> | Date | string
    fixture?: XOR<FixtureScalarRelationFilter, FixtureWhereInput>
    playerLogs?: MatchPlayerLogListRelationFilter
  }

  export type MatchLogOrderByWithRelationInput = {
    id?: SortOrder
    fixtureId?: SortOrder
    logEntry?: SortOrder
    createdAt?: SortOrder
    fixture?: FixtureOrderByWithRelationInput
    playerLogs?: MatchPlayerLogOrderByRelationAggregateInput
  }

  export type MatchLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MatchLogWhereInput | MatchLogWhereInput[]
    OR?: MatchLogWhereInput[]
    NOT?: MatchLogWhereInput | MatchLogWhereInput[]
    fixtureId?: StringFilter<"MatchLog"> | string
    logEntry?: StringFilter<"MatchLog"> | string
    createdAt?: DateTimeFilter<"MatchLog"> | Date | string
    fixture?: XOR<FixtureScalarRelationFilter, FixtureWhereInput>
    playerLogs?: MatchPlayerLogListRelationFilter
  }, "id">

  export type MatchLogOrderByWithAggregationInput = {
    id?: SortOrder
    fixtureId?: SortOrder
    logEntry?: SortOrder
    createdAt?: SortOrder
    _count?: MatchLogCountOrderByAggregateInput
    _max?: MatchLogMaxOrderByAggregateInput
    _min?: MatchLogMinOrderByAggregateInput
  }

  export type MatchLogScalarWhereWithAggregatesInput = {
    AND?: MatchLogScalarWhereWithAggregatesInput | MatchLogScalarWhereWithAggregatesInput[]
    OR?: MatchLogScalarWhereWithAggregatesInput[]
    NOT?: MatchLogScalarWhereWithAggregatesInput | MatchLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MatchLog"> | string
    fixtureId?: StringWithAggregatesFilter<"MatchLog"> | string
    logEntry?: StringWithAggregatesFilter<"MatchLog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MatchLog"> | Date | string
  }

  export type MatchPlayerLogWhereInput = {
    AND?: MatchPlayerLogWhereInput | MatchPlayerLogWhereInput[]
    OR?: MatchPlayerLogWhereInput[]
    NOT?: MatchPlayerLogWhereInput | MatchPlayerLogWhereInput[]
    id?: StringFilter<"MatchPlayerLog"> | string
    logId?: StringFilter<"MatchPlayerLog"> | string
    playerId?: StringFilter<"MatchPlayerLog"> | string
    eventType?: EnumLogTypeFilter<"MatchPlayerLog"> | $Enums.LogType
    minute?: IntNullableFilter<"MatchPlayerLog"> | number | null
    goalScorerId?: StringNullableFilter<"MatchPlayerLog"> | string | null
    assistPlayerId?: StringNullableFilter<"MatchPlayerLog"> | string | null
    log?: XOR<MatchLogScalarRelationFilter, MatchLogWhereInput>
    player?: XOR<PlayerProfileScalarRelationFilter, PlayerProfileWhereInput>
  }

  export type MatchPlayerLogOrderByWithRelationInput = {
    id?: SortOrder
    logId?: SortOrder
    playerId?: SortOrder
    eventType?: SortOrder
    minute?: SortOrderInput | SortOrder
    goalScorerId?: SortOrderInput | SortOrder
    assistPlayerId?: SortOrderInput | SortOrder
    log?: MatchLogOrderByWithRelationInput
    player?: PlayerProfileOrderByWithRelationInput
  }

  export type MatchPlayerLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MatchPlayerLogWhereInput | MatchPlayerLogWhereInput[]
    OR?: MatchPlayerLogWhereInput[]
    NOT?: MatchPlayerLogWhereInput | MatchPlayerLogWhereInput[]
    logId?: StringFilter<"MatchPlayerLog"> | string
    playerId?: StringFilter<"MatchPlayerLog"> | string
    eventType?: EnumLogTypeFilter<"MatchPlayerLog"> | $Enums.LogType
    minute?: IntNullableFilter<"MatchPlayerLog"> | number | null
    goalScorerId?: StringNullableFilter<"MatchPlayerLog"> | string | null
    assistPlayerId?: StringNullableFilter<"MatchPlayerLog"> | string | null
    log?: XOR<MatchLogScalarRelationFilter, MatchLogWhereInput>
    player?: XOR<PlayerProfileScalarRelationFilter, PlayerProfileWhereInput>
  }, "id">

  export type MatchPlayerLogOrderByWithAggregationInput = {
    id?: SortOrder
    logId?: SortOrder
    playerId?: SortOrder
    eventType?: SortOrder
    minute?: SortOrderInput | SortOrder
    goalScorerId?: SortOrderInput | SortOrder
    assistPlayerId?: SortOrderInput | SortOrder
    _count?: MatchPlayerLogCountOrderByAggregateInput
    _avg?: MatchPlayerLogAvgOrderByAggregateInput
    _max?: MatchPlayerLogMaxOrderByAggregateInput
    _min?: MatchPlayerLogMinOrderByAggregateInput
    _sum?: MatchPlayerLogSumOrderByAggregateInput
  }

  export type MatchPlayerLogScalarWhereWithAggregatesInput = {
    AND?: MatchPlayerLogScalarWhereWithAggregatesInput | MatchPlayerLogScalarWhereWithAggregatesInput[]
    OR?: MatchPlayerLogScalarWhereWithAggregatesInput[]
    NOT?: MatchPlayerLogScalarWhereWithAggregatesInput | MatchPlayerLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MatchPlayerLog"> | string
    logId?: StringWithAggregatesFilter<"MatchPlayerLog"> | string
    playerId?: StringWithAggregatesFilter<"MatchPlayerLog"> | string
    eventType?: EnumLogTypeWithAggregatesFilter<"MatchPlayerLog"> | $Enums.LogType
    minute?: IntNullableWithAggregatesFilter<"MatchPlayerLog"> | number | null
    goalScorerId?: StringNullableWithAggregatesFilter<"MatchPlayerLog"> | string | null
    assistPlayerId?: StringNullableWithAggregatesFilter<"MatchPlayerLog"> | string | null
  }

  export type TournamentWhereInput = {
    AND?: TournamentWhereInput | TournamentWhereInput[]
    OR?: TournamentWhereInput[]
    NOT?: TournamentWhereInput | TournamentWhereInput[]
    id?: StringFilter<"Tournament"> | string
    name?: StringFilter<"Tournament"> | string
    startDate?: DateTimeFilter<"Tournament"> | Date | string
    endDate?: DateTimeFilter<"Tournament"> | Date | string
    status?: StringFilter<"Tournament"> | string
    createdAt?: DateTimeFilter<"Tournament"> | Date | string
    updatedAt?: DateTimeFilter<"Tournament"> | Date | string
    fixtures?: FixtureListRelationFilter
  }

  export type TournamentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fixtures?: FixtureOrderByRelationAggregateInput
  }

  export type TournamentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: TournamentWhereInput | TournamentWhereInput[]
    OR?: TournamentWhereInput[]
    NOT?: TournamentWhereInput | TournamentWhereInput[]
    startDate?: DateTimeFilter<"Tournament"> | Date | string
    endDate?: DateTimeFilter<"Tournament"> | Date | string
    status?: StringFilter<"Tournament"> | string
    createdAt?: DateTimeFilter<"Tournament"> | Date | string
    updatedAt?: DateTimeFilter<"Tournament"> | Date | string
    fixtures?: FixtureListRelationFilter
  }, "id" | "name">

  export type TournamentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TournamentCountOrderByAggregateInput
    _max?: TournamentMaxOrderByAggregateInput
    _min?: TournamentMinOrderByAggregateInput
  }

  export type TournamentScalarWhereWithAggregatesInput = {
    AND?: TournamentScalarWhereWithAggregatesInput | TournamentScalarWhereWithAggregatesInput[]
    OR?: TournamentScalarWhereWithAggregatesInput[]
    NOT?: TournamentScalarWhereWithAggregatesInput | TournamentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tournament"> | string
    name?: StringWithAggregatesFilter<"Tournament"> | string
    startDate?: DateTimeWithAggregatesFilter<"Tournament"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Tournament"> | Date | string
    status?: StringWithAggregatesFilter<"Tournament"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tournament"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tournament"> | Date | string
  }

  export type AdminLogWhereInput = {
    AND?: AdminLogWhereInput | AdminLogWhereInput[]
    OR?: AdminLogWhereInput[]
    NOT?: AdminLogWhereInput | AdminLogWhereInput[]
    id?: StringFilter<"AdminLog"> | string
    userId?: StringFilter<"AdminLog"> | string
    action?: StringFilter<"AdminLog"> | string
    targetId?: StringNullableFilter<"AdminLog"> | string | null
    createdAt?: DateTimeFilter<"AdminLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AdminLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    targetId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AdminLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AdminLogWhereInput | AdminLogWhereInput[]
    OR?: AdminLogWhereInput[]
    NOT?: AdminLogWhereInput | AdminLogWhereInput[]
    userId?: StringFilter<"AdminLog"> | string
    action?: StringFilter<"AdminLog"> | string
    targetId?: StringNullableFilter<"AdminLog"> | string | null
    createdAt?: DateTimeFilter<"AdminLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AdminLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    targetId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AdminLogCountOrderByAggregateInput
    _max?: AdminLogMaxOrderByAggregateInput
    _min?: AdminLogMinOrderByAggregateInput
  }

  export type AdminLogScalarWhereWithAggregatesInput = {
    AND?: AdminLogScalarWhereWithAggregatesInput | AdminLogScalarWhereWithAggregatesInput[]
    OR?: AdminLogScalarWhereWithAggregatesInput[]
    NOT?: AdminLogScalarWhereWithAggregatesInput | AdminLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdminLog"> | string
    userId?: StringWithAggregatesFilter<"AdminLog"> | string
    action?: StringWithAggregatesFilter<"AdminLog"> | string
    targetId?: StringNullableWithAggregatesFilter<"AdminLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AdminLog"> | Date | string
  }

  export type TournamentStatWhereInput = {
    AND?: TournamentStatWhereInput | TournamentStatWhereInput[]
    OR?: TournamentStatWhereInput[]
    NOT?: TournamentStatWhereInput | TournamentStatWhereInput[]
    id?: StringFilter<"TournamentStat"> | string
    name?: StringFilter<"TournamentStat"> | string
    value?: StringFilter<"TournamentStat"> | string
    lastUpdated?: DateTimeFilter<"TournamentStat"> | Date | string
  }

  export type TournamentStatOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    lastUpdated?: SortOrder
  }

  export type TournamentStatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: TournamentStatWhereInput | TournamentStatWhereInput[]
    OR?: TournamentStatWhereInput[]
    NOT?: TournamentStatWhereInput | TournamentStatWhereInput[]
    value?: StringFilter<"TournamentStat"> | string
    lastUpdated?: DateTimeFilter<"TournamentStat"> | Date | string
  }, "id" | "name">

  export type TournamentStatOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    lastUpdated?: SortOrder
    _count?: TournamentStatCountOrderByAggregateInput
    _max?: TournamentStatMaxOrderByAggregateInput
    _min?: TournamentStatMinOrderByAggregateInput
  }

  export type TournamentStatScalarWhereWithAggregatesInput = {
    AND?: TournamentStatScalarWhereWithAggregatesInput | TournamentStatScalarWhereWithAggregatesInput[]
    OR?: TournamentStatScalarWhereWithAggregatesInput[]
    NOT?: TournamentStatScalarWhereWithAggregatesInput | TournamentStatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TournamentStat"> | string
    name?: StringWithAggregatesFilter<"TournamentStat"> | string
    value?: StringWithAggregatesFilter<"TournamentStat"> | string
    lastUpdated?: DateTimeWithAggregatesFilter<"TournamentStat"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    role?: $Enums.UserRole
    verificationToken?: string | null
    verificationTokenExpires?: Date | string | null
    emailVerified?: Date | string | null
    dateOfBirth?: Date | string | null
    idNumber?: string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    managedTeam?: TeamCreateNestedOneWithoutCoachInput
    playerProfile?: PlayerProfileCreateNestedOneWithoutUserInput
    adminLogs?: AdminLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    role?: $Enums.UserRole
    verificationToken?: string | null
    verificationTokenExpires?: Date | string | null
    emailVerified?: Date | string | null
    dateOfBirth?: Date | string | null
    idNumber?: string | null
    image?: string | null
    managedTeamId?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    playerProfile?: PlayerProfileUncheckedCreateNestedOneWithoutUserInput
    adminLogs?: AdminLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    managedTeam?: TeamUpdateOneWithoutCoachNestedInput
    playerProfile?: PlayerProfileUpdateOneWithoutUserNestedInput
    adminLogs?: AdminLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    managedTeamId?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    playerProfile?: PlayerProfileUncheckedUpdateOneWithoutUserNestedInput
    adminLogs?: AdminLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    role?: $Enums.UserRole
    verificationToken?: string | null
    verificationTokenExpires?: Date | string | null
    emailVerified?: Date | string | null
    dateOfBirth?: Date | string | null
    idNumber?: string | null
    image?: string | null
    managedTeamId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    managedTeamId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamCreateInput = {
    id?: string
    name: string
    affiliationFeePaid?: boolean
    createdAt?: Date | string
    coach?: UserCreateNestedOneWithoutManagedTeamInput
    players?: PlayerProfileCreateNestedManyWithoutTeamInput
    homeFixtures?: FixtureCreateNestedManyWithoutHomeTeamInput
    awayFixtures?: FixtureCreateNestedManyWithoutAwayTeamInput
    teamStats?: TeamStatsCreateNestedOneWithoutTeamInput
  }

  export type TeamUncheckedCreateInput = {
    id?: string
    name: string
    affiliationFeePaid?: boolean
    createdAt?: Date | string
    coach?: UserUncheckedCreateNestedOneWithoutManagedTeamInput
    players?: PlayerProfileUncheckedCreateNestedManyWithoutTeamInput
    homeFixtures?: FixtureUncheckedCreateNestedManyWithoutHomeTeamInput
    awayFixtures?: FixtureUncheckedCreateNestedManyWithoutAwayTeamInput
    teamStats?: TeamStatsUncheckedCreateNestedOneWithoutTeamInput
  }

  export type TeamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    affiliationFeePaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coach?: UserUpdateOneWithoutManagedTeamNestedInput
    players?: PlayerProfileUpdateManyWithoutTeamNestedInput
    homeFixtures?: FixtureUpdateManyWithoutHomeTeamNestedInput
    awayFixtures?: FixtureUpdateManyWithoutAwayTeamNestedInput
    teamStats?: TeamStatsUpdateOneWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    affiliationFeePaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coach?: UserUncheckedUpdateOneWithoutManagedTeamNestedInput
    players?: PlayerProfileUncheckedUpdateManyWithoutTeamNestedInput
    homeFixtures?: FixtureUncheckedUpdateManyWithoutHomeTeamNestedInput
    awayFixtures?: FixtureUncheckedUpdateManyWithoutAwayTeamNestedInput
    teamStats?: TeamStatsUncheckedUpdateOneWithoutTeamNestedInput
  }

  export type TeamCreateManyInput = {
    id?: string
    name: string
    affiliationFeePaid?: boolean
    createdAt?: Date | string
  }

  export type TeamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    affiliationFeePaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    affiliationFeePaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerProfileCreateInput = {
    id?: string
    jerseyNumber?: number | null
    position?: string | null
    isCaptain?: boolean
    user: UserCreateNestedOneWithoutPlayerProfileInput
    team: TeamCreateNestedOneWithoutPlayersInput
    matchLogs?: MatchPlayerLogCreateNestedManyWithoutPlayerInput
    playerStats?: PlayerStatsCreateNestedOneWithoutPlayerInput
  }

  export type PlayerProfileUncheckedCreateInput = {
    id?: string
    userId: string
    jerseyNumber?: number | null
    position?: string | null
    isCaptain?: boolean
    teamId: string
    matchLogs?: MatchPlayerLogUncheckedCreateNestedManyWithoutPlayerInput
    playerStats?: PlayerStatsUncheckedCreateNestedOneWithoutPlayerInput
  }

  export type PlayerProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jerseyNumber?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    isCaptain?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutPlayerProfileNestedInput
    team?: TeamUpdateOneRequiredWithoutPlayersNestedInput
    matchLogs?: MatchPlayerLogUpdateManyWithoutPlayerNestedInput
    playerStats?: PlayerStatsUpdateOneWithoutPlayerNestedInput
  }

  export type PlayerProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    jerseyNumber?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    isCaptain?: BoolFieldUpdateOperationsInput | boolean
    teamId?: StringFieldUpdateOperationsInput | string
    matchLogs?: MatchPlayerLogUncheckedUpdateManyWithoutPlayerNestedInput
    playerStats?: PlayerStatsUncheckedUpdateOneWithoutPlayerNestedInput
  }

  export type PlayerProfileCreateManyInput = {
    id?: string
    userId: string
    jerseyNumber?: number | null
    position?: string | null
    isCaptain?: boolean
    teamId: string
  }

  export type PlayerProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    jerseyNumber?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    isCaptain?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PlayerProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    jerseyNumber?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    isCaptain?: BoolFieldUpdateOperationsInput | boolean
    teamId?: StringFieldUpdateOperationsInput | string
  }

  export type TeamStatsCreateInput = {
    id?: string
    wins?: number
    losses?: number
    draws?: number
    points?: number
    goalsFor?: number
    goalsAgainst?: number
    goalDifference?: number
    lastUpdated?: Date | string
    team: TeamCreateNestedOneWithoutTeamStatsInput
  }

  export type TeamStatsUncheckedCreateInput = {
    id?: string
    teamId: string
    wins?: number
    losses?: number
    draws?: number
    points?: number
    goalsFor?: number
    goalsAgainst?: number
    goalDifference?: number
    lastUpdated?: Date | string
  }

  export type TeamStatsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    draws?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    goalsFor?: IntFieldUpdateOperationsInput | number
    goalsAgainst?: IntFieldUpdateOperationsInput | number
    goalDifference?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutTeamStatsNestedInput
  }

  export type TeamStatsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    draws?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    goalsFor?: IntFieldUpdateOperationsInput | number
    goalsAgainst?: IntFieldUpdateOperationsInput | number
    goalDifference?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamStatsCreateManyInput = {
    id?: string
    teamId: string
    wins?: number
    losses?: number
    draws?: number
    points?: number
    goalsFor?: number
    goalsAgainst?: number
    goalDifference?: number
    lastUpdated?: Date | string
  }

  export type TeamStatsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    draws?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    goalsFor?: IntFieldUpdateOperationsInput | number
    goalsAgainst?: IntFieldUpdateOperationsInput | number
    goalDifference?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamStatsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    draws?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    goalsFor?: IntFieldUpdateOperationsInput | number
    goalsAgainst?: IntFieldUpdateOperationsInput | number
    goalDifference?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerStatsCreateInput = {
    id?: string
    goals?: number
    assists?: number
    yellowCards?: number
    redCards?: number
    matchesPlayed?: number
    lastUpdated?: Date | string
    player: PlayerProfileCreateNestedOneWithoutPlayerStatsInput
  }

  export type PlayerStatsUncheckedCreateInput = {
    id?: string
    playerId: string
    goals?: number
    assists?: number
    yellowCards?: number
    redCards?: number
    matchesPlayed?: number
    lastUpdated?: Date | string
  }

  export type PlayerStatsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    goals?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    yellowCards?: IntFieldUpdateOperationsInput | number
    redCards?: IntFieldUpdateOperationsInput | number
    matchesPlayed?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    player?: PlayerProfileUpdateOneRequiredWithoutPlayerStatsNestedInput
  }

  export type PlayerStatsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    goals?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    yellowCards?: IntFieldUpdateOperationsInput | number
    redCards?: IntFieldUpdateOperationsInput | number
    matchesPlayed?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerStatsCreateManyInput = {
    id?: string
    playerId: string
    goals?: number
    assists?: number
    yellowCards?: number
    redCards?: number
    matchesPlayed?: number
    lastUpdated?: Date | string
  }

  export type PlayerStatsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    goals?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    yellowCards?: IntFieldUpdateOperationsInput | number
    redCards?: IntFieldUpdateOperationsInput | number
    matchesPlayed?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerStatsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    goals?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    yellowCards?: IntFieldUpdateOperationsInput | number
    redCards?: IntFieldUpdateOperationsInput | number
    matchesPlayed?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FixtureCreateInput = {
    id?: string
    scheduledTime: Date | string
    venue: string
    status?: $Enums.MatchStatus
    homeScore?: number | null
    awayScore?: number | null
    homeTeam: TeamCreateNestedOneWithoutHomeFixturesInput
    awayTeam: TeamCreateNestedOneWithoutAwayFixturesInput
    matchLogs?: MatchLogCreateNestedManyWithoutFixtureInput
    formation?: MatchFormationCreateNestedOneWithoutFixtureInput
    tournament?: TournamentCreateNestedOneWithoutFixturesInput
  }

  export type FixtureUncheckedCreateInput = {
    id?: string
    scheduledTime: Date | string
    venue: string
    status?: $Enums.MatchStatus
    homeTeamId: string
    awayTeamId: string
    homeScore?: number | null
    awayScore?: number | null
    tournamentId?: string | null
    matchLogs?: MatchLogUncheckedCreateNestedManyWithoutFixtureInput
    formation?: MatchFormationUncheckedCreateNestedOneWithoutFixtureInput
  }

  export type FixtureUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    homeTeam?: TeamUpdateOneRequiredWithoutHomeFixturesNestedInput
    awayTeam?: TeamUpdateOneRequiredWithoutAwayFixturesNestedInput
    matchLogs?: MatchLogUpdateManyWithoutFixtureNestedInput
    formation?: MatchFormationUpdateOneWithoutFixtureNestedInput
    tournament?: TournamentUpdateOneWithoutFixturesNestedInput
  }

  export type FixtureUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    homeTeamId?: StringFieldUpdateOperationsInput | string
    awayTeamId?: StringFieldUpdateOperationsInput | string
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    tournamentId?: NullableStringFieldUpdateOperationsInput | string | null
    matchLogs?: MatchLogUncheckedUpdateManyWithoutFixtureNestedInput
    formation?: MatchFormationUncheckedUpdateOneWithoutFixtureNestedInput
  }

  export type FixtureCreateManyInput = {
    id?: string
    scheduledTime: Date | string
    venue: string
    status?: $Enums.MatchStatus
    homeTeamId: string
    awayTeamId: string
    homeScore?: number | null
    awayScore?: number | null
    tournamentId?: string | null
  }

  export type FixtureUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FixtureUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    homeTeamId?: StringFieldUpdateOperationsInput | string
    awayTeamId?: StringFieldUpdateOperationsInput | string
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    tournamentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatchFormationCreateInput = {
    id?: string
    formationDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    fixture: FixtureCreateNestedOneWithoutFormationInput
  }

  export type MatchFormationUncheckedCreateInput = {
    id?: string
    fixtureId: string
    formationDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchFormationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    formationDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fixture?: FixtureUpdateOneRequiredWithoutFormationNestedInput
  }

  export type MatchFormationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fixtureId?: StringFieldUpdateOperationsInput | string
    formationDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchFormationCreateManyInput = {
    id?: string
    fixtureId: string
    formationDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchFormationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    formationDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchFormationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fixtureId?: StringFieldUpdateOperationsInput | string
    formationDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchLogCreateInput = {
    id?: string
    logEntry: string
    createdAt?: Date | string
    fixture: FixtureCreateNestedOneWithoutMatchLogsInput
    playerLogs?: MatchPlayerLogCreateNestedManyWithoutLogInput
  }

  export type MatchLogUncheckedCreateInput = {
    id?: string
    fixtureId: string
    logEntry: string
    createdAt?: Date | string
    playerLogs?: MatchPlayerLogUncheckedCreateNestedManyWithoutLogInput
  }

  export type MatchLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    logEntry?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fixture?: FixtureUpdateOneRequiredWithoutMatchLogsNestedInput
    playerLogs?: MatchPlayerLogUpdateManyWithoutLogNestedInput
  }

  export type MatchLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fixtureId?: StringFieldUpdateOperationsInput | string
    logEntry?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerLogs?: MatchPlayerLogUncheckedUpdateManyWithoutLogNestedInput
  }

  export type MatchLogCreateManyInput = {
    id?: string
    fixtureId: string
    logEntry: string
    createdAt?: Date | string
  }

  export type MatchLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    logEntry?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fixtureId?: StringFieldUpdateOperationsInput | string
    logEntry?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchPlayerLogCreateInput = {
    id?: string
    eventType: $Enums.LogType
    minute?: number | null
    goalScorerId?: string | null
    assistPlayerId?: string | null
    log: MatchLogCreateNestedOneWithoutPlayerLogsInput
    player: PlayerProfileCreateNestedOneWithoutMatchLogsInput
  }

  export type MatchPlayerLogUncheckedCreateInput = {
    id?: string
    logId: string
    playerId: string
    eventType: $Enums.LogType
    minute?: number | null
    goalScorerId?: string | null
    assistPlayerId?: string | null
  }

  export type MatchPlayerLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: EnumLogTypeFieldUpdateOperationsInput | $Enums.LogType
    minute?: NullableIntFieldUpdateOperationsInput | number | null
    goalScorerId?: NullableStringFieldUpdateOperationsInput | string | null
    assistPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
    log?: MatchLogUpdateOneRequiredWithoutPlayerLogsNestedInput
    player?: PlayerProfileUpdateOneRequiredWithoutMatchLogsNestedInput
  }

  export type MatchPlayerLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    logId?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    eventType?: EnumLogTypeFieldUpdateOperationsInput | $Enums.LogType
    minute?: NullableIntFieldUpdateOperationsInput | number | null
    goalScorerId?: NullableStringFieldUpdateOperationsInput | string | null
    assistPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatchPlayerLogCreateManyInput = {
    id?: string
    logId: string
    playerId: string
    eventType: $Enums.LogType
    minute?: number | null
    goalScorerId?: string | null
    assistPlayerId?: string | null
  }

  export type MatchPlayerLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: EnumLogTypeFieldUpdateOperationsInput | $Enums.LogType
    minute?: NullableIntFieldUpdateOperationsInput | number | null
    goalScorerId?: NullableStringFieldUpdateOperationsInput | string | null
    assistPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatchPlayerLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    logId?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    eventType?: EnumLogTypeFieldUpdateOperationsInput | $Enums.LogType
    minute?: NullableIntFieldUpdateOperationsInput | number | null
    goalScorerId?: NullableStringFieldUpdateOperationsInput | string | null
    assistPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TournamentCreateInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fixtures?: FixtureCreateNestedManyWithoutTournamentInput
  }

  export type TournamentUncheckedCreateInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fixtures?: FixtureUncheckedCreateNestedManyWithoutTournamentInput
  }

  export type TournamentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fixtures?: FixtureUpdateManyWithoutTournamentNestedInput
  }

  export type TournamentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fixtures?: FixtureUncheckedUpdateManyWithoutTournamentNestedInput
  }

  export type TournamentCreateManyInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TournamentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminLogCreateInput = {
    id?: string
    action: string
    targetId?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAdminLogsInput
  }

  export type AdminLogUncheckedCreateInput = {
    id?: string
    userId: string
    action: string
    targetId?: string | null
    createdAt?: Date | string
  }

  export type AdminLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAdminLogsNestedInput
  }

  export type AdminLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminLogCreateManyInput = {
    id?: string
    userId: string
    action: string
    targetId?: string | null
    createdAt?: Date | string
  }

  export type AdminLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentStatCreateInput = {
    id?: string
    name: string
    value: string
    lastUpdated?: Date | string
  }

  export type TournamentStatUncheckedCreateInput = {
    id?: string
    name: string
    value: string
    lastUpdated?: Date | string
  }

  export type TournamentStatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentStatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentStatCreateManyInput = {
    id?: string
    name: string
    value: string
    lastUpdated?: Date | string
  }

  export type TournamentStatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentStatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type TeamNullableScalarRelationFilter = {
    is?: TeamWhereInput | null
    isNot?: TeamWhereInput | null
  }

  export type PlayerProfileNullableScalarRelationFilter = {
    is?: PlayerProfileWhereInput | null
    isNot?: PlayerProfileWhereInput | null
  }

  export type AdminLogListRelationFilter = {
    every?: AdminLogWhereInput
    some?: AdminLogWhereInput
    none?: AdminLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    verificationToken?: SortOrder
    verificationTokenExpires?: SortOrder
    emailVerified?: SortOrder
    dateOfBirth?: SortOrder
    idNumber?: SortOrder
    image?: SortOrder
    managedTeamId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    verificationToken?: SortOrder
    verificationTokenExpires?: SortOrder
    emailVerified?: SortOrder
    dateOfBirth?: SortOrder
    idNumber?: SortOrder
    image?: SortOrder
    managedTeamId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    verificationToken?: SortOrder
    verificationTokenExpires?: SortOrder
    emailVerified?: SortOrder
    dateOfBirth?: SortOrder
    idNumber?: SortOrder
    image?: SortOrder
    managedTeamId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type PlayerProfileListRelationFilter = {
    every?: PlayerProfileWhereInput
    some?: PlayerProfileWhereInput
    none?: PlayerProfileWhereInput
  }

  export type FixtureListRelationFilter = {
    every?: FixtureWhereInput
    some?: FixtureWhereInput
    none?: FixtureWhereInput
  }

  export type TeamStatsNullableScalarRelationFilter = {
    is?: TeamStatsWhereInput | null
    isNot?: TeamStatsWhereInput | null
  }

  export type PlayerProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FixtureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    affiliationFeePaid?: SortOrder
    createdAt?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    affiliationFeePaid?: SortOrder
    createdAt?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    affiliationFeePaid?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TeamScalarRelationFilter = {
    is?: TeamWhereInput
    isNot?: TeamWhereInput
  }

  export type MatchPlayerLogListRelationFilter = {
    every?: MatchPlayerLogWhereInput
    some?: MatchPlayerLogWhereInput
    none?: MatchPlayerLogWhereInput
  }

  export type PlayerStatsNullableScalarRelationFilter = {
    is?: PlayerStatsWhereInput | null
    isNot?: PlayerStatsWhereInput | null
  }

  export type MatchPlayerLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlayerProfileTeamIdJerseyNumberCompoundUniqueInput = {
    teamId: string
    jerseyNumber: number
  }

  export type PlayerProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    jerseyNumber?: SortOrder
    position?: SortOrder
    isCaptain?: SortOrder
    teamId?: SortOrder
  }

  export type PlayerProfileAvgOrderByAggregateInput = {
    jerseyNumber?: SortOrder
  }

  export type PlayerProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    jerseyNumber?: SortOrder
    position?: SortOrder
    isCaptain?: SortOrder
    teamId?: SortOrder
  }

  export type PlayerProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    jerseyNumber?: SortOrder
    position?: SortOrder
    isCaptain?: SortOrder
    teamId?: SortOrder
  }

  export type PlayerProfileSumOrderByAggregateInput = {
    jerseyNumber?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type TeamStatsCountOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    draws?: SortOrder
    points?: SortOrder
    goalsFor?: SortOrder
    goalsAgainst?: SortOrder
    goalDifference?: SortOrder
    lastUpdated?: SortOrder
  }

  export type TeamStatsAvgOrderByAggregateInput = {
    wins?: SortOrder
    losses?: SortOrder
    draws?: SortOrder
    points?: SortOrder
    goalsFor?: SortOrder
    goalsAgainst?: SortOrder
    goalDifference?: SortOrder
  }

  export type TeamStatsMaxOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    draws?: SortOrder
    points?: SortOrder
    goalsFor?: SortOrder
    goalsAgainst?: SortOrder
    goalDifference?: SortOrder
    lastUpdated?: SortOrder
  }

  export type TeamStatsMinOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    draws?: SortOrder
    points?: SortOrder
    goalsFor?: SortOrder
    goalsAgainst?: SortOrder
    goalDifference?: SortOrder
    lastUpdated?: SortOrder
  }

  export type TeamStatsSumOrderByAggregateInput = {
    wins?: SortOrder
    losses?: SortOrder
    draws?: SortOrder
    points?: SortOrder
    goalsFor?: SortOrder
    goalsAgainst?: SortOrder
    goalDifference?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type PlayerProfileScalarRelationFilter = {
    is?: PlayerProfileWhereInput
    isNot?: PlayerProfileWhereInput
  }

  export type PlayerStatsCountOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    goals?: SortOrder
    assists?: SortOrder
    yellowCards?: SortOrder
    redCards?: SortOrder
    matchesPlayed?: SortOrder
    lastUpdated?: SortOrder
  }

  export type PlayerStatsAvgOrderByAggregateInput = {
    goals?: SortOrder
    assists?: SortOrder
    yellowCards?: SortOrder
    redCards?: SortOrder
    matchesPlayed?: SortOrder
  }

  export type PlayerStatsMaxOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    goals?: SortOrder
    assists?: SortOrder
    yellowCards?: SortOrder
    redCards?: SortOrder
    matchesPlayed?: SortOrder
    lastUpdated?: SortOrder
  }

  export type PlayerStatsMinOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    goals?: SortOrder
    assists?: SortOrder
    yellowCards?: SortOrder
    redCards?: SortOrder
    matchesPlayed?: SortOrder
    lastUpdated?: SortOrder
  }

  export type PlayerStatsSumOrderByAggregateInput = {
    goals?: SortOrder
    assists?: SortOrder
    yellowCards?: SortOrder
    redCards?: SortOrder
    matchesPlayed?: SortOrder
  }

  export type EnumMatchStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | EnumMatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchStatusFilter<$PrismaModel> | $Enums.MatchStatus
  }

  export type MatchLogListRelationFilter = {
    every?: MatchLogWhereInput
    some?: MatchLogWhereInput
    none?: MatchLogWhereInput
  }

  export type MatchFormationNullableScalarRelationFilter = {
    is?: MatchFormationWhereInput | null
    isNot?: MatchFormationWhereInput | null
  }

  export type TournamentNullableScalarRelationFilter = {
    is?: TournamentWhereInput | null
    isNot?: TournamentWhereInput | null
  }

  export type MatchLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FixtureCountOrderByAggregateInput = {
    id?: SortOrder
    scheduledTime?: SortOrder
    venue?: SortOrder
    status?: SortOrder
    homeTeamId?: SortOrder
    awayTeamId?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
    tournamentId?: SortOrder
  }

  export type FixtureAvgOrderByAggregateInput = {
    homeScore?: SortOrder
    awayScore?: SortOrder
  }

  export type FixtureMaxOrderByAggregateInput = {
    id?: SortOrder
    scheduledTime?: SortOrder
    venue?: SortOrder
    status?: SortOrder
    homeTeamId?: SortOrder
    awayTeamId?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
    tournamentId?: SortOrder
  }

  export type FixtureMinOrderByAggregateInput = {
    id?: SortOrder
    scheduledTime?: SortOrder
    venue?: SortOrder
    status?: SortOrder
    homeTeamId?: SortOrder
    awayTeamId?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
    tournamentId?: SortOrder
  }

  export type FixtureSumOrderByAggregateInput = {
    homeScore?: SortOrder
    awayScore?: SortOrder
  }

  export type EnumMatchStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | EnumMatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchStatusWithAggregatesFilter<$PrismaModel> | $Enums.MatchStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMatchStatusFilter<$PrismaModel>
    _max?: NestedEnumMatchStatusFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type FixtureScalarRelationFilter = {
    is?: FixtureWhereInput
    isNot?: FixtureWhereInput
  }

  export type MatchFormationCountOrderByAggregateInput = {
    id?: SortOrder
    fixtureId?: SortOrder
    formationDetails?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchFormationMaxOrderByAggregateInput = {
    id?: SortOrder
    fixtureId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchFormationMinOrderByAggregateInput = {
    id?: SortOrder
    fixtureId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type MatchLogCountOrderByAggregateInput = {
    id?: SortOrder
    fixtureId?: SortOrder
    logEntry?: SortOrder
    createdAt?: SortOrder
  }

  export type MatchLogMaxOrderByAggregateInput = {
    id?: SortOrder
    fixtureId?: SortOrder
    logEntry?: SortOrder
    createdAt?: SortOrder
  }

  export type MatchLogMinOrderByAggregateInput = {
    id?: SortOrder
    fixtureId?: SortOrder
    logEntry?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumLogTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LogType | EnumLogTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LogType[] | ListEnumLogTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LogType[] | ListEnumLogTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLogTypeFilter<$PrismaModel> | $Enums.LogType
  }

  export type MatchLogScalarRelationFilter = {
    is?: MatchLogWhereInput
    isNot?: MatchLogWhereInput
  }

  export type MatchPlayerLogCountOrderByAggregateInput = {
    id?: SortOrder
    logId?: SortOrder
    playerId?: SortOrder
    eventType?: SortOrder
    minute?: SortOrder
    goalScorerId?: SortOrder
    assistPlayerId?: SortOrder
  }

  export type MatchPlayerLogAvgOrderByAggregateInput = {
    minute?: SortOrder
  }

  export type MatchPlayerLogMaxOrderByAggregateInput = {
    id?: SortOrder
    logId?: SortOrder
    playerId?: SortOrder
    eventType?: SortOrder
    minute?: SortOrder
    goalScorerId?: SortOrder
    assistPlayerId?: SortOrder
  }

  export type MatchPlayerLogMinOrderByAggregateInput = {
    id?: SortOrder
    logId?: SortOrder
    playerId?: SortOrder
    eventType?: SortOrder
    minute?: SortOrder
    goalScorerId?: SortOrder
    assistPlayerId?: SortOrder
  }

  export type MatchPlayerLogSumOrderByAggregateInput = {
    minute?: SortOrder
  }

  export type EnumLogTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LogType | EnumLogTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LogType[] | ListEnumLogTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LogType[] | ListEnumLogTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLogTypeWithAggregatesFilter<$PrismaModel> | $Enums.LogType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLogTypeFilter<$PrismaModel>
    _max?: NestedEnumLogTypeFilter<$PrismaModel>
  }

  export type TournamentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TournamentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TournamentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    targetId?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    targetId?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    targetId?: SortOrder
    createdAt?: SortOrder
  }

  export type TournamentStatCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    lastUpdated?: SortOrder
  }

  export type TournamentStatMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    lastUpdated?: SortOrder
  }

  export type TournamentStatMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    lastUpdated?: SortOrder
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type TeamCreateNestedOneWithoutCoachInput = {
    create?: XOR<TeamCreateWithoutCoachInput, TeamUncheckedCreateWithoutCoachInput>
    connectOrCreate?: TeamCreateOrConnectWithoutCoachInput
    connect?: TeamWhereUniqueInput
  }

  export type PlayerProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<PlayerProfileCreateWithoutUserInput, PlayerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: PlayerProfileCreateOrConnectWithoutUserInput
    connect?: PlayerProfileWhereUniqueInput
  }

  export type AdminLogCreateNestedManyWithoutUserInput = {
    create?: XOR<AdminLogCreateWithoutUserInput, AdminLogUncheckedCreateWithoutUserInput> | AdminLogCreateWithoutUserInput[] | AdminLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdminLogCreateOrConnectWithoutUserInput | AdminLogCreateOrConnectWithoutUserInput[]
    createMany?: AdminLogCreateManyUserInputEnvelope
    connect?: AdminLogWhereUniqueInput | AdminLogWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type PlayerProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PlayerProfileCreateWithoutUserInput, PlayerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: PlayerProfileCreateOrConnectWithoutUserInput
    connect?: PlayerProfileWhereUniqueInput
  }

  export type AdminLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AdminLogCreateWithoutUserInput, AdminLogUncheckedCreateWithoutUserInput> | AdminLogCreateWithoutUserInput[] | AdminLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdminLogCreateOrConnectWithoutUserInput | AdminLogCreateOrConnectWithoutUserInput[]
    createMany?: AdminLogCreateManyUserInputEnvelope
    connect?: AdminLogWhereUniqueInput | AdminLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type TeamUpdateOneWithoutCoachNestedInput = {
    create?: XOR<TeamCreateWithoutCoachInput, TeamUncheckedCreateWithoutCoachInput>
    connectOrCreate?: TeamCreateOrConnectWithoutCoachInput
    upsert?: TeamUpsertWithoutCoachInput
    disconnect?: TeamWhereInput | boolean
    delete?: TeamWhereInput | boolean
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutCoachInput, TeamUpdateWithoutCoachInput>, TeamUncheckedUpdateWithoutCoachInput>
  }

  export type PlayerProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<PlayerProfileCreateWithoutUserInput, PlayerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: PlayerProfileCreateOrConnectWithoutUserInput
    upsert?: PlayerProfileUpsertWithoutUserInput
    disconnect?: PlayerProfileWhereInput | boolean
    delete?: PlayerProfileWhereInput | boolean
    connect?: PlayerProfileWhereUniqueInput
    update?: XOR<XOR<PlayerProfileUpdateToOneWithWhereWithoutUserInput, PlayerProfileUpdateWithoutUserInput>, PlayerProfileUncheckedUpdateWithoutUserInput>
  }

  export type AdminLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<AdminLogCreateWithoutUserInput, AdminLogUncheckedCreateWithoutUserInput> | AdminLogCreateWithoutUserInput[] | AdminLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdminLogCreateOrConnectWithoutUserInput | AdminLogCreateOrConnectWithoutUserInput[]
    upsert?: AdminLogUpsertWithWhereUniqueWithoutUserInput | AdminLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AdminLogCreateManyUserInputEnvelope
    set?: AdminLogWhereUniqueInput | AdminLogWhereUniqueInput[]
    disconnect?: AdminLogWhereUniqueInput | AdminLogWhereUniqueInput[]
    delete?: AdminLogWhereUniqueInput | AdminLogWhereUniqueInput[]
    connect?: AdminLogWhereUniqueInput | AdminLogWhereUniqueInput[]
    update?: AdminLogUpdateWithWhereUniqueWithoutUserInput | AdminLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AdminLogUpdateManyWithWhereWithoutUserInput | AdminLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AdminLogScalarWhereInput | AdminLogScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type PlayerProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PlayerProfileCreateWithoutUserInput, PlayerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: PlayerProfileCreateOrConnectWithoutUserInput
    upsert?: PlayerProfileUpsertWithoutUserInput
    disconnect?: PlayerProfileWhereInput | boolean
    delete?: PlayerProfileWhereInput | boolean
    connect?: PlayerProfileWhereUniqueInput
    update?: XOR<XOR<PlayerProfileUpdateToOneWithWhereWithoutUserInput, PlayerProfileUpdateWithoutUserInput>, PlayerProfileUncheckedUpdateWithoutUserInput>
  }

  export type AdminLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AdminLogCreateWithoutUserInput, AdminLogUncheckedCreateWithoutUserInput> | AdminLogCreateWithoutUserInput[] | AdminLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdminLogCreateOrConnectWithoutUserInput | AdminLogCreateOrConnectWithoutUserInput[]
    upsert?: AdminLogUpsertWithWhereUniqueWithoutUserInput | AdminLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AdminLogCreateManyUserInputEnvelope
    set?: AdminLogWhereUniqueInput | AdminLogWhereUniqueInput[]
    disconnect?: AdminLogWhereUniqueInput | AdminLogWhereUniqueInput[]
    delete?: AdminLogWhereUniqueInput | AdminLogWhereUniqueInput[]
    connect?: AdminLogWhereUniqueInput | AdminLogWhereUniqueInput[]
    update?: AdminLogUpdateWithWhereUniqueWithoutUserInput | AdminLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AdminLogUpdateManyWithWhereWithoutUserInput | AdminLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AdminLogScalarWhereInput | AdminLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutManagedTeamInput = {
    create?: XOR<UserCreateWithoutManagedTeamInput, UserUncheckedCreateWithoutManagedTeamInput>
    connectOrCreate?: UserCreateOrConnectWithoutManagedTeamInput
    connect?: UserWhereUniqueInput
  }

  export type PlayerProfileCreateNestedManyWithoutTeamInput = {
    create?: XOR<PlayerProfileCreateWithoutTeamInput, PlayerProfileUncheckedCreateWithoutTeamInput> | PlayerProfileCreateWithoutTeamInput[] | PlayerProfileUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PlayerProfileCreateOrConnectWithoutTeamInput | PlayerProfileCreateOrConnectWithoutTeamInput[]
    createMany?: PlayerProfileCreateManyTeamInputEnvelope
    connect?: PlayerProfileWhereUniqueInput | PlayerProfileWhereUniqueInput[]
  }

  export type FixtureCreateNestedManyWithoutHomeTeamInput = {
    create?: XOR<FixtureCreateWithoutHomeTeamInput, FixtureUncheckedCreateWithoutHomeTeamInput> | FixtureCreateWithoutHomeTeamInput[] | FixtureUncheckedCreateWithoutHomeTeamInput[]
    connectOrCreate?: FixtureCreateOrConnectWithoutHomeTeamInput | FixtureCreateOrConnectWithoutHomeTeamInput[]
    createMany?: FixtureCreateManyHomeTeamInputEnvelope
    connect?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
  }

  export type FixtureCreateNestedManyWithoutAwayTeamInput = {
    create?: XOR<FixtureCreateWithoutAwayTeamInput, FixtureUncheckedCreateWithoutAwayTeamInput> | FixtureCreateWithoutAwayTeamInput[] | FixtureUncheckedCreateWithoutAwayTeamInput[]
    connectOrCreate?: FixtureCreateOrConnectWithoutAwayTeamInput | FixtureCreateOrConnectWithoutAwayTeamInput[]
    createMany?: FixtureCreateManyAwayTeamInputEnvelope
    connect?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
  }

  export type TeamStatsCreateNestedOneWithoutTeamInput = {
    create?: XOR<TeamStatsCreateWithoutTeamInput, TeamStatsUncheckedCreateWithoutTeamInput>
    connectOrCreate?: TeamStatsCreateOrConnectWithoutTeamInput
    connect?: TeamStatsWhereUniqueInput
  }

  export type UserUncheckedCreateNestedOneWithoutManagedTeamInput = {
    create?: XOR<UserCreateWithoutManagedTeamInput, UserUncheckedCreateWithoutManagedTeamInput>
    connectOrCreate?: UserCreateOrConnectWithoutManagedTeamInput
    connect?: UserWhereUniqueInput
  }

  export type PlayerProfileUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<PlayerProfileCreateWithoutTeamInput, PlayerProfileUncheckedCreateWithoutTeamInput> | PlayerProfileCreateWithoutTeamInput[] | PlayerProfileUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PlayerProfileCreateOrConnectWithoutTeamInput | PlayerProfileCreateOrConnectWithoutTeamInput[]
    createMany?: PlayerProfileCreateManyTeamInputEnvelope
    connect?: PlayerProfileWhereUniqueInput | PlayerProfileWhereUniqueInput[]
  }

  export type FixtureUncheckedCreateNestedManyWithoutHomeTeamInput = {
    create?: XOR<FixtureCreateWithoutHomeTeamInput, FixtureUncheckedCreateWithoutHomeTeamInput> | FixtureCreateWithoutHomeTeamInput[] | FixtureUncheckedCreateWithoutHomeTeamInput[]
    connectOrCreate?: FixtureCreateOrConnectWithoutHomeTeamInput | FixtureCreateOrConnectWithoutHomeTeamInput[]
    createMany?: FixtureCreateManyHomeTeamInputEnvelope
    connect?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
  }

  export type FixtureUncheckedCreateNestedManyWithoutAwayTeamInput = {
    create?: XOR<FixtureCreateWithoutAwayTeamInput, FixtureUncheckedCreateWithoutAwayTeamInput> | FixtureCreateWithoutAwayTeamInput[] | FixtureUncheckedCreateWithoutAwayTeamInput[]
    connectOrCreate?: FixtureCreateOrConnectWithoutAwayTeamInput | FixtureCreateOrConnectWithoutAwayTeamInput[]
    createMany?: FixtureCreateManyAwayTeamInputEnvelope
    connect?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
  }

  export type TeamStatsUncheckedCreateNestedOneWithoutTeamInput = {
    create?: XOR<TeamStatsCreateWithoutTeamInput, TeamStatsUncheckedCreateWithoutTeamInput>
    connectOrCreate?: TeamStatsCreateOrConnectWithoutTeamInput
    connect?: TeamStatsWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneWithoutManagedTeamNestedInput = {
    create?: XOR<UserCreateWithoutManagedTeamInput, UserUncheckedCreateWithoutManagedTeamInput>
    connectOrCreate?: UserCreateOrConnectWithoutManagedTeamInput
    upsert?: UserUpsertWithoutManagedTeamInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutManagedTeamInput, UserUpdateWithoutManagedTeamInput>, UserUncheckedUpdateWithoutManagedTeamInput>
  }

  export type PlayerProfileUpdateManyWithoutTeamNestedInput = {
    create?: XOR<PlayerProfileCreateWithoutTeamInput, PlayerProfileUncheckedCreateWithoutTeamInput> | PlayerProfileCreateWithoutTeamInput[] | PlayerProfileUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PlayerProfileCreateOrConnectWithoutTeamInput | PlayerProfileCreateOrConnectWithoutTeamInput[]
    upsert?: PlayerProfileUpsertWithWhereUniqueWithoutTeamInput | PlayerProfileUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: PlayerProfileCreateManyTeamInputEnvelope
    set?: PlayerProfileWhereUniqueInput | PlayerProfileWhereUniqueInput[]
    disconnect?: PlayerProfileWhereUniqueInput | PlayerProfileWhereUniqueInput[]
    delete?: PlayerProfileWhereUniqueInput | PlayerProfileWhereUniqueInput[]
    connect?: PlayerProfileWhereUniqueInput | PlayerProfileWhereUniqueInput[]
    update?: PlayerProfileUpdateWithWhereUniqueWithoutTeamInput | PlayerProfileUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: PlayerProfileUpdateManyWithWhereWithoutTeamInput | PlayerProfileUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: PlayerProfileScalarWhereInput | PlayerProfileScalarWhereInput[]
  }

  export type FixtureUpdateManyWithoutHomeTeamNestedInput = {
    create?: XOR<FixtureCreateWithoutHomeTeamInput, FixtureUncheckedCreateWithoutHomeTeamInput> | FixtureCreateWithoutHomeTeamInput[] | FixtureUncheckedCreateWithoutHomeTeamInput[]
    connectOrCreate?: FixtureCreateOrConnectWithoutHomeTeamInput | FixtureCreateOrConnectWithoutHomeTeamInput[]
    upsert?: FixtureUpsertWithWhereUniqueWithoutHomeTeamInput | FixtureUpsertWithWhereUniqueWithoutHomeTeamInput[]
    createMany?: FixtureCreateManyHomeTeamInputEnvelope
    set?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
    disconnect?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
    delete?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
    connect?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
    update?: FixtureUpdateWithWhereUniqueWithoutHomeTeamInput | FixtureUpdateWithWhereUniqueWithoutHomeTeamInput[]
    updateMany?: FixtureUpdateManyWithWhereWithoutHomeTeamInput | FixtureUpdateManyWithWhereWithoutHomeTeamInput[]
    deleteMany?: FixtureScalarWhereInput | FixtureScalarWhereInput[]
  }

  export type FixtureUpdateManyWithoutAwayTeamNestedInput = {
    create?: XOR<FixtureCreateWithoutAwayTeamInput, FixtureUncheckedCreateWithoutAwayTeamInput> | FixtureCreateWithoutAwayTeamInput[] | FixtureUncheckedCreateWithoutAwayTeamInput[]
    connectOrCreate?: FixtureCreateOrConnectWithoutAwayTeamInput | FixtureCreateOrConnectWithoutAwayTeamInput[]
    upsert?: FixtureUpsertWithWhereUniqueWithoutAwayTeamInput | FixtureUpsertWithWhereUniqueWithoutAwayTeamInput[]
    createMany?: FixtureCreateManyAwayTeamInputEnvelope
    set?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
    disconnect?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
    delete?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
    connect?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
    update?: FixtureUpdateWithWhereUniqueWithoutAwayTeamInput | FixtureUpdateWithWhereUniqueWithoutAwayTeamInput[]
    updateMany?: FixtureUpdateManyWithWhereWithoutAwayTeamInput | FixtureUpdateManyWithWhereWithoutAwayTeamInput[]
    deleteMany?: FixtureScalarWhereInput | FixtureScalarWhereInput[]
  }

  export type TeamStatsUpdateOneWithoutTeamNestedInput = {
    create?: XOR<TeamStatsCreateWithoutTeamInput, TeamStatsUncheckedCreateWithoutTeamInput>
    connectOrCreate?: TeamStatsCreateOrConnectWithoutTeamInput
    upsert?: TeamStatsUpsertWithoutTeamInput
    disconnect?: TeamStatsWhereInput | boolean
    delete?: TeamStatsWhereInput | boolean
    connect?: TeamStatsWhereUniqueInput
    update?: XOR<XOR<TeamStatsUpdateToOneWithWhereWithoutTeamInput, TeamStatsUpdateWithoutTeamInput>, TeamStatsUncheckedUpdateWithoutTeamInput>
  }

  export type UserUncheckedUpdateOneWithoutManagedTeamNestedInput = {
    create?: XOR<UserCreateWithoutManagedTeamInput, UserUncheckedCreateWithoutManagedTeamInput>
    connectOrCreate?: UserCreateOrConnectWithoutManagedTeamInput
    upsert?: UserUpsertWithoutManagedTeamInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutManagedTeamInput, UserUpdateWithoutManagedTeamInput>, UserUncheckedUpdateWithoutManagedTeamInput>
  }

  export type PlayerProfileUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<PlayerProfileCreateWithoutTeamInput, PlayerProfileUncheckedCreateWithoutTeamInput> | PlayerProfileCreateWithoutTeamInput[] | PlayerProfileUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PlayerProfileCreateOrConnectWithoutTeamInput | PlayerProfileCreateOrConnectWithoutTeamInput[]
    upsert?: PlayerProfileUpsertWithWhereUniqueWithoutTeamInput | PlayerProfileUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: PlayerProfileCreateManyTeamInputEnvelope
    set?: PlayerProfileWhereUniqueInput | PlayerProfileWhereUniqueInput[]
    disconnect?: PlayerProfileWhereUniqueInput | PlayerProfileWhereUniqueInput[]
    delete?: PlayerProfileWhereUniqueInput | PlayerProfileWhereUniqueInput[]
    connect?: PlayerProfileWhereUniqueInput | PlayerProfileWhereUniqueInput[]
    update?: PlayerProfileUpdateWithWhereUniqueWithoutTeamInput | PlayerProfileUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: PlayerProfileUpdateManyWithWhereWithoutTeamInput | PlayerProfileUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: PlayerProfileScalarWhereInput | PlayerProfileScalarWhereInput[]
  }

  export type FixtureUncheckedUpdateManyWithoutHomeTeamNestedInput = {
    create?: XOR<FixtureCreateWithoutHomeTeamInput, FixtureUncheckedCreateWithoutHomeTeamInput> | FixtureCreateWithoutHomeTeamInput[] | FixtureUncheckedCreateWithoutHomeTeamInput[]
    connectOrCreate?: FixtureCreateOrConnectWithoutHomeTeamInput | FixtureCreateOrConnectWithoutHomeTeamInput[]
    upsert?: FixtureUpsertWithWhereUniqueWithoutHomeTeamInput | FixtureUpsertWithWhereUniqueWithoutHomeTeamInput[]
    createMany?: FixtureCreateManyHomeTeamInputEnvelope
    set?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
    disconnect?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
    delete?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
    connect?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
    update?: FixtureUpdateWithWhereUniqueWithoutHomeTeamInput | FixtureUpdateWithWhereUniqueWithoutHomeTeamInput[]
    updateMany?: FixtureUpdateManyWithWhereWithoutHomeTeamInput | FixtureUpdateManyWithWhereWithoutHomeTeamInput[]
    deleteMany?: FixtureScalarWhereInput | FixtureScalarWhereInput[]
  }

  export type FixtureUncheckedUpdateManyWithoutAwayTeamNestedInput = {
    create?: XOR<FixtureCreateWithoutAwayTeamInput, FixtureUncheckedCreateWithoutAwayTeamInput> | FixtureCreateWithoutAwayTeamInput[] | FixtureUncheckedCreateWithoutAwayTeamInput[]
    connectOrCreate?: FixtureCreateOrConnectWithoutAwayTeamInput | FixtureCreateOrConnectWithoutAwayTeamInput[]
    upsert?: FixtureUpsertWithWhereUniqueWithoutAwayTeamInput | FixtureUpsertWithWhereUniqueWithoutAwayTeamInput[]
    createMany?: FixtureCreateManyAwayTeamInputEnvelope
    set?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
    disconnect?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
    delete?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
    connect?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
    update?: FixtureUpdateWithWhereUniqueWithoutAwayTeamInput | FixtureUpdateWithWhereUniqueWithoutAwayTeamInput[]
    updateMany?: FixtureUpdateManyWithWhereWithoutAwayTeamInput | FixtureUpdateManyWithWhereWithoutAwayTeamInput[]
    deleteMany?: FixtureScalarWhereInput | FixtureScalarWhereInput[]
  }

  export type TeamStatsUncheckedUpdateOneWithoutTeamNestedInput = {
    create?: XOR<TeamStatsCreateWithoutTeamInput, TeamStatsUncheckedCreateWithoutTeamInput>
    connectOrCreate?: TeamStatsCreateOrConnectWithoutTeamInput
    upsert?: TeamStatsUpsertWithoutTeamInput
    disconnect?: TeamStatsWhereInput | boolean
    delete?: TeamStatsWhereInput | boolean
    connect?: TeamStatsWhereUniqueInput
    update?: XOR<XOR<TeamStatsUpdateToOneWithWhereWithoutTeamInput, TeamStatsUpdateWithoutTeamInput>, TeamStatsUncheckedUpdateWithoutTeamInput>
  }

  export type UserCreateNestedOneWithoutPlayerProfileInput = {
    create?: XOR<UserCreateWithoutPlayerProfileInput, UserUncheckedCreateWithoutPlayerProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlayerProfileInput
    connect?: UserWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutPlayersInput = {
    create?: XOR<TeamCreateWithoutPlayersInput, TeamUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutPlayersInput
    connect?: TeamWhereUniqueInput
  }

  export type MatchPlayerLogCreateNestedManyWithoutPlayerInput = {
    create?: XOR<MatchPlayerLogCreateWithoutPlayerInput, MatchPlayerLogUncheckedCreateWithoutPlayerInput> | MatchPlayerLogCreateWithoutPlayerInput[] | MatchPlayerLogUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: MatchPlayerLogCreateOrConnectWithoutPlayerInput | MatchPlayerLogCreateOrConnectWithoutPlayerInput[]
    createMany?: MatchPlayerLogCreateManyPlayerInputEnvelope
    connect?: MatchPlayerLogWhereUniqueInput | MatchPlayerLogWhereUniqueInput[]
  }

  export type PlayerStatsCreateNestedOneWithoutPlayerInput = {
    create?: XOR<PlayerStatsCreateWithoutPlayerInput, PlayerStatsUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: PlayerStatsCreateOrConnectWithoutPlayerInput
    connect?: PlayerStatsWhereUniqueInput
  }

  export type MatchPlayerLogUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<MatchPlayerLogCreateWithoutPlayerInput, MatchPlayerLogUncheckedCreateWithoutPlayerInput> | MatchPlayerLogCreateWithoutPlayerInput[] | MatchPlayerLogUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: MatchPlayerLogCreateOrConnectWithoutPlayerInput | MatchPlayerLogCreateOrConnectWithoutPlayerInput[]
    createMany?: MatchPlayerLogCreateManyPlayerInputEnvelope
    connect?: MatchPlayerLogWhereUniqueInput | MatchPlayerLogWhereUniqueInput[]
  }

  export type PlayerStatsUncheckedCreateNestedOneWithoutPlayerInput = {
    create?: XOR<PlayerStatsCreateWithoutPlayerInput, PlayerStatsUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: PlayerStatsCreateOrConnectWithoutPlayerInput
    connect?: PlayerStatsWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPlayerProfileNestedInput = {
    create?: XOR<UserCreateWithoutPlayerProfileInput, UserUncheckedCreateWithoutPlayerProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlayerProfileInput
    upsert?: UserUpsertWithoutPlayerProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPlayerProfileInput, UserUpdateWithoutPlayerProfileInput>, UserUncheckedUpdateWithoutPlayerProfileInput>
  }

  export type TeamUpdateOneRequiredWithoutPlayersNestedInput = {
    create?: XOR<TeamCreateWithoutPlayersInput, TeamUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutPlayersInput
    upsert?: TeamUpsertWithoutPlayersInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutPlayersInput, TeamUpdateWithoutPlayersInput>, TeamUncheckedUpdateWithoutPlayersInput>
  }

  export type MatchPlayerLogUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<MatchPlayerLogCreateWithoutPlayerInput, MatchPlayerLogUncheckedCreateWithoutPlayerInput> | MatchPlayerLogCreateWithoutPlayerInput[] | MatchPlayerLogUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: MatchPlayerLogCreateOrConnectWithoutPlayerInput | MatchPlayerLogCreateOrConnectWithoutPlayerInput[]
    upsert?: MatchPlayerLogUpsertWithWhereUniqueWithoutPlayerInput | MatchPlayerLogUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: MatchPlayerLogCreateManyPlayerInputEnvelope
    set?: MatchPlayerLogWhereUniqueInput | MatchPlayerLogWhereUniqueInput[]
    disconnect?: MatchPlayerLogWhereUniqueInput | MatchPlayerLogWhereUniqueInput[]
    delete?: MatchPlayerLogWhereUniqueInput | MatchPlayerLogWhereUniqueInput[]
    connect?: MatchPlayerLogWhereUniqueInput | MatchPlayerLogWhereUniqueInput[]
    update?: MatchPlayerLogUpdateWithWhereUniqueWithoutPlayerInput | MatchPlayerLogUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: MatchPlayerLogUpdateManyWithWhereWithoutPlayerInput | MatchPlayerLogUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: MatchPlayerLogScalarWhereInput | MatchPlayerLogScalarWhereInput[]
  }

  export type PlayerStatsUpdateOneWithoutPlayerNestedInput = {
    create?: XOR<PlayerStatsCreateWithoutPlayerInput, PlayerStatsUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: PlayerStatsCreateOrConnectWithoutPlayerInput
    upsert?: PlayerStatsUpsertWithoutPlayerInput
    disconnect?: PlayerStatsWhereInput | boolean
    delete?: PlayerStatsWhereInput | boolean
    connect?: PlayerStatsWhereUniqueInput
    update?: XOR<XOR<PlayerStatsUpdateToOneWithWhereWithoutPlayerInput, PlayerStatsUpdateWithoutPlayerInput>, PlayerStatsUncheckedUpdateWithoutPlayerInput>
  }

  export type MatchPlayerLogUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<MatchPlayerLogCreateWithoutPlayerInput, MatchPlayerLogUncheckedCreateWithoutPlayerInput> | MatchPlayerLogCreateWithoutPlayerInput[] | MatchPlayerLogUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: MatchPlayerLogCreateOrConnectWithoutPlayerInput | MatchPlayerLogCreateOrConnectWithoutPlayerInput[]
    upsert?: MatchPlayerLogUpsertWithWhereUniqueWithoutPlayerInput | MatchPlayerLogUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: MatchPlayerLogCreateManyPlayerInputEnvelope
    set?: MatchPlayerLogWhereUniqueInput | MatchPlayerLogWhereUniqueInput[]
    disconnect?: MatchPlayerLogWhereUniqueInput | MatchPlayerLogWhereUniqueInput[]
    delete?: MatchPlayerLogWhereUniqueInput | MatchPlayerLogWhereUniqueInput[]
    connect?: MatchPlayerLogWhereUniqueInput | MatchPlayerLogWhereUniqueInput[]
    update?: MatchPlayerLogUpdateWithWhereUniqueWithoutPlayerInput | MatchPlayerLogUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: MatchPlayerLogUpdateManyWithWhereWithoutPlayerInput | MatchPlayerLogUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: MatchPlayerLogScalarWhereInput | MatchPlayerLogScalarWhereInput[]
  }

  export type PlayerStatsUncheckedUpdateOneWithoutPlayerNestedInput = {
    create?: XOR<PlayerStatsCreateWithoutPlayerInput, PlayerStatsUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: PlayerStatsCreateOrConnectWithoutPlayerInput
    upsert?: PlayerStatsUpsertWithoutPlayerInput
    disconnect?: PlayerStatsWhereInput | boolean
    delete?: PlayerStatsWhereInput | boolean
    connect?: PlayerStatsWhereUniqueInput
    update?: XOR<XOR<PlayerStatsUpdateToOneWithWhereWithoutPlayerInput, PlayerStatsUpdateWithoutPlayerInput>, PlayerStatsUncheckedUpdateWithoutPlayerInput>
  }

  export type TeamCreateNestedOneWithoutTeamStatsInput = {
    create?: XOR<TeamCreateWithoutTeamStatsInput, TeamUncheckedCreateWithoutTeamStatsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutTeamStatsInput
    connect?: TeamWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TeamUpdateOneRequiredWithoutTeamStatsNestedInput = {
    create?: XOR<TeamCreateWithoutTeamStatsInput, TeamUncheckedCreateWithoutTeamStatsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutTeamStatsInput
    upsert?: TeamUpsertWithoutTeamStatsInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutTeamStatsInput, TeamUpdateWithoutTeamStatsInput>, TeamUncheckedUpdateWithoutTeamStatsInput>
  }

  export type PlayerProfileCreateNestedOneWithoutPlayerStatsInput = {
    create?: XOR<PlayerProfileCreateWithoutPlayerStatsInput, PlayerProfileUncheckedCreateWithoutPlayerStatsInput>
    connectOrCreate?: PlayerProfileCreateOrConnectWithoutPlayerStatsInput
    connect?: PlayerProfileWhereUniqueInput
  }

  export type PlayerProfileUpdateOneRequiredWithoutPlayerStatsNestedInput = {
    create?: XOR<PlayerProfileCreateWithoutPlayerStatsInput, PlayerProfileUncheckedCreateWithoutPlayerStatsInput>
    connectOrCreate?: PlayerProfileCreateOrConnectWithoutPlayerStatsInput
    upsert?: PlayerProfileUpsertWithoutPlayerStatsInput
    connect?: PlayerProfileWhereUniqueInput
    update?: XOR<XOR<PlayerProfileUpdateToOneWithWhereWithoutPlayerStatsInput, PlayerProfileUpdateWithoutPlayerStatsInput>, PlayerProfileUncheckedUpdateWithoutPlayerStatsInput>
  }

  export type TeamCreateNestedOneWithoutHomeFixturesInput = {
    create?: XOR<TeamCreateWithoutHomeFixturesInput, TeamUncheckedCreateWithoutHomeFixturesInput>
    connectOrCreate?: TeamCreateOrConnectWithoutHomeFixturesInput
    connect?: TeamWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutAwayFixturesInput = {
    create?: XOR<TeamCreateWithoutAwayFixturesInput, TeamUncheckedCreateWithoutAwayFixturesInput>
    connectOrCreate?: TeamCreateOrConnectWithoutAwayFixturesInput
    connect?: TeamWhereUniqueInput
  }

  export type MatchLogCreateNestedManyWithoutFixtureInput = {
    create?: XOR<MatchLogCreateWithoutFixtureInput, MatchLogUncheckedCreateWithoutFixtureInput> | MatchLogCreateWithoutFixtureInput[] | MatchLogUncheckedCreateWithoutFixtureInput[]
    connectOrCreate?: MatchLogCreateOrConnectWithoutFixtureInput | MatchLogCreateOrConnectWithoutFixtureInput[]
    createMany?: MatchLogCreateManyFixtureInputEnvelope
    connect?: MatchLogWhereUniqueInput | MatchLogWhereUniqueInput[]
  }

  export type MatchFormationCreateNestedOneWithoutFixtureInput = {
    create?: XOR<MatchFormationCreateWithoutFixtureInput, MatchFormationUncheckedCreateWithoutFixtureInput>
    connectOrCreate?: MatchFormationCreateOrConnectWithoutFixtureInput
    connect?: MatchFormationWhereUniqueInput
  }

  export type TournamentCreateNestedOneWithoutFixturesInput = {
    create?: XOR<TournamentCreateWithoutFixturesInput, TournamentUncheckedCreateWithoutFixturesInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutFixturesInput
    connect?: TournamentWhereUniqueInput
  }

  export type MatchLogUncheckedCreateNestedManyWithoutFixtureInput = {
    create?: XOR<MatchLogCreateWithoutFixtureInput, MatchLogUncheckedCreateWithoutFixtureInput> | MatchLogCreateWithoutFixtureInput[] | MatchLogUncheckedCreateWithoutFixtureInput[]
    connectOrCreate?: MatchLogCreateOrConnectWithoutFixtureInput | MatchLogCreateOrConnectWithoutFixtureInput[]
    createMany?: MatchLogCreateManyFixtureInputEnvelope
    connect?: MatchLogWhereUniqueInput | MatchLogWhereUniqueInput[]
  }

  export type MatchFormationUncheckedCreateNestedOneWithoutFixtureInput = {
    create?: XOR<MatchFormationCreateWithoutFixtureInput, MatchFormationUncheckedCreateWithoutFixtureInput>
    connectOrCreate?: MatchFormationCreateOrConnectWithoutFixtureInput
    connect?: MatchFormationWhereUniqueInput
  }

  export type EnumMatchStatusFieldUpdateOperationsInput = {
    set?: $Enums.MatchStatus
  }

  export type TeamUpdateOneRequiredWithoutHomeFixturesNestedInput = {
    create?: XOR<TeamCreateWithoutHomeFixturesInput, TeamUncheckedCreateWithoutHomeFixturesInput>
    connectOrCreate?: TeamCreateOrConnectWithoutHomeFixturesInput
    upsert?: TeamUpsertWithoutHomeFixturesInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutHomeFixturesInput, TeamUpdateWithoutHomeFixturesInput>, TeamUncheckedUpdateWithoutHomeFixturesInput>
  }

  export type TeamUpdateOneRequiredWithoutAwayFixturesNestedInput = {
    create?: XOR<TeamCreateWithoutAwayFixturesInput, TeamUncheckedCreateWithoutAwayFixturesInput>
    connectOrCreate?: TeamCreateOrConnectWithoutAwayFixturesInput
    upsert?: TeamUpsertWithoutAwayFixturesInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutAwayFixturesInput, TeamUpdateWithoutAwayFixturesInput>, TeamUncheckedUpdateWithoutAwayFixturesInput>
  }

  export type MatchLogUpdateManyWithoutFixtureNestedInput = {
    create?: XOR<MatchLogCreateWithoutFixtureInput, MatchLogUncheckedCreateWithoutFixtureInput> | MatchLogCreateWithoutFixtureInput[] | MatchLogUncheckedCreateWithoutFixtureInput[]
    connectOrCreate?: MatchLogCreateOrConnectWithoutFixtureInput | MatchLogCreateOrConnectWithoutFixtureInput[]
    upsert?: MatchLogUpsertWithWhereUniqueWithoutFixtureInput | MatchLogUpsertWithWhereUniqueWithoutFixtureInput[]
    createMany?: MatchLogCreateManyFixtureInputEnvelope
    set?: MatchLogWhereUniqueInput | MatchLogWhereUniqueInput[]
    disconnect?: MatchLogWhereUniqueInput | MatchLogWhereUniqueInput[]
    delete?: MatchLogWhereUniqueInput | MatchLogWhereUniqueInput[]
    connect?: MatchLogWhereUniqueInput | MatchLogWhereUniqueInput[]
    update?: MatchLogUpdateWithWhereUniqueWithoutFixtureInput | MatchLogUpdateWithWhereUniqueWithoutFixtureInput[]
    updateMany?: MatchLogUpdateManyWithWhereWithoutFixtureInput | MatchLogUpdateManyWithWhereWithoutFixtureInput[]
    deleteMany?: MatchLogScalarWhereInput | MatchLogScalarWhereInput[]
  }

  export type MatchFormationUpdateOneWithoutFixtureNestedInput = {
    create?: XOR<MatchFormationCreateWithoutFixtureInput, MatchFormationUncheckedCreateWithoutFixtureInput>
    connectOrCreate?: MatchFormationCreateOrConnectWithoutFixtureInput
    upsert?: MatchFormationUpsertWithoutFixtureInput
    disconnect?: MatchFormationWhereInput | boolean
    delete?: MatchFormationWhereInput | boolean
    connect?: MatchFormationWhereUniqueInput
    update?: XOR<XOR<MatchFormationUpdateToOneWithWhereWithoutFixtureInput, MatchFormationUpdateWithoutFixtureInput>, MatchFormationUncheckedUpdateWithoutFixtureInput>
  }

  export type TournamentUpdateOneWithoutFixturesNestedInput = {
    create?: XOR<TournamentCreateWithoutFixturesInput, TournamentUncheckedCreateWithoutFixturesInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutFixturesInput
    upsert?: TournamentUpsertWithoutFixturesInput
    disconnect?: TournamentWhereInput | boolean
    delete?: TournamentWhereInput | boolean
    connect?: TournamentWhereUniqueInput
    update?: XOR<XOR<TournamentUpdateToOneWithWhereWithoutFixturesInput, TournamentUpdateWithoutFixturesInput>, TournamentUncheckedUpdateWithoutFixturesInput>
  }

  export type MatchLogUncheckedUpdateManyWithoutFixtureNestedInput = {
    create?: XOR<MatchLogCreateWithoutFixtureInput, MatchLogUncheckedCreateWithoutFixtureInput> | MatchLogCreateWithoutFixtureInput[] | MatchLogUncheckedCreateWithoutFixtureInput[]
    connectOrCreate?: MatchLogCreateOrConnectWithoutFixtureInput | MatchLogCreateOrConnectWithoutFixtureInput[]
    upsert?: MatchLogUpsertWithWhereUniqueWithoutFixtureInput | MatchLogUpsertWithWhereUniqueWithoutFixtureInput[]
    createMany?: MatchLogCreateManyFixtureInputEnvelope
    set?: MatchLogWhereUniqueInput | MatchLogWhereUniqueInput[]
    disconnect?: MatchLogWhereUniqueInput | MatchLogWhereUniqueInput[]
    delete?: MatchLogWhereUniqueInput | MatchLogWhereUniqueInput[]
    connect?: MatchLogWhereUniqueInput | MatchLogWhereUniqueInput[]
    update?: MatchLogUpdateWithWhereUniqueWithoutFixtureInput | MatchLogUpdateWithWhereUniqueWithoutFixtureInput[]
    updateMany?: MatchLogUpdateManyWithWhereWithoutFixtureInput | MatchLogUpdateManyWithWhereWithoutFixtureInput[]
    deleteMany?: MatchLogScalarWhereInput | MatchLogScalarWhereInput[]
  }

  export type MatchFormationUncheckedUpdateOneWithoutFixtureNestedInput = {
    create?: XOR<MatchFormationCreateWithoutFixtureInput, MatchFormationUncheckedCreateWithoutFixtureInput>
    connectOrCreate?: MatchFormationCreateOrConnectWithoutFixtureInput
    upsert?: MatchFormationUpsertWithoutFixtureInput
    disconnect?: MatchFormationWhereInput | boolean
    delete?: MatchFormationWhereInput | boolean
    connect?: MatchFormationWhereUniqueInput
    update?: XOR<XOR<MatchFormationUpdateToOneWithWhereWithoutFixtureInput, MatchFormationUpdateWithoutFixtureInput>, MatchFormationUncheckedUpdateWithoutFixtureInput>
  }

  export type FixtureCreateNestedOneWithoutFormationInput = {
    create?: XOR<FixtureCreateWithoutFormationInput, FixtureUncheckedCreateWithoutFormationInput>
    connectOrCreate?: FixtureCreateOrConnectWithoutFormationInput
    connect?: FixtureWhereUniqueInput
  }

  export type FixtureUpdateOneRequiredWithoutFormationNestedInput = {
    create?: XOR<FixtureCreateWithoutFormationInput, FixtureUncheckedCreateWithoutFormationInput>
    connectOrCreate?: FixtureCreateOrConnectWithoutFormationInput
    upsert?: FixtureUpsertWithoutFormationInput
    connect?: FixtureWhereUniqueInput
    update?: XOR<XOR<FixtureUpdateToOneWithWhereWithoutFormationInput, FixtureUpdateWithoutFormationInput>, FixtureUncheckedUpdateWithoutFormationInput>
  }

  export type FixtureCreateNestedOneWithoutMatchLogsInput = {
    create?: XOR<FixtureCreateWithoutMatchLogsInput, FixtureUncheckedCreateWithoutMatchLogsInput>
    connectOrCreate?: FixtureCreateOrConnectWithoutMatchLogsInput
    connect?: FixtureWhereUniqueInput
  }

  export type MatchPlayerLogCreateNestedManyWithoutLogInput = {
    create?: XOR<MatchPlayerLogCreateWithoutLogInput, MatchPlayerLogUncheckedCreateWithoutLogInput> | MatchPlayerLogCreateWithoutLogInput[] | MatchPlayerLogUncheckedCreateWithoutLogInput[]
    connectOrCreate?: MatchPlayerLogCreateOrConnectWithoutLogInput | MatchPlayerLogCreateOrConnectWithoutLogInput[]
    createMany?: MatchPlayerLogCreateManyLogInputEnvelope
    connect?: MatchPlayerLogWhereUniqueInput | MatchPlayerLogWhereUniqueInput[]
  }

  export type MatchPlayerLogUncheckedCreateNestedManyWithoutLogInput = {
    create?: XOR<MatchPlayerLogCreateWithoutLogInput, MatchPlayerLogUncheckedCreateWithoutLogInput> | MatchPlayerLogCreateWithoutLogInput[] | MatchPlayerLogUncheckedCreateWithoutLogInput[]
    connectOrCreate?: MatchPlayerLogCreateOrConnectWithoutLogInput | MatchPlayerLogCreateOrConnectWithoutLogInput[]
    createMany?: MatchPlayerLogCreateManyLogInputEnvelope
    connect?: MatchPlayerLogWhereUniqueInput | MatchPlayerLogWhereUniqueInput[]
  }

  export type FixtureUpdateOneRequiredWithoutMatchLogsNestedInput = {
    create?: XOR<FixtureCreateWithoutMatchLogsInput, FixtureUncheckedCreateWithoutMatchLogsInput>
    connectOrCreate?: FixtureCreateOrConnectWithoutMatchLogsInput
    upsert?: FixtureUpsertWithoutMatchLogsInput
    connect?: FixtureWhereUniqueInput
    update?: XOR<XOR<FixtureUpdateToOneWithWhereWithoutMatchLogsInput, FixtureUpdateWithoutMatchLogsInput>, FixtureUncheckedUpdateWithoutMatchLogsInput>
  }

  export type MatchPlayerLogUpdateManyWithoutLogNestedInput = {
    create?: XOR<MatchPlayerLogCreateWithoutLogInput, MatchPlayerLogUncheckedCreateWithoutLogInput> | MatchPlayerLogCreateWithoutLogInput[] | MatchPlayerLogUncheckedCreateWithoutLogInput[]
    connectOrCreate?: MatchPlayerLogCreateOrConnectWithoutLogInput | MatchPlayerLogCreateOrConnectWithoutLogInput[]
    upsert?: MatchPlayerLogUpsertWithWhereUniqueWithoutLogInput | MatchPlayerLogUpsertWithWhereUniqueWithoutLogInput[]
    createMany?: MatchPlayerLogCreateManyLogInputEnvelope
    set?: MatchPlayerLogWhereUniqueInput | MatchPlayerLogWhereUniqueInput[]
    disconnect?: MatchPlayerLogWhereUniqueInput | MatchPlayerLogWhereUniqueInput[]
    delete?: MatchPlayerLogWhereUniqueInput | MatchPlayerLogWhereUniqueInput[]
    connect?: MatchPlayerLogWhereUniqueInput | MatchPlayerLogWhereUniqueInput[]
    update?: MatchPlayerLogUpdateWithWhereUniqueWithoutLogInput | MatchPlayerLogUpdateWithWhereUniqueWithoutLogInput[]
    updateMany?: MatchPlayerLogUpdateManyWithWhereWithoutLogInput | MatchPlayerLogUpdateManyWithWhereWithoutLogInput[]
    deleteMany?: MatchPlayerLogScalarWhereInput | MatchPlayerLogScalarWhereInput[]
  }

  export type MatchPlayerLogUncheckedUpdateManyWithoutLogNestedInput = {
    create?: XOR<MatchPlayerLogCreateWithoutLogInput, MatchPlayerLogUncheckedCreateWithoutLogInput> | MatchPlayerLogCreateWithoutLogInput[] | MatchPlayerLogUncheckedCreateWithoutLogInput[]
    connectOrCreate?: MatchPlayerLogCreateOrConnectWithoutLogInput | MatchPlayerLogCreateOrConnectWithoutLogInput[]
    upsert?: MatchPlayerLogUpsertWithWhereUniqueWithoutLogInput | MatchPlayerLogUpsertWithWhereUniqueWithoutLogInput[]
    createMany?: MatchPlayerLogCreateManyLogInputEnvelope
    set?: MatchPlayerLogWhereUniqueInput | MatchPlayerLogWhereUniqueInput[]
    disconnect?: MatchPlayerLogWhereUniqueInput | MatchPlayerLogWhereUniqueInput[]
    delete?: MatchPlayerLogWhereUniqueInput | MatchPlayerLogWhereUniqueInput[]
    connect?: MatchPlayerLogWhereUniqueInput | MatchPlayerLogWhereUniqueInput[]
    update?: MatchPlayerLogUpdateWithWhereUniqueWithoutLogInput | MatchPlayerLogUpdateWithWhereUniqueWithoutLogInput[]
    updateMany?: MatchPlayerLogUpdateManyWithWhereWithoutLogInput | MatchPlayerLogUpdateManyWithWhereWithoutLogInput[]
    deleteMany?: MatchPlayerLogScalarWhereInput | MatchPlayerLogScalarWhereInput[]
  }

  export type MatchLogCreateNestedOneWithoutPlayerLogsInput = {
    create?: XOR<MatchLogCreateWithoutPlayerLogsInput, MatchLogUncheckedCreateWithoutPlayerLogsInput>
    connectOrCreate?: MatchLogCreateOrConnectWithoutPlayerLogsInput
    connect?: MatchLogWhereUniqueInput
  }

  export type PlayerProfileCreateNestedOneWithoutMatchLogsInput = {
    create?: XOR<PlayerProfileCreateWithoutMatchLogsInput, PlayerProfileUncheckedCreateWithoutMatchLogsInput>
    connectOrCreate?: PlayerProfileCreateOrConnectWithoutMatchLogsInput
    connect?: PlayerProfileWhereUniqueInput
  }

  export type EnumLogTypeFieldUpdateOperationsInput = {
    set?: $Enums.LogType
  }

  export type MatchLogUpdateOneRequiredWithoutPlayerLogsNestedInput = {
    create?: XOR<MatchLogCreateWithoutPlayerLogsInput, MatchLogUncheckedCreateWithoutPlayerLogsInput>
    connectOrCreate?: MatchLogCreateOrConnectWithoutPlayerLogsInput
    upsert?: MatchLogUpsertWithoutPlayerLogsInput
    connect?: MatchLogWhereUniqueInput
    update?: XOR<XOR<MatchLogUpdateToOneWithWhereWithoutPlayerLogsInput, MatchLogUpdateWithoutPlayerLogsInput>, MatchLogUncheckedUpdateWithoutPlayerLogsInput>
  }

  export type PlayerProfileUpdateOneRequiredWithoutMatchLogsNestedInput = {
    create?: XOR<PlayerProfileCreateWithoutMatchLogsInput, PlayerProfileUncheckedCreateWithoutMatchLogsInput>
    connectOrCreate?: PlayerProfileCreateOrConnectWithoutMatchLogsInput
    upsert?: PlayerProfileUpsertWithoutMatchLogsInput
    connect?: PlayerProfileWhereUniqueInput
    update?: XOR<XOR<PlayerProfileUpdateToOneWithWhereWithoutMatchLogsInput, PlayerProfileUpdateWithoutMatchLogsInput>, PlayerProfileUncheckedUpdateWithoutMatchLogsInput>
  }

  export type FixtureCreateNestedManyWithoutTournamentInput = {
    create?: XOR<FixtureCreateWithoutTournamentInput, FixtureUncheckedCreateWithoutTournamentInput> | FixtureCreateWithoutTournamentInput[] | FixtureUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: FixtureCreateOrConnectWithoutTournamentInput | FixtureCreateOrConnectWithoutTournamentInput[]
    createMany?: FixtureCreateManyTournamentInputEnvelope
    connect?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
  }

  export type FixtureUncheckedCreateNestedManyWithoutTournamentInput = {
    create?: XOR<FixtureCreateWithoutTournamentInput, FixtureUncheckedCreateWithoutTournamentInput> | FixtureCreateWithoutTournamentInput[] | FixtureUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: FixtureCreateOrConnectWithoutTournamentInput | FixtureCreateOrConnectWithoutTournamentInput[]
    createMany?: FixtureCreateManyTournamentInputEnvelope
    connect?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
  }

  export type FixtureUpdateManyWithoutTournamentNestedInput = {
    create?: XOR<FixtureCreateWithoutTournamentInput, FixtureUncheckedCreateWithoutTournamentInput> | FixtureCreateWithoutTournamentInput[] | FixtureUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: FixtureCreateOrConnectWithoutTournamentInput | FixtureCreateOrConnectWithoutTournamentInput[]
    upsert?: FixtureUpsertWithWhereUniqueWithoutTournamentInput | FixtureUpsertWithWhereUniqueWithoutTournamentInput[]
    createMany?: FixtureCreateManyTournamentInputEnvelope
    set?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
    disconnect?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
    delete?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
    connect?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
    update?: FixtureUpdateWithWhereUniqueWithoutTournamentInput | FixtureUpdateWithWhereUniqueWithoutTournamentInput[]
    updateMany?: FixtureUpdateManyWithWhereWithoutTournamentInput | FixtureUpdateManyWithWhereWithoutTournamentInput[]
    deleteMany?: FixtureScalarWhereInput | FixtureScalarWhereInput[]
  }

  export type FixtureUncheckedUpdateManyWithoutTournamentNestedInput = {
    create?: XOR<FixtureCreateWithoutTournamentInput, FixtureUncheckedCreateWithoutTournamentInput> | FixtureCreateWithoutTournamentInput[] | FixtureUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: FixtureCreateOrConnectWithoutTournamentInput | FixtureCreateOrConnectWithoutTournamentInput[]
    upsert?: FixtureUpsertWithWhereUniqueWithoutTournamentInput | FixtureUpsertWithWhereUniqueWithoutTournamentInput[]
    createMany?: FixtureCreateManyTournamentInputEnvelope
    set?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
    disconnect?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
    delete?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
    connect?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
    update?: FixtureUpdateWithWhereUniqueWithoutTournamentInput | FixtureUpdateWithWhereUniqueWithoutTournamentInput[]
    updateMany?: FixtureUpdateManyWithWhereWithoutTournamentInput | FixtureUpdateManyWithWhereWithoutTournamentInput[]
    deleteMany?: FixtureScalarWhereInput | FixtureScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAdminLogsInput = {
    create?: XOR<UserCreateWithoutAdminLogsInput, UserUncheckedCreateWithoutAdminLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAdminLogsNestedInput = {
    create?: XOR<UserCreateWithoutAdminLogsInput, UserUncheckedCreateWithoutAdminLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminLogsInput
    upsert?: UserUpsertWithoutAdminLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdminLogsInput, UserUpdateWithoutAdminLogsInput>, UserUncheckedUpdateWithoutAdminLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumMatchStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | EnumMatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchStatusFilter<$PrismaModel> | $Enums.MatchStatus
  }

  export type NestedEnumMatchStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | EnumMatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMatchStatusWithAggregatesFilter<$PrismaModel> | $Enums.MatchStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMatchStatusFilter<$PrismaModel>
    _max?: NestedEnumMatchStatusFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumLogTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LogType | EnumLogTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LogType[] | ListEnumLogTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LogType[] | ListEnumLogTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLogTypeFilter<$PrismaModel> | $Enums.LogType
  }

  export type NestedEnumLogTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LogType | EnumLogTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LogType[] | ListEnumLogTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LogType[] | ListEnumLogTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLogTypeWithAggregatesFilter<$PrismaModel> | $Enums.LogType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLogTypeFilter<$PrismaModel>
    _max?: NestedEnumLogTypeFilter<$PrismaModel>
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TeamCreateWithoutCoachInput = {
    id?: string
    name: string
    affiliationFeePaid?: boolean
    createdAt?: Date | string
    players?: PlayerProfileCreateNestedManyWithoutTeamInput
    homeFixtures?: FixtureCreateNestedManyWithoutHomeTeamInput
    awayFixtures?: FixtureCreateNestedManyWithoutAwayTeamInput
    teamStats?: TeamStatsCreateNestedOneWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutCoachInput = {
    id?: string
    name: string
    affiliationFeePaid?: boolean
    createdAt?: Date | string
    players?: PlayerProfileUncheckedCreateNestedManyWithoutTeamInput
    homeFixtures?: FixtureUncheckedCreateNestedManyWithoutHomeTeamInput
    awayFixtures?: FixtureUncheckedCreateNestedManyWithoutAwayTeamInput
    teamStats?: TeamStatsUncheckedCreateNestedOneWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutCoachInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutCoachInput, TeamUncheckedCreateWithoutCoachInput>
  }

  export type PlayerProfileCreateWithoutUserInput = {
    id?: string
    jerseyNumber?: number | null
    position?: string | null
    isCaptain?: boolean
    team: TeamCreateNestedOneWithoutPlayersInput
    matchLogs?: MatchPlayerLogCreateNestedManyWithoutPlayerInput
    playerStats?: PlayerStatsCreateNestedOneWithoutPlayerInput
  }

  export type PlayerProfileUncheckedCreateWithoutUserInput = {
    id?: string
    jerseyNumber?: number | null
    position?: string | null
    isCaptain?: boolean
    teamId: string
    matchLogs?: MatchPlayerLogUncheckedCreateNestedManyWithoutPlayerInput
    playerStats?: PlayerStatsUncheckedCreateNestedOneWithoutPlayerInput
  }

  export type PlayerProfileCreateOrConnectWithoutUserInput = {
    where: PlayerProfileWhereUniqueInput
    create: XOR<PlayerProfileCreateWithoutUserInput, PlayerProfileUncheckedCreateWithoutUserInput>
  }

  export type AdminLogCreateWithoutUserInput = {
    id?: string
    action: string
    targetId?: string | null
    createdAt?: Date | string
  }

  export type AdminLogUncheckedCreateWithoutUserInput = {
    id?: string
    action: string
    targetId?: string | null
    createdAt?: Date | string
  }

  export type AdminLogCreateOrConnectWithoutUserInput = {
    where: AdminLogWhereUniqueInput
    create: XOR<AdminLogCreateWithoutUserInput, AdminLogUncheckedCreateWithoutUserInput>
  }

  export type AdminLogCreateManyUserInputEnvelope = {
    data: AdminLogCreateManyUserInput | AdminLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type TeamUpsertWithoutCoachInput = {
    update: XOR<TeamUpdateWithoutCoachInput, TeamUncheckedUpdateWithoutCoachInput>
    create: XOR<TeamCreateWithoutCoachInput, TeamUncheckedCreateWithoutCoachInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutCoachInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutCoachInput, TeamUncheckedUpdateWithoutCoachInput>
  }

  export type TeamUpdateWithoutCoachInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    affiliationFeePaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: PlayerProfileUpdateManyWithoutTeamNestedInput
    homeFixtures?: FixtureUpdateManyWithoutHomeTeamNestedInput
    awayFixtures?: FixtureUpdateManyWithoutAwayTeamNestedInput
    teamStats?: TeamStatsUpdateOneWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutCoachInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    affiliationFeePaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: PlayerProfileUncheckedUpdateManyWithoutTeamNestedInput
    homeFixtures?: FixtureUncheckedUpdateManyWithoutHomeTeamNestedInput
    awayFixtures?: FixtureUncheckedUpdateManyWithoutAwayTeamNestedInput
    teamStats?: TeamStatsUncheckedUpdateOneWithoutTeamNestedInput
  }

  export type PlayerProfileUpsertWithoutUserInput = {
    update: XOR<PlayerProfileUpdateWithoutUserInput, PlayerProfileUncheckedUpdateWithoutUserInput>
    create: XOR<PlayerProfileCreateWithoutUserInput, PlayerProfileUncheckedCreateWithoutUserInput>
    where?: PlayerProfileWhereInput
  }

  export type PlayerProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: PlayerProfileWhereInput
    data: XOR<PlayerProfileUpdateWithoutUserInput, PlayerProfileUncheckedUpdateWithoutUserInput>
  }

  export type PlayerProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    jerseyNumber?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    isCaptain?: BoolFieldUpdateOperationsInput | boolean
    team?: TeamUpdateOneRequiredWithoutPlayersNestedInput
    matchLogs?: MatchPlayerLogUpdateManyWithoutPlayerNestedInput
    playerStats?: PlayerStatsUpdateOneWithoutPlayerNestedInput
  }

  export type PlayerProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    jerseyNumber?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    isCaptain?: BoolFieldUpdateOperationsInput | boolean
    teamId?: StringFieldUpdateOperationsInput | string
    matchLogs?: MatchPlayerLogUncheckedUpdateManyWithoutPlayerNestedInput
    playerStats?: PlayerStatsUncheckedUpdateOneWithoutPlayerNestedInput
  }

  export type AdminLogUpsertWithWhereUniqueWithoutUserInput = {
    where: AdminLogWhereUniqueInput
    update: XOR<AdminLogUpdateWithoutUserInput, AdminLogUncheckedUpdateWithoutUserInput>
    create: XOR<AdminLogCreateWithoutUserInput, AdminLogUncheckedCreateWithoutUserInput>
  }

  export type AdminLogUpdateWithWhereUniqueWithoutUserInput = {
    where: AdminLogWhereUniqueInput
    data: XOR<AdminLogUpdateWithoutUserInput, AdminLogUncheckedUpdateWithoutUserInput>
  }

  export type AdminLogUpdateManyWithWhereWithoutUserInput = {
    where: AdminLogScalarWhereInput
    data: XOR<AdminLogUpdateManyMutationInput, AdminLogUncheckedUpdateManyWithoutUserInput>
  }

  export type AdminLogScalarWhereInput = {
    AND?: AdminLogScalarWhereInput | AdminLogScalarWhereInput[]
    OR?: AdminLogScalarWhereInput[]
    NOT?: AdminLogScalarWhereInput | AdminLogScalarWhereInput[]
    id?: StringFilter<"AdminLog"> | string
    userId?: StringFilter<"AdminLog"> | string
    action?: StringFilter<"AdminLog"> | string
    targetId?: StringNullableFilter<"AdminLog"> | string | null
    createdAt?: DateTimeFilter<"AdminLog"> | Date | string
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    role?: $Enums.UserRole
    verificationToken?: string | null
    verificationTokenExpires?: Date | string | null
    emailVerified?: Date | string | null
    dateOfBirth?: Date | string | null
    idNumber?: string | null
    image?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    managedTeam?: TeamCreateNestedOneWithoutCoachInput
    playerProfile?: PlayerProfileCreateNestedOneWithoutUserInput
    adminLogs?: AdminLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    role?: $Enums.UserRole
    verificationToken?: string | null
    verificationTokenExpires?: Date | string | null
    emailVerified?: Date | string | null
    dateOfBirth?: Date | string | null
    idNumber?: string | null
    image?: string | null
    managedTeamId?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    playerProfile?: PlayerProfileUncheckedCreateNestedOneWithoutUserInput
    adminLogs?: AdminLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    managedTeam?: TeamUpdateOneWithoutCoachNestedInput
    playerProfile?: PlayerProfileUpdateOneWithoutUserNestedInput
    adminLogs?: AdminLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    managedTeamId?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    playerProfile?: PlayerProfileUncheckedUpdateOneWithoutUserNestedInput
    adminLogs?: AdminLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    role?: $Enums.UserRole
    verificationToken?: string | null
    verificationTokenExpires?: Date | string | null
    emailVerified?: Date | string | null
    dateOfBirth?: Date | string | null
    idNumber?: string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    managedTeam?: TeamCreateNestedOneWithoutCoachInput
    playerProfile?: PlayerProfileCreateNestedOneWithoutUserInput
    adminLogs?: AdminLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    role?: $Enums.UserRole
    verificationToken?: string | null
    verificationTokenExpires?: Date | string | null
    emailVerified?: Date | string | null
    dateOfBirth?: Date | string | null
    idNumber?: string | null
    image?: string | null
    managedTeamId?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    playerProfile?: PlayerProfileUncheckedCreateNestedOneWithoutUserInput
    adminLogs?: AdminLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    managedTeam?: TeamUpdateOneWithoutCoachNestedInput
    playerProfile?: PlayerProfileUpdateOneWithoutUserNestedInput
    adminLogs?: AdminLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    managedTeamId?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    playerProfile?: PlayerProfileUncheckedUpdateOneWithoutUserNestedInput
    adminLogs?: AdminLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutManagedTeamInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    role?: $Enums.UserRole
    verificationToken?: string | null
    verificationTokenExpires?: Date | string | null
    emailVerified?: Date | string | null
    dateOfBirth?: Date | string | null
    idNumber?: string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    playerProfile?: PlayerProfileCreateNestedOneWithoutUserInput
    adminLogs?: AdminLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutManagedTeamInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    role?: $Enums.UserRole
    verificationToken?: string | null
    verificationTokenExpires?: Date | string | null
    emailVerified?: Date | string | null
    dateOfBirth?: Date | string | null
    idNumber?: string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    playerProfile?: PlayerProfileUncheckedCreateNestedOneWithoutUserInput
    adminLogs?: AdminLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutManagedTeamInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutManagedTeamInput, UserUncheckedCreateWithoutManagedTeamInput>
  }

  export type PlayerProfileCreateWithoutTeamInput = {
    id?: string
    jerseyNumber?: number | null
    position?: string | null
    isCaptain?: boolean
    user: UserCreateNestedOneWithoutPlayerProfileInput
    matchLogs?: MatchPlayerLogCreateNestedManyWithoutPlayerInput
    playerStats?: PlayerStatsCreateNestedOneWithoutPlayerInput
  }

  export type PlayerProfileUncheckedCreateWithoutTeamInput = {
    id?: string
    userId: string
    jerseyNumber?: number | null
    position?: string | null
    isCaptain?: boolean
    matchLogs?: MatchPlayerLogUncheckedCreateNestedManyWithoutPlayerInput
    playerStats?: PlayerStatsUncheckedCreateNestedOneWithoutPlayerInput
  }

  export type PlayerProfileCreateOrConnectWithoutTeamInput = {
    where: PlayerProfileWhereUniqueInput
    create: XOR<PlayerProfileCreateWithoutTeamInput, PlayerProfileUncheckedCreateWithoutTeamInput>
  }

  export type PlayerProfileCreateManyTeamInputEnvelope = {
    data: PlayerProfileCreateManyTeamInput | PlayerProfileCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type FixtureCreateWithoutHomeTeamInput = {
    id?: string
    scheduledTime: Date | string
    venue: string
    status?: $Enums.MatchStatus
    homeScore?: number | null
    awayScore?: number | null
    awayTeam: TeamCreateNestedOneWithoutAwayFixturesInput
    matchLogs?: MatchLogCreateNestedManyWithoutFixtureInput
    formation?: MatchFormationCreateNestedOneWithoutFixtureInput
    tournament?: TournamentCreateNestedOneWithoutFixturesInput
  }

  export type FixtureUncheckedCreateWithoutHomeTeamInput = {
    id?: string
    scheduledTime: Date | string
    venue: string
    status?: $Enums.MatchStatus
    awayTeamId: string
    homeScore?: number | null
    awayScore?: number | null
    tournamentId?: string | null
    matchLogs?: MatchLogUncheckedCreateNestedManyWithoutFixtureInput
    formation?: MatchFormationUncheckedCreateNestedOneWithoutFixtureInput
  }

  export type FixtureCreateOrConnectWithoutHomeTeamInput = {
    where: FixtureWhereUniqueInput
    create: XOR<FixtureCreateWithoutHomeTeamInput, FixtureUncheckedCreateWithoutHomeTeamInput>
  }

  export type FixtureCreateManyHomeTeamInputEnvelope = {
    data: FixtureCreateManyHomeTeamInput | FixtureCreateManyHomeTeamInput[]
    skipDuplicates?: boolean
  }

  export type FixtureCreateWithoutAwayTeamInput = {
    id?: string
    scheduledTime: Date | string
    venue: string
    status?: $Enums.MatchStatus
    homeScore?: number | null
    awayScore?: number | null
    homeTeam: TeamCreateNestedOneWithoutHomeFixturesInput
    matchLogs?: MatchLogCreateNestedManyWithoutFixtureInput
    formation?: MatchFormationCreateNestedOneWithoutFixtureInput
    tournament?: TournamentCreateNestedOneWithoutFixturesInput
  }

  export type FixtureUncheckedCreateWithoutAwayTeamInput = {
    id?: string
    scheduledTime: Date | string
    venue: string
    status?: $Enums.MatchStatus
    homeTeamId: string
    homeScore?: number | null
    awayScore?: number | null
    tournamentId?: string | null
    matchLogs?: MatchLogUncheckedCreateNestedManyWithoutFixtureInput
    formation?: MatchFormationUncheckedCreateNestedOneWithoutFixtureInput
  }

  export type FixtureCreateOrConnectWithoutAwayTeamInput = {
    where: FixtureWhereUniqueInput
    create: XOR<FixtureCreateWithoutAwayTeamInput, FixtureUncheckedCreateWithoutAwayTeamInput>
  }

  export type FixtureCreateManyAwayTeamInputEnvelope = {
    data: FixtureCreateManyAwayTeamInput | FixtureCreateManyAwayTeamInput[]
    skipDuplicates?: boolean
  }

  export type TeamStatsCreateWithoutTeamInput = {
    id?: string
    wins?: number
    losses?: number
    draws?: number
    points?: number
    goalsFor?: number
    goalsAgainst?: number
    goalDifference?: number
    lastUpdated?: Date | string
  }

  export type TeamStatsUncheckedCreateWithoutTeamInput = {
    id?: string
    wins?: number
    losses?: number
    draws?: number
    points?: number
    goalsFor?: number
    goalsAgainst?: number
    goalDifference?: number
    lastUpdated?: Date | string
  }

  export type TeamStatsCreateOrConnectWithoutTeamInput = {
    where: TeamStatsWhereUniqueInput
    create: XOR<TeamStatsCreateWithoutTeamInput, TeamStatsUncheckedCreateWithoutTeamInput>
  }

  export type UserUpsertWithoutManagedTeamInput = {
    update: XOR<UserUpdateWithoutManagedTeamInput, UserUncheckedUpdateWithoutManagedTeamInput>
    create: XOR<UserCreateWithoutManagedTeamInput, UserUncheckedCreateWithoutManagedTeamInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutManagedTeamInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutManagedTeamInput, UserUncheckedUpdateWithoutManagedTeamInput>
  }

  export type UserUpdateWithoutManagedTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    playerProfile?: PlayerProfileUpdateOneWithoutUserNestedInput
    adminLogs?: AdminLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutManagedTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    playerProfile?: PlayerProfileUncheckedUpdateOneWithoutUserNestedInput
    adminLogs?: AdminLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PlayerProfileUpsertWithWhereUniqueWithoutTeamInput = {
    where: PlayerProfileWhereUniqueInput
    update: XOR<PlayerProfileUpdateWithoutTeamInput, PlayerProfileUncheckedUpdateWithoutTeamInput>
    create: XOR<PlayerProfileCreateWithoutTeamInput, PlayerProfileUncheckedCreateWithoutTeamInput>
  }

  export type PlayerProfileUpdateWithWhereUniqueWithoutTeamInput = {
    where: PlayerProfileWhereUniqueInput
    data: XOR<PlayerProfileUpdateWithoutTeamInput, PlayerProfileUncheckedUpdateWithoutTeamInput>
  }

  export type PlayerProfileUpdateManyWithWhereWithoutTeamInput = {
    where: PlayerProfileScalarWhereInput
    data: XOR<PlayerProfileUpdateManyMutationInput, PlayerProfileUncheckedUpdateManyWithoutTeamInput>
  }

  export type PlayerProfileScalarWhereInput = {
    AND?: PlayerProfileScalarWhereInput | PlayerProfileScalarWhereInput[]
    OR?: PlayerProfileScalarWhereInput[]
    NOT?: PlayerProfileScalarWhereInput | PlayerProfileScalarWhereInput[]
    id?: StringFilter<"PlayerProfile"> | string
    userId?: StringFilter<"PlayerProfile"> | string
    jerseyNumber?: IntNullableFilter<"PlayerProfile"> | number | null
    position?: StringNullableFilter<"PlayerProfile"> | string | null
    isCaptain?: BoolFilter<"PlayerProfile"> | boolean
    teamId?: StringFilter<"PlayerProfile"> | string
  }

  export type FixtureUpsertWithWhereUniqueWithoutHomeTeamInput = {
    where: FixtureWhereUniqueInput
    update: XOR<FixtureUpdateWithoutHomeTeamInput, FixtureUncheckedUpdateWithoutHomeTeamInput>
    create: XOR<FixtureCreateWithoutHomeTeamInput, FixtureUncheckedCreateWithoutHomeTeamInput>
  }

  export type FixtureUpdateWithWhereUniqueWithoutHomeTeamInput = {
    where: FixtureWhereUniqueInput
    data: XOR<FixtureUpdateWithoutHomeTeamInput, FixtureUncheckedUpdateWithoutHomeTeamInput>
  }

  export type FixtureUpdateManyWithWhereWithoutHomeTeamInput = {
    where: FixtureScalarWhereInput
    data: XOR<FixtureUpdateManyMutationInput, FixtureUncheckedUpdateManyWithoutHomeTeamInput>
  }

  export type FixtureScalarWhereInput = {
    AND?: FixtureScalarWhereInput | FixtureScalarWhereInput[]
    OR?: FixtureScalarWhereInput[]
    NOT?: FixtureScalarWhereInput | FixtureScalarWhereInput[]
    id?: StringFilter<"Fixture"> | string
    scheduledTime?: DateTimeFilter<"Fixture"> | Date | string
    venue?: StringFilter<"Fixture"> | string
    status?: EnumMatchStatusFilter<"Fixture"> | $Enums.MatchStatus
    homeTeamId?: StringFilter<"Fixture"> | string
    awayTeamId?: StringFilter<"Fixture"> | string
    homeScore?: IntNullableFilter<"Fixture"> | number | null
    awayScore?: IntNullableFilter<"Fixture"> | number | null
    tournamentId?: StringNullableFilter<"Fixture"> | string | null
  }

  export type FixtureUpsertWithWhereUniqueWithoutAwayTeamInput = {
    where: FixtureWhereUniqueInput
    update: XOR<FixtureUpdateWithoutAwayTeamInput, FixtureUncheckedUpdateWithoutAwayTeamInput>
    create: XOR<FixtureCreateWithoutAwayTeamInput, FixtureUncheckedCreateWithoutAwayTeamInput>
  }

  export type FixtureUpdateWithWhereUniqueWithoutAwayTeamInput = {
    where: FixtureWhereUniqueInput
    data: XOR<FixtureUpdateWithoutAwayTeamInput, FixtureUncheckedUpdateWithoutAwayTeamInput>
  }

  export type FixtureUpdateManyWithWhereWithoutAwayTeamInput = {
    where: FixtureScalarWhereInput
    data: XOR<FixtureUpdateManyMutationInput, FixtureUncheckedUpdateManyWithoutAwayTeamInput>
  }

  export type TeamStatsUpsertWithoutTeamInput = {
    update: XOR<TeamStatsUpdateWithoutTeamInput, TeamStatsUncheckedUpdateWithoutTeamInput>
    create: XOR<TeamStatsCreateWithoutTeamInput, TeamStatsUncheckedCreateWithoutTeamInput>
    where?: TeamStatsWhereInput
  }

  export type TeamStatsUpdateToOneWithWhereWithoutTeamInput = {
    where?: TeamStatsWhereInput
    data: XOR<TeamStatsUpdateWithoutTeamInput, TeamStatsUncheckedUpdateWithoutTeamInput>
  }

  export type TeamStatsUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    draws?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    goalsFor?: IntFieldUpdateOperationsInput | number
    goalsAgainst?: IntFieldUpdateOperationsInput | number
    goalDifference?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamStatsUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    draws?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    goalsFor?: IntFieldUpdateOperationsInput | number
    goalsAgainst?: IntFieldUpdateOperationsInput | number
    goalDifference?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutPlayerProfileInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    role?: $Enums.UserRole
    verificationToken?: string | null
    verificationTokenExpires?: Date | string | null
    emailVerified?: Date | string | null
    dateOfBirth?: Date | string | null
    idNumber?: string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    managedTeam?: TeamCreateNestedOneWithoutCoachInput
    adminLogs?: AdminLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPlayerProfileInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    role?: $Enums.UserRole
    verificationToken?: string | null
    verificationTokenExpires?: Date | string | null
    emailVerified?: Date | string | null
    dateOfBirth?: Date | string | null
    idNumber?: string | null
    image?: string | null
    managedTeamId?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    adminLogs?: AdminLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPlayerProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPlayerProfileInput, UserUncheckedCreateWithoutPlayerProfileInput>
  }

  export type TeamCreateWithoutPlayersInput = {
    id?: string
    name: string
    affiliationFeePaid?: boolean
    createdAt?: Date | string
    coach?: UserCreateNestedOneWithoutManagedTeamInput
    homeFixtures?: FixtureCreateNestedManyWithoutHomeTeamInput
    awayFixtures?: FixtureCreateNestedManyWithoutAwayTeamInput
    teamStats?: TeamStatsCreateNestedOneWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutPlayersInput = {
    id?: string
    name: string
    affiliationFeePaid?: boolean
    createdAt?: Date | string
    coach?: UserUncheckedCreateNestedOneWithoutManagedTeamInput
    homeFixtures?: FixtureUncheckedCreateNestedManyWithoutHomeTeamInput
    awayFixtures?: FixtureUncheckedCreateNestedManyWithoutAwayTeamInput
    teamStats?: TeamStatsUncheckedCreateNestedOneWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutPlayersInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutPlayersInput, TeamUncheckedCreateWithoutPlayersInput>
  }

  export type MatchPlayerLogCreateWithoutPlayerInput = {
    id?: string
    eventType: $Enums.LogType
    minute?: number | null
    goalScorerId?: string | null
    assistPlayerId?: string | null
    log: MatchLogCreateNestedOneWithoutPlayerLogsInput
  }

  export type MatchPlayerLogUncheckedCreateWithoutPlayerInput = {
    id?: string
    logId: string
    eventType: $Enums.LogType
    minute?: number | null
    goalScorerId?: string | null
    assistPlayerId?: string | null
  }

  export type MatchPlayerLogCreateOrConnectWithoutPlayerInput = {
    where: MatchPlayerLogWhereUniqueInput
    create: XOR<MatchPlayerLogCreateWithoutPlayerInput, MatchPlayerLogUncheckedCreateWithoutPlayerInput>
  }

  export type MatchPlayerLogCreateManyPlayerInputEnvelope = {
    data: MatchPlayerLogCreateManyPlayerInput | MatchPlayerLogCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type PlayerStatsCreateWithoutPlayerInput = {
    id?: string
    goals?: number
    assists?: number
    yellowCards?: number
    redCards?: number
    matchesPlayed?: number
    lastUpdated?: Date | string
  }

  export type PlayerStatsUncheckedCreateWithoutPlayerInput = {
    id?: string
    goals?: number
    assists?: number
    yellowCards?: number
    redCards?: number
    matchesPlayed?: number
    lastUpdated?: Date | string
  }

  export type PlayerStatsCreateOrConnectWithoutPlayerInput = {
    where: PlayerStatsWhereUniqueInput
    create: XOR<PlayerStatsCreateWithoutPlayerInput, PlayerStatsUncheckedCreateWithoutPlayerInput>
  }

  export type UserUpsertWithoutPlayerProfileInput = {
    update: XOR<UserUpdateWithoutPlayerProfileInput, UserUncheckedUpdateWithoutPlayerProfileInput>
    create: XOR<UserCreateWithoutPlayerProfileInput, UserUncheckedCreateWithoutPlayerProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPlayerProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPlayerProfileInput, UserUncheckedUpdateWithoutPlayerProfileInput>
  }

  export type UserUpdateWithoutPlayerProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    managedTeam?: TeamUpdateOneWithoutCoachNestedInput
    adminLogs?: AdminLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPlayerProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    managedTeamId?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    adminLogs?: AdminLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TeamUpsertWithoutPlayersInput = {
    update: XOR<TeamUpdateWithoutPlayersInput, TeamUncheckedUpdateWithoutPlayersInput>
    create: XOR<TeamCreateWithoutPlayersInput, TeamUncheckedCreateWithoutPlayersInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutPlayersInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutPlayersInput, TeamUncheckedUpdateWithoutPlayersInput>
  }

  export type TeamUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    affiliationFeePaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coach?: UserUpdateOneWithoutManagedTeamNestedInput
    homeFixtures?: FixtureUpdateManyWithoutHomeTeamNestedInput
    awayFixtures?: FixtureUpdateManyWithoutAwayTeamNestedInput
    teamStats?: TeamStatsUpdateOneWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    affiliationFeePaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coach?: UserUncheckedUpdateOneWithoutManagedTeamNestedInput
    homeFixtures?: FixtureUncheckedUpdateManyWithoutHomeTeamNestedInput
    awayFixtures?: FixtureUncheckedUpdateManyWithoutAwayTeamNestedInput
    teamStats?: TeamStatsUncheckedUpdateOneWithoutTeamNestedInput
  }

  export type MatchPlayerLogUpsertWithWhereUniqueWithoutPlayerInput = {
    where: MatchPlayerLogWhereUniqueInput
    update: XOR<MatchPlayerLogUpdateWithoutPlayerInput, MatchPlayerLogUncheckedUpdateWithoutPlayerInput>
    create: XOR<MatchPlayerLogCreateWithoutPlayerInput, MatchPlayerLogUncheckedCreateWithoutPlayerInput>
  }

  export type MatchPlayerLogUpdateWithWhereUniqueWithoutPlayerInput = {
    where: MatchPlayerLogWhereUniqueInput
    data: XOR<MatchPlayerLogUpdateWithoutPlayerInput, MatchPlayerLogUncheckedUpdateWithoutPlayerInput>
  }

  export type MatchPlayerLogUpdateManyWithWhereWithoutPlayerInput = {
    where: MatchPlayerLogScalarWhereInput
    data: XOR<MatchPlayerLogUpdateManyMutationInput, MatchPlayerLogUncheckedUpdateManyWithoutPlayerInput>
  }

  export type MatchPlayerLogScalarWhereInput = {
    AND?: MatchPlayerLogScalarWhereInput | MatchPlayerLogScalarWhereInput[]
    OR?: MatchPlayerLogScalarWhereInput[]
    NOT?: MatchPlayerLogScalarWhereInput | MatchPlayerLogScalarWhereInput[]
    id?: StringFilter<"MatchPlayerLog"> | string
    logId?: StringFilter<"MatchPlayerLog"> | string
    playerId?: StringFilter<"MatchPlayerLog"> | string
    eventType?: EnumLogTypeFilter<"MatchPlayerLog"> | $Enums.LogType
    minute?: IntNullableFilter<"MatchPlayerLog"> | number | null
    goalScorerId?: StringNullableFilter<"MatchPlayerLog"> | string | null
    assistPlayerId?: StringNullableFilter<"MatchPlayerLog"> | string | null
  }

  export type PlayerStatsUpsertWithoutPlayerInput = {
    update: XOR<PlayerStatsUpdateWithoutPlayerInput, PlayerStatsUncheckedUpdateWithoutPlayerInput>
    create: XOR<PlayerStatsCreateWithoutPlayerInput, PlayerStatsUncheckedCreateWithoutPlayerInput>
    where?: PlayerStatsWhereInput
  }

  export type PlayerStatsUpdateToOneWithWhereWithoutPlayerInput = {
    where?: PlayerStatsWhereInput
    data: XOR<PlayerStatsUpdateWithoutPlayerInput, PlayerStatsUncheckedUpdateWithoutPlayerInput>
  }

  export type PlayerStatsUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    goals?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    yellowCards?: IntFieldUpdateOperationsInput | number
    redCards?: IntFieldUpdateOperationsInput | number
    matchesPlayed?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerStatsUncheckedUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    goals?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    yellowCards?: IntFieldUpdateOperationsInput | number
    redCards?: IntFieldUpdateOperationsInput | number
    matchesPlayed?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamCreateWithoutTeamStatsInput = {
    id?: string
    name: string
    affiliationFeePaid?: boolean
    createdAt?: Date | string
    coach?: UserCreateNestedOneWithoutManagedTeamInput
    players?: PlayerProfileCreateNestedManyWithoutTeamInput
    homeFixtures?: FixtureCreateNestedManyWithoutHomeTeamInput
    awayFixtures?: FixtureCreateNestedManyWithoutAwayTeamInput
  }

  export type TeamUncheckedCreateWithoutTeamStatsInput = {
    id?: string
    name: string
    affiliationFeePaid?: boolean
    createdAt?: Date | string
    coach?: UserUncheckedCreateNestedOneWithoutManagedTeamInput
    players?: PlayerProfileUncheckedCreateNestedManyWithoutTeamInput
    homeFixtures?: FixtureUncheckedCreateNestedManyWithoutHomeTeamInput
    awayFixtures?: FixtureUncheckedCreateNestedManyWithoutAwayTeamInput
  }

  export type TeamCreateOrConnectWithoutTeamStatsInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutTeamStatsInput, TeamUncheckedCreateWithoutTeamStatsInput>
  }

  export type TeamUpsertWithoutTeamStatsInput = {
    update: XOR<TeamUpdateWithoutTeamStatsInput, TeamUncheckedUpdateWithoutTeamStatsInput>
    create: XOR<TeamCreateWithoutTeamStatsInput, TeamUncheckedCreateWithoutTeamStatsInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutTeamStatsInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutTeamStatsInput, TeamUncheckedUpdateWithoutTeamStatsInput>
  }

  export type TeamUpdateWithoutTeamStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    affiliationFeePaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coach?: UserUpdateOneWithoutManagedTeamNestedInput
    players?: PlayerProfileUpdateManyWithoutTeamNestedInput
    homeFixtures?: FixtureUpdateManyWithoutHomeTeamNestedInput
    awayFixtures?: FixtureUpdateManyWithoutAwayTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutTeamStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    affiliationFeePaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coach?: UserUncheckedUpdateOneWithoutManagedTeamNestedInput
    players?: PlayerProfileUncheckedUpdateManyWithoutTeamNestedInput
    homeFixtures?: FixtureUncheckedUpdateManyWithoutHomeTeamNestedInput
    awayFixtures?: FixtureUncheckedUpdateManyWithoutAwayTeamNestedInput
  }

  export type PlayerProfileCreateWithoutPlayerStatsInput = {
    id?: string
    jerseyNumber?: number | null
    position?: string | null
    isCaptain?: boolean
    user: UserCreateNestedOneWithoutPlayerProfileInput
    team: TeamCreateNestedOneWithoutPlayersInput
    matchLogs?: MatchPlayerLogCreateNestedManyWithoutPlayerInput
  }

  export type PlayerProfileUncheckedCreateWithoutPlayerStatsInput = {
    id?: string
    userId: string
    jerseyNumber?: number | null
    position?: string | null
    isCaptain?: boolean
    teamId: string
    matchLogs?: MatchPlayerLogUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerProfileCreateOrConnectWithoutPlayerStatsInput = {
    where: PlayerProfileWhereUniqueInput
    create: XOR<PlayerProfileCreateWithoutPlayerStatsInput, PlayerProfileUncheckedCreateWithoutPlayerStatsInput>
  }

  export type PlayerProfileUpsertWithoutPlayerStatsInput = {
    update: XOR<PlayerProfileUpdateWithoutPlayerStatsInput, PlayerProfileUncheckedUpdateWithoutPlayerStatsInput>
    create: XOR<PlayerProfileCreateWithoutPlayerStatsInput, PlayerProfileUncheckedCreateWithoutPlayerStatsInput>
    where?: PlayerProfileWhereInput
  }

  export type PlayerProfileUpdateToOneWithWhereWithoutPlayerStatsInput = {
    where?: PlayerProfileWhereInput
    data: XOR<PlayerProfileUpdateWithoutPlayerStatsInput, PlayerProfileUncheckedUpdateWithoutPlayerStatsInput>
  }

  export type PlayerProfileUpdateWithoutPlayerStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    jerseyNumber?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    isCaptain?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutPlayerProfileNestedInput
    team?: TeamUpdateOneRequiredWithoutPlayersNestedInput
    matchLogs?: MatchPlayerLogUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerProfileUncheckedUpdateWithoutPlayerStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    jerseyNumber?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    isCaptain?: BoolFieldUpdateOperationsInput | boolean
    teamId?: StringFieldUpdateOperationsInput | string
    matchLogs?: MatchPlayerLogUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type TeamCreateWithoutHomeFixturesInput = {
    id?: string
    name: string
    affiliationFeePaid?: boolean
    createdAt?: Date | string
    coach?: UserCreateNestedOneWithoutManagedTeamInput
    players?: PlayerProfileCreateNestedManyWithoutTeamInput
    awayFixtures?: FixtureCreateNestedManyWithoutAwayTeamInput
    teamStats?: TeamStatsCreateNestedOneWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutHomeFixturesInput = {
    id?: string
    name: string
    affiliationFeePaid?: boolean
    createdAt?: Date | string
    coach?: UserUncheckedCreateNestedOneWithoutManagedTeamInput
    players?: PlayerProfileUncheckedCreateNestedManyWithoutTeamInput
    awayFixtures?: FixtureUncheckedCreateNestedManyWithoutAwayTeamInput
    teamStats?: TeamStatsUncheckedCreateNestedOneWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutHomeFixturesInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutHomeFixturesInput, TeamUncheckedCreateWithoutHomeFixturesInput>
  }

  export type TeamCreateWithoutAwayFixturesInput = {
    id?: string
    name: string
    affiliationFeePaid?: boolean
    createdAt?: Date | string
    coach?: UserCreateNestedOneWithoutManagedTeamInput
    players?: PlayerProfileCreateNestedManyWithoutTeamInput
    homeFixtures?: FixtureCreateNestedManyWithoutHomeTeamInput
    teamStats?: TeamStatsCreateNestedOneWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutAwayFixturesInput = {
    id?: string
    name: string
    affiliationFeePaid?: boolean
    createdAt?: Date | string
    coach?: UserUncheckedCreateNestedOneWithoutManagedTeamInput
    players?: PlayerProfileUncheckedCreateNestedManyWithoutTeamInput
    homeFixtures?: FixtureUncheckedCreateNestedManyWithoutHomeTeamInput
    teamStats?: TeamStatsUncheckedCreateNestedOneWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutAwayFixturesInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutAwayFixturesInput, TeamUncheckedCreateWithoutAwayFixturesInput>
  }

  export type MatchLogCreateWithoutFixtureInput = {
    id?: string
    logEntry: string
    createdAt?: Date | string
    playerLogs?: MatchPlayerLogCreateNestedManyWithoutLogInput
  }

  export type MatchLogUncheckedCreateWithoutFixtureInput = {
    id?: string
    logEntry: string
    createdAt?: Date | string
    playerLogs?: MatchPlayerLogUncheckedCreateNestedManyWithoutLogInput
  }

  export type MatchLogCreateOrConnectWithoutFixtureInput = {
    where: MatchLogWhereUniqueInput
    create: XOR<MatchLogCreateWithoutFixtureInput, MatchLogUncheckedCreateWithoutFixtureInput>
  }

  export type MatchLogCreateManyFixtureInputEnvelope = {
    data: MatchLogCreateManyFixtureInput | MatchLogCreateManyFixtureInput[]
    skipDuplicates?: boolean
  }

  export type MatchFormationCreateWithoutFixtureInput = {
    id?: string
    formationDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchFormationUncheckedCreateWithoutFixtureInput = {
    id?: string
    formationDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchFormationCreateOrConnectWithoutFixtureInput = {
    where: MatchFormationWhereUniqueInput
    create: XOR<MatchFormationCreateWithoutFixtureInput, MatchFormationUncheckedCreateWithoutFixtureInput>
  }

  export type TournamentCreateWithoutFixturesInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TournamentUncheckedCreateWithoutFixturesInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TournamentCreateOrConnectWithoutFixturesInput = {
    where: TournamentWhereUniqueInput
    create: XOR<TournamentCreateWithoutFixturesInput, TournamentUncheckedCreateWithoutFixturesInput>
  }

  export type TeamUpsertWithoutHomeFixturesInput = {
    update: XOR<TeamUpdateWithoutHomeFixturesInput, TeamUncheckedUpdateWithoutHomeFixturesInput>
    create: XOR<TeamCreateWithoutHomeFixturesInput, TeamUncheckedCreateWithoutHomeFixturesInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutHomeFixturesInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutHomeFixturesInput, TeamUncheckedUpdateWithoutHomeFixturesInput>
  }

  export type TeamUpdateWithoutHomeFixturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    affiliationFeePaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coach?: UserUpdateOneWithoutManagedTeamNestedInput
    players?: PlayerProfileUpdateManyWithoutTeamNestedInput
    awayFixtures?: FixtureUpdateManyWithoutAwayTeamNestedInput
    teamStats?: TeamStatsUpdateOneWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutHomeFixturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    affiliationFeePaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coach?: UserUncheckedUpdateOneWithoutManagedTeamNestedInput
    players?: PlayerProfileUncheckedUpdateManyWithoutTeamNestedInput
    awayFixtures?: FixtureUncheckedUpdateManyWithoutAwayTeamNestedInput
    teamStats?: TeamStatsUncheckedUpdateOneWithoutTeamNestedInput
  }

  export type TeamUpsertWithoutAwayFixturesInput = {
    update: XOR<TeamUpdateWithoutAwayFixturesInput, TeamUncheckedUpdateWithoutAwayFixturesInput>
    create: XOR<TeamCreateWithoutAwayFixturesInput, TeamUncheckedCreateWithoutAwayFixturesInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutAwayFixturesInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutAwayFixturesInput, TeamUncheckedUpdateWithoutAwayFixturesInput>
  }

  export type TeamUpdateWithoutAwayFixturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    affiliationFeePaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coach?: UserUpdateOneWithoutManagedTeamNestedInput
    players?: PlayerProfileUpdateManyWithoutTeamNestedInput
    homeFixtures?: FixtureUpdateManyWithoutHomeTeamNestedInput
    teamStats?: TeamStatsUpdateOneWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutAwayFixturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    affiliationFeePaid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coach?: UserUncheckedUpdateOneWithoutManagedTeamNestedInput
    players?: PlayerProfileUncheckedUpdateManyWithoutTeamNestedInput
    homeFixtures?: FixtureUncheckedUpdateManyWithoutHomeTeamNestedInput
    teamStats?: TeamStatsUncheckedUpdateOneWithoutTeamNestedInput
  }

  export type MatchLogUpsertWithWhereUniqueWithoutFixtureInput = {
    where: MatchLogWhereUniqueInput
    update: XOR<MatchLogUpdateWithoutFixtureInput, MatchLogUncheckedUpdateWithoutFixtureInput>
    create: XOR<MatchLogCreateWithoutFixtureInput, MatchLogUncheckedCreateWithoutFixtureInput>
  }

  export type MatchLogUpdateWithWhereUniqueWithoutFixtureInput = {
    where: MatchLogWhereUniqueInput
    data: XOR<MatchLogUpdateWithoutFixtureInput, MatchLogUncheckedUpdateWithoutFixtureInput>
  }

  export type MatchLogUpdateManyWithWhereWithoutFixtureInput = {
    where: MatchLogScalarWhereInput
    data: XOR<MatchLogUpdateManyMutationInput, MatchLogUncheckedUpdateManyWithoutFixtureInput>
  }

  export type MatchLogScalarWhereInput = {
    AND?: MatchLogScalarWhereInput | MatchLogScalarWhereInput[]
    OR?: MatchLogScalarWhereInput[]
    NOT?: MatchLogScalarWhereInput | MatchLogScalarWhereInput[]
    id?: StringFilter<"MatchLog"> | string
    fixtureId?: StringFilter<"MatchLog"> | string
    logEntry?: StringFilter<"MatchLog"> | string
    createdAt?: DateTimeFilter<"MatchLog"> | Date | string
  }

  export type MatchFormationUpsertWithoutFixtureInput = {
    update: XOR<MatchFormationUpdateWithoutFixtureInput, MatchFormationUncheckedUpdateWithoutFixtureInput>
    create: XOR<MatchFormationCreateWithoutFixtureInput, MatchFormationUncheckedCreateWithoutFixtureInput>
    where?: MatchFormationWhereInput
  }

  export type MatchFormationUpdateToOneWithWhereWithoutFixtureInput = {
    where?: MatchFormationWhereInput
    data: XOR<MatchFormationUpdateWithoutFixtureInput, MatchFormationUncheckedUpdateWithoutFixtureInput>
  }

  export type MatchFormationUpdateWithoutFixtureInput = {
    id?: StringFieldUpdateOperationsInput | string
    formationDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchFormationUncheckedUpdateWithoutFixtureInput = {
    id?: StringFieldUpdateOperationsInput | string
    formationDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentUpsertWithoutFixturesInput = {
    update: XOR<TournamentUpdateWithoutFixturesInput, TournamentUncheckedUpdateWithoutFixturesInput>
    create: XOR<TournamentCreateWithoutFixturesInput, TournamentUncheckedCreateWithoutFixturesInput>
    where?: TournamentWhereInput
  }

  export type TournamentUpdateToOneWithWhereWithoutFixturesInput = {
    where?: TournamentWhereInput
    data: XOR<TournamentUpdateWithoutFixturesInput, TournamentUncheckedUpdateWithoutFixturesInput>
  }

  export type TournamentUpdateWithoutFixturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentUncheckedUpdateWithoutFixturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FixtureCreateWithoutFormationInput = {
    id?: string
    scheduledTime: Date | string
    venue: string
    status?: $Enums.MatchStatus
    homeScore?: number | null
    awayScore?: number | null
    homeTeam: TeamCreateNestedOneWithoutHomeFixturesInput
    awayTeam: TeamCreateNestedOneWithoutAwayFixturesInput
    matchLogs?: MatchLogCreateNestedManyWithoutFixtureInput
    tournament?: TournamentCreateNestedOneWithoutFixturesInput
  }

  export type FixtureUncheckedCreateWithoutFormationInput = {
    id?: string
    scheduledTime: Date | string
    venue: string
    status?: $Enums.MatchStatus
    homeTeamId: string
    awayTeamId: string
    homeScore?: number | null
    awayScore?: number | null
    tournamentId?: string | null
    matchLogs?: MatchLogUncheckedCreateNestedManyWithoutFixtureInput
  }

  export type FixtureCreateOrConnectWithoutFormationInput = {
    where: FixtureWhereUniqueInput
    create: XOR<FixtureCreateWithoutFormationInput, FixtureUncheckedCreateWithoutFormationInput>
  }

  export type FixtureUpsertWithoutFormationInput = {
    update: XOR<FixtureUpdateWithoutFormationInput, FixtureUncheckedUpdateWithoutFormationInput>
    create: XOR<FixtureCreateWithoutFormationInput, FixtureUncheckedCreateWithoutFormationInput>
    where?: FixtureWhereInput
  }

  export type FixtureUpdateToOneWithWhereWithoutFormationInput = {
    where?: FixtureWhereInput
    data: XOR<FixtureUpdateWithoutFormationInput, FixtureUncheckedUpdateWithoutFormationInput>
  }

  export type FixtureUpdateWithoutFormationInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    homeTeam?: TeamUpdateOneRequiredWithoutHomeFixturesNestedInput
    awayTeam?: TeamUpdateOneRequiredWithoutAwayFixturesNestedInput
    matchLogs?: MatchLogUpdateManyWithoutFixtureNestedInput
    tournament?: TournamentUpdateOneWithoutFixturesNestedInput
  }

  export type FixtureUncheckedUpdateWithoutFormationInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    homeTeamId?: StringFieldUpdateOperationsInput | string
    awayTeamId?: StringFieldUpdateOperationsInput | string
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    tournamentId?: NullableStringFieldUpdateOperationsInput | string | null
    matchLogs?: MatchLogUncheckedUpdateManyWithoutFixtureNestedInput
  }

  export type FixtureCreateWithoutMatchLogsInput = {
    id?: string
    scheduledTime: Date | string
    venue: string
    status?: $Enums.MatchStatus
    homeScore?: number | null
    awayScore?: number | null
    homeTeam: TeamCreateNestedOneWithoutHomeFixturesInput
    awayTeam: TeamCreateNestedOneWithoutAwayFixturesInput
    formation?: MatchFormationCreateNestedOneWithoutFixtureInput
    tournament?: TournamentCreateNestedOneWithoutFixturesInput
  }

  export type FixtureUncheckedCreateWithoutMatchLogsInput = {
    id?: string
    scheduledTime: Date | string
    venue: string
    status?: $Enums.MatchStatus
    homeTeamId: string
    awayTeamId: string
    homeScore?: number | null
    awayScore?: number | null
    tournamentId?: string | null
    formation?: MatchFormationUncheckedCreateNestedOneWithoutFixtureInput
  }

  export type FixtureCreateOrConnectWithoutMatchLogsInput = {
    where: FixtureWhereUniqueInput
    create: XOR<FixtureCreateWithoutMatchLogsInput, FixtureUncheckedCreateWithoutMatchLogsInput>
  }

  export type MatchPlayerLogCreateWithoutLogInput = {
    id?: string
    eventType: $Enums.LogType
    minute?: number | null
    goalScorerId?: string | null
    assistPlayerId?: string | null
    player: PlayerProfileCreateNestedOneWithoutMatchLogsInput
  }

  export type MatchPlayerLogUncheckedCreateWithoutLogInput = {
    id?: string
    playerId: string
    eventType: $Enums.LogType
    minute?: number | null
    goalScorerId?: string | null
    assistPlayerId?: string | null
  }

  export type MatchPlayerLogCreateOrConnectWithoutLogInput = {
    where: MatchPlayerLogWhereUniqueInput
    create: XOR<MatchPlayerLogCreateWithoutLogInput, MatchPlayerLogUncheckedCreateWithoutLogInput>
  }

  export type MatchPlayerLogCreateManyLogInputEnvelope = {
    data: MatchPlayerLogCreateManyLogInput | MatchPlayerLogCreateManyLogInput[]
    skipDuplicates?: boolean
  }

  export type FixtureUpsertWithoutMatchLogsInput = {
    update: XOR<FixtureUpdateWithoutMatchLogsInput, FixtureUncheckedUpdateWithoutMatchLogsInput>
    create: XOR<FixtureCreateWithoutMatchLogsInput, FixtureUncheckedCreateWithoutMatchLogsInput>
    where?: FixtureWhereInput
  }

  export type FixtureUpdateToOneWithWhereWithoutMatchLogsInput = {
    where?: FixtureWhereInput
    data: XOR<FixtureUpdateWithoutMatchLogsInput, FixtureUncheckedUpdateWithoutMatchLogsInput>
  }

  export type FixtureUpdateWithoutMatchLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    homeTeam?: TeamUpdateOneRequiredWithoutHomeFixturesNestedInput
    awayTeam?: TeamUpdateOneRequiredWithoutAwayFixturesNestedInput
    formation?: MatchFormationUpdateOneWithoutFixtureNestedInput
    tournament?: TournamentUpdateOneWithoutFixturesNestedInput
  }

  export type FixtureUncheckedUpdateWithoutMatchLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    homeTeamId?: StringFieldUpdateOperationsInput | string
    awayTeamId?: StringFieldUpdateOperationsInput | string
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    tournamentId?: NullableStringFieldUpdateOperationsInput | string | null
    formation?: MatchFormationUncheckedUpdateOneWithoutFixtureNestedInput
  }

  export type MatchPlayerLogUpsertWithWhereUniqueWithoutLogInput = {
    where: MatchPlayerLogWhereUniqueInput
    update: XOR<MatchPlayerLogUpdateWithoutLogInput, MatchPlayerLogUncheckedUpdateWithoutLogInput>
    create: XOR<MatchPlayerLogCreateWithoutLogInput, MatchPlayerLogUncheckedCreateWithoutLogInput>
  }

  export type MatchPlayerLogUpdateWithWhereUniqueWithoutLogInput = {
    where: MatchPlayerLogWhereUniqueInput
    data: XOR<MatchPlayerLogUpdateWithoutLogInput, MatchPlayerLogUncheckedUpdateWithoutLogInput>
  }

  export type MatchPlayerLogUpdateManyWithWhereWithoutLogInput = {
    where: MatchPlayerLogScalarWhereInput
    data: XOR<MatchPlayerLogUpdateManyMutationInput, MatchPlayerLogUncheckedUpdateManyWithoutLogInput>
  }

  export type MatchLogCreateWithoutPlayerLogsInput = {
    id?: string
    logEntry: string
    createdAt?: Date | string
    fixture: FixtureCreateNestedOneWithoutMatchLogsInput
  }

  export type MatchLogUncheckedCreateWithoutPlayerLogsInput = {
    id?: string
    fixtureId: string
    logEntry: string
    createdAt?: Date | string
  }

  export type MatchLogCreateOrConnectWithoutPlayerLogsInput = {
    where: MatchLogWhereUniqueInput
    create: XOR<MatchLogCreateWithoutPlayerLogsInput, MatchLogUncheckedCreateWithoutPlayerLogsInput>
  }

  export type PlayerProfileCreateWithoutMatchLogsInput = {
    id?: string
    jerseyNumber?: number | null
    position?: string | null
    isCaptain?: boolean
    user: UserCreateNestedOneWithoutPlayerProfileInput
    team: TeamCreateNestedOneWithoutPlayersInput
    playerStats?: PlayerStatsCreateNestedOneWithoutPlayerInput
  }

  export type PlayerProfileUncheckedCreateWithoutMatchLogsInput = {
    id?: string
    userId: string
    jerseyNumber?: number | null
    position?: string | null
    isCaptain?: boolean
    teamId: string
    playerStats?: PlayerStatsUncheckedCreateNestedOneWithoutPlayerInput
  }

  export type PlayerProfileCreateOrConnectWithoutMatchLogsInput = {
    where: PlayerProfileWhereUniqueInput
    create: XOR<PlayerProfileCreateWithoutMatchLogsInput, PlayerProfileUncheckedCreateWithoutMatchLogsInput>
  }

  export type MatchLogUpsertWithoutPlayerLogsInput = {
    update: XOR<MatchLogUpdateWithoutPlayerLogsInput, MatchLogUncheckedUpdateWithoutPlayerLogsInput>
    create: XOR<MatchLogCreateWithoutPlayerLogsInput, MatchLogUncheckedCreateWithoutPlayerLogsInput>
    where?: MatchLogWhereInput
  }

  export type MatchLogUpdateToOneWithWhereWithoutPlayerLogsInput = {
    where?: MatchLogWhereInput
    data: XOR<MatchLogUpdateWithoutPlayerLogsInput, MatchLogUncheckedUpdateWithoutPlayerLogsInput>
  }

  export type MatchLogUpdateWithoutPlayerLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    logEntry?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fixture?: FixtureUpdateOneRequiredWithoutMatchLogsNestedInput
  }

  export type MatchLogUncheckedUpdateWithoutPlayerLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fixtureId?: StringFieldUpdateOperationsInput | string
    logEntry?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerProfileUpsertWithoutMatchLogsInput = {
    update: XOR<PlayerProfileUpdateWithoutMatchLogsInput, PlayerProfileUncheckedUpdateWithoutMatchLogsInput>
    create: XOR<PlayerProfileCreateWithoutMatchLogsInput, PlayerProfileUncheckedCreateWithoutMatchLogsInput>
    where?: PlayerProfileWhereInput
  }

  export type PlayerProfileUpdateToOneWithWhereWithoutMatchLogsInput = {
    where?: PlayerProfileWhereInput
    data: XOR<PlayerProfileUpdateWithoutMatchLogsInput, PlayerProfileUncheckedUpdateWithoutMatchLogsInput>
  }

  export type PlayerProfileUpdateWithoutMatchLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    jerseyNumber?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    isCaptain?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutPlayerProfileNestedInput
    team?: TeamUpdateOneRequiredWithoutPlayersNestedInput
    playerStats?: PlayerStatsUpdateOneWithoutPlayerNestedInput
  }

  export type PlayerProfileUncheckedUpdateWithoutMatchLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    jerseyNumber?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    isCaptain?: BoolFieldUpdateOperationsInput | boolean
    teamId?: StringFieldUpdateOperationsInput | string
    playerStats?: PlayerStatsUncheckedUpdateOneWithoutPlayerNestedInput
  }

  export type FixtureCreateWithoutTournamentInput = {
    id?: string
    scheduledTime: Date | string
    venue: string
    status?: $Enums.MatchStatus
    homeScore?: number | null
    awayScore?: number | null
    homeTeam: TeamCreateNestedOneWithoutHomeFixturesInput
    awayTeam: TeamCreateNestedOneWithoutAwayFixturesInput
    matchLogs?: MatchLogCreateNestedManyWithoutFixtureInput
    formation?: MatchFormationCreateNestedOneWithoutFixtureInput
  }

  export type FixtureUncheckedCreateWithoutTournamentInput = {
    id?: string
    scheduledTime: Date | string
    venue: string
    status?: $Enums.MatchStatus
    homeTeamId: string
    awayTeamId: string
    homeScore?: number | null
    awayScore?: number | null
    matchLogs?: MatchLogUncheckedCreateNestedManyWithoutFixtureInput
    formation?: MatchFormationUncheckedCreateNestedOneWithoutFixtureInput
  }

  export type FixtureCreateOrConnectWithoutTournamentInput = {
    where: FixtureWhereUniqueInput
    create: XOR<FixtureCreateWithoutTournamentInput, FixtureUncheckedCreateWithoutTournamentInput>
  }

  export type FixtureCreateManyTournamentInputEnvelope = {
    data: FixtureCreateManyTournamentInput | FixtureCreateManyTournamentInput[]
    skipDuplicates?: boolean
  }

  export type FixtureUpsertWithWhereUniqueWithoutTournamentInput = {
    where: FixtureWhereUniqueInput
    update: XOR<FixtureUpdateWithoutTournamentInput, FixtureUncheckedUpdateWithoutTournamentInput>
    create: XOR<FixtureCreateWithoutTournamentInput, FixtureUncheckedCreateWithoutTournamentInput>
  }

  export type FixtureUpdateWithWhereUniqueWithoutTournamentInput = {
    where: FixtureWhereUniqueInput
    data: XOR<FixtureUpdateWithoutTournamentInput, FixtureUncheckedUpdateWithoutTournamentInput>
  }

  export type FixtureUpdateManyWithWhereWithoutTournamentInput = {
    where: FixtureScalarWhereInput
    data: XOR<FixtureUpdateManyMutationInput, FixtureUncheckedUpdateManyWithoutTournamentInput>
  }

  export type UserCreateWithoutAdminLogsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    role?: $Enums.UserRole
    verificationToken?: string | null
    verificationTokenExpires?: Date | string | null
    emailVerified?: Date | string | null
    dateOfBirth?: Date | string | null
    idNumber?: string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    managedTeam?: TeamCreateNestedOneWithoutCoachInput
    playerProfile?: PlayerProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAdminLogsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    role?: $Enums.UserRole
    verificationToken?: string | null
    verificationTokenExpires?: Date | string | null
    emailVerified?: Date | string | null
    dateOfBirth?: Date | string | null
    idNumber?: string | null
    image?: string | null
    managedTeamId?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    playerProfile?: PlayerProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAdminLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdminLogsInput, UserUncheckedCreateWithoutAdminLogsInput>
  }

  export type UserUpsertWithoutAdminLogsInput = {
    update: XOR<UserUpdateWithoutAdminLogsInput, UserUncheckedUpdateWithoutAdminLogsInput>
    create: XOR<UserCreateWithoutAdminLogsInput, UserUncheckedCreateWithoutAdminLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdminLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdminLogsInput, UserUncheckedUpdateWithoutAdminLogsInput>
  }

  export type UserUpdateWithoutAdminLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    managedTeam?: TeamUpdateOneWithoutCoachNestedInput
    playerProfile?: PlayerProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAdminLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    managedTeamId?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    playerProfile?: PlayerProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type AdminLogCreateManyUserInput = {
    id?: string
    action: string
    targetId?: string | null
    createdAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerProfileCreateManyTeamInput = {
    id?: string
    userId: string
    jerseyNumber?: number | null
    position?: string | null
    isCaptain?: boolean
  }

  export type FixtureCreateManyHomeTeamInput = {
    id?: string
    scheduledTime: Date | string
    venue: string
    status?: $Enums.MatchStatus
    awayTeamId: string
    homeScore?: number | null
    awayScore?: number | null
    tournamentId?: string | null
  }

  export type FixtureCreateManyAwayTeamInput = {
    id?: string
    scheduledTime: Date | string
    venue: string
    status?: $Enums.MatchStatus
    homeTeamId: string
    homeScore?: number | null
    awayScore?: number | null
    tournamentId?: string | null
  }

  export type PlayerProfileUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    jerseyNumber?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    isCaptain?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutPlayerProfileNestedInput
    matchLogs?: MatchPlayerLogUpdateManyWithoutPlayerNestedInput
    playerStats?: PlayerStatsUpdateOneWithoutPlayerNestedInput
  }

  export type PlayerProfileUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    jerseyNumber?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    isCaptain?: BoolFieldUpdateOperationsInput | boolean
    matchLogs?: MatchPlayerLogUncheckedUpdateManyWithoutPlayerNestedInput
    playerStats?: PlayerStatsUncheckedUpdateOneWithoutPlayerNestedInput
  }

  export type PlayerProfileUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    jerseyNumber?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    isCaptain?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FixtureUpdateWithoutHomeTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayTeam?: TeamUpdateOneRequiredWithoutAwayFixturesNestedInput
    matchLogs?: MatchLogUpdateManyWithoutFixtureNestedInput
    formation?: MatchFormationUpdateOneWithoutFixtureNestedInput
    tournament?: TournamentUpdateOneWithoutFixturesNestedInput
  }

  export type FixtureUncheckedUpdateWithoutHomeTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    awayTeamId?: StringFieldUpdateOperationsInput | string
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    tournamentId?: NullableStringFieldUpdateOperationsInput | string | null
    matchLogs?: MatchLogUncheckedUpdateManyWithoutFixtureNestedInput
    formation?: MatchFormationUncheckedUpdateOneWithoutFixtureNestedInput
  }

  export type FixtureUncheckedUpdateManyWithoutHomeTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    awayTeamId?: StringFieldUpdateOperationsInput | string
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    tournamentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FixtureUpdateWithoutAwayTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    homeTeam?: TeamUpdateOneRequiredWithoutHomeFixturesNestedInput
    matchLogs?: MatchLogUpdateManyWithoutFixtureNestedInput
    formation?: MatchFormationUpdateOneWithoutFixtureNestedInput
    tournament?: TournamentUpdateOneWithoutFixturesNestedInput
  }

  export type FixtureUncheckedUpdateWithoutAwayTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    homeTeamId?: StringFieldUpdateOperationsInput | string
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    tournamentId?: NullableStringFieldUpdateOperationsInput | string | null
    matchLogs?: MatchLogUncheckedUpdateManyWithoutFixtureNestedInput
    formation?: MatchFormationUncheckedUpdateOneWithoutFixtureNestedInput
  }

  export type FixtureUncheckedUpdateManyWithoutAwayTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    homeTeamId?: StringFieldUpdateOperationsInput | string
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    tournamentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatchPlayerLogCreateManyPlayerInput = {
    id?: string
    logId: string
    eventType: $Enums.LogType
    minute?: number | null
    goalScorerId?: string | null
    assistPlayerId?: string | null
  }

  export type MatchPlayerLogUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: EnumLogTypeFieldUpdateOperationsInput | $Enums.LogType
    minute?: NullableIntFieldUpdateOperationsInput | number | null
    goalScorerId?: NullableStringFieldUpdateOperationsInput | string | null
    assistPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
    log?: MatchLogUpdateOneRequiredWithoutPlayerLogsNestedInput
  }

  export type MatchPlayerLogUncheckedUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    logId?: StringFieldUpdateOperationsInput | string
    eventType?: EnumLogTypeFieldUpdateOperationsInput | $Enums.LogType
    minute?: NullableIntFieldUpdateOperationsInput | number | null
    goalScorerId?: NullableStringFieldUpdateOperationsInput | string | null
    assistPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatchPlayerLogUncheckedUpdateManyWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    logId?: StringFieldUpdateOperationsInput | string
    eventType?: EnumLogTypeFieldUpdateOperationsInput | $Enums.LogType
    minute?: NullableIntFieldUpdateOperationsInput | number | null
    goalScorerId?: NullableStringFieldUpdateOperationsInput | string | null
    assistPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatchLogCreateManyFixtureInput = {
    id?: string
    logEntry: string
    createdAt?: Date | string
  }

  export type MatchLogUpdateWithoutFixtureInput = {
    id?: StringFieldUpdateOperationsInput | string
    logEntry?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerLogs?: MatchPlayerLogUpdateManyWithoutLogNestedInput
  }

  export type MatchLogUncheckedUpdateWithoutFixtureInput = {
    id?: StringFieldUpdateOperationsInput | string
    logEntry?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerLogs?: MatchPlayerLogUncheckedUpdateManyWithoutLogNestedInput
  }

  export type MatchLogUncheckedUpdateManyWithoutFixtureInput = {
    id?: StringFieldUpdateOperationsInput | string
    logEntry?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchPlayerLogCreateManyLogInput = {
    id?: string
    playerId: string
    eventType: $Enums.LogType
    minute?: number | null
    goalScorerId?: string | null
    assistPlayerId?: string | null
  }

  export type MatchPlayerLogUpdateWithoutLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: EnumLogTypeFieldUpdateOperationsInput | $Enums.LogType
    minute?: NullableIntFieldUpdateOperationsInput | number | null
    goalScorerId?: NullableStringFieldUpdateOperationsInput | string | null
    assistPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
    player?: PlayerProfileUpdateOneRequiredWithoutMatchLogsNestedInput
  }

  export type MatchPlayerLogUncheckedUpdateWithoutLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    eventType?: EnumLogTypeFieldUpdateOperationsInput | $Enums.LogType
    minute?: NullableIntFieldUpdateOperationsInput | number | null
    goalScorerId?: NullableStringFieldUpdateOperationsInput | string | null
    assistPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatchPlayerLogUncheckedUpdateManyWithoutLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    eventType?: EnumLogTypeFieldUpdateOperationsInput | $Enums.LogType
    minute?: NullableIntFieldUpdateOperationsInput | number | null
    goalScorerId?: NullableStringFieldUpdateOperationsInput | string | null
    assistPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FixtureCreateManyTournamentInput = {
    id?: string
    scheduledTime: Date | string
    venue: string
    status?: $Enums.MatchStatus
    homeTeamId: string
    awayTeamId: string
    homeScore?: number | null
    awayScore?: number | null
  }

  export type FixtureUpdateWithoutTournamentInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    homeTeam?: TeamUpdateOneRequiredWithoutHomeFixturesNestedInput
    awayTeam?: TeamUpdateOneRequiredWithoutAwayFixturesNestedInput
    matchLogs?: MatchLogUpdateManyWithoutFixtureNestedInput
    formation?: MatchFormationUpdateOneWithoutFixtureNestedInput
  }

  export type FixtureUncheckedUpdateWithoutTournamentInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    homeTeamId?: StringFieldUpdateOperationsInput | string
    awayTeamId?: StringFieldUpdateOperationsInput | string
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
    matchLogs?: MatchLogUncheckedUpdateManyWithoutFixtureNestedInput
    formation?: MatchFormationUncheckedUpdateOneWithoutFixtureNestedInput
  }

  export type FixtureUncheckedUpdateManyWithoutTournamentInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: StringFieldUpdateOperationsInput | string
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    homeTeamId?: StringFieldUpdateOperationsInput | string
    awayTeamId?: StringFieldUpdateOperationsInput | string
    homeScore?: NullableIntFieldUpdateOperationsInput | number | null
    awayScore?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
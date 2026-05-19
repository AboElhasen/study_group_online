
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
 * Model student
 * 
 */
export type student = $Result.DefaultSelection<Prisma.$studentPayload>
/**
 * Model profile
 * 
 */
export type profile = $Result.DefaultSelection<Prisma.$profilePayload>
/**
 * Model message
 * 
 */
export type message = $Result.DefaultSelection<Prisma.$messagePayload>
/**
 * Model groups
 * 
 */
export type groups = $Result.DefaultSelection<Prisma.$groupsPayload>
/**
 * Model notification
 * 
 */
export type notification = $Result.DefaultSelection<Prisma.$notificationPayload>
/**
 * Model resources
 * 
 */
export type resources = $Result.DefaultSelection<Prisma.$resourcesPayload>
/**
 * Model groupMembers
 * 
 */
export type groupMembers = $Result.DefaultSelection<Prisma.$groupMembersPayload>
/**
 * Model group_member_permission
 * 
 */
export type group_member_permission = $Result.DefaultSelection<Prisma.$group_member_permissionPayload>
/**
 * Model system_group_permission
 * 
 */
export type system_group_permission = $Result.DefaultSelection<Prisma.$system_group_permissionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const groups_type: {
  module: 'module',
  projet: 'projet',
  revision: 'revision'
};

export type groups_type = (typeof groups_type)[keyof typeof groups_type]


export const notification_type: {
  group: 'group',
  system: 'system'
};

export type notification_type = (typeof notification_type)[keyof typeof notification_type]


export const resources_validation: {
  accepted: 'accepted',
  rejected: 'rejected',
  waiting: 'waiting'
};

export type resources_validation = (typeof resources_validation)[keyof typeof resources_validation]


export const message_type: {
  text: 'text',
  image: 'image',
  video: 'video',
  file: 'file'
};

export type message_type = (typeof message_type)[keyof typeof message_type]


export const student_role: {
  student: 'student',
  admin: 'admin'
};

export type student_role = (typeof student_role)[keyof typeof student_role]


export const groups_visibility: {
  public: 'public',
  private: 'private'
};

export type groups_visibility = (typeof groups_visibility)[keyof typeof groups_visibility]


export const groupMembers_role: {
  admin: 'admin',
  member: 'member'
};

export type groupMembers_role = (typeof groupMembers_role)[keyof typeof groupMembers_role]


export const groupMembers_status: {
  accept: 'accept',
  waiting: 'waiting'
};

export type groupMembers_status = (typeof groupMembers_status)[keyof typeof groupMembers_status]


export const groups_validation: {
  valide: 'valide',
  waiting: 'waiting'
};

export type groups_validation = (typeof groups_validation)[keyof typeof groups_validation]

}

export type groups_type = $Enums.groups_type

export const groups_type: typeof $Enums.groups_type

export type notification_type = $Enums.notification_type

export const notification_type: typeof $Enums.notification_type

export type resources_validation = $Enums.resources_validation

export const resources_validation: typeof $Enums.resources_validation

export type message_type = $Enums.message_type

export const message_type: typeof $Enums.message_type

export type student_role = $Enums.student_role

export const student_role: typeof $Enums.student_role

export type groups_visibility = $Enums.groups_visibility

export const groups_visibility: typeof $Enums.groups_visibility

export type groupMembers_role = $Enums.groupMembers_role

export const groupMembers_role: typeof $Enums.groupMembers_role

export type groupMembers_status = $Enums.groupMembers_status

export const groupMembers_status: typeof $Enums.groupMembers_status

export type groups_validation = $Enums.groups_validation

export const groups_validation: typeof $Enums.groups_validation

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Students
 * const students = await prisma.student.findMany()
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
   * // Fetch zero or more Students
   * const students = await prisma.student.findMany()
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
   * `prisma.student`: Exposes CRUD operations for the **student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.studentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.profileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.messageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groups`: Exposes CRUD operations for the **groups** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.groups.findMany()
    * ```
    */
  get groups(): Prisma.groupsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.notificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resources`: Exposes CRUD operations for the **resources** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resources
    * const resources = await prisma.resources.findMany()
    * ```
    */
  get resources(): Prisma.resourcesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groupMembers`: Exposes CRUD operations for the **groupMembers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupMembers
    * const groupMembers = await prisma.groupMembers.findMany()
    * ```
    */
  get groupMembers(): Prisma.groupMembersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.group_member_permission`: Exposes CRUD operations for the **group_member_permission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Group_member_permissions
    * const group_member_permissions = await prisma.group_member_permission.findMany()
    * ```
    */
  get group_member_permission(): Prisma.group_member_permissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.system_group_permission`: Exposes CRUD operations for the **system_group_permission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more System_group_permissions
    * const system_group_permissions = await prisma.system_group_permission.findMany()
    * ```
    */
  get system_group_permission(): Prisma.system_group_permissionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
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
    student: 'student',
    profile: 'profile',
    message: 'message',
    groups: 'groups',
    notification: 'notification',
    resources: 'resources',
    groupMembers: 'groupMembers',
    group_member_permission: 'group_member_permission',
    system_group_permission: 'system_group_permission'
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
      modelProps: "student" | "profile" | "message" | "groups" | "notification" | "resources" | "groupMembers" | "group_member_permission" | "system_group_permission"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      student: {
        payload: Prisma.$studentPayload<ExtArgs>
        fields: Prisma.studentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.studentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.studentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          findFirst: {
            args: Prisma.studentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.studentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          findMany: {
            args: Prisma.studentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>[]
          }
          create: {
            args: Prisma.studentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          createMany: {
            args: Prisma.studentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.studentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          update: {
            args: Prisma.studentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          deleteMany: {
            args: Prisma.studentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.studentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.studentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.studentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.studentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      profile: {
        payload: Prisma.$profilePayload<ExtArgs>
        fields: Prisma.profileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.profileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.profileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilePayload>
          }
          findFirst: {
            args: Prisma.profileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.profileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilePayload>
          }
          findMany: {
            args: Prisma.profileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilePayload>[]
          }
          create: {
            args: Prisma.profileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilePayload>
          }
          createMany: {
            args: Prisma.profileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.profileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilePayload>
          }
          update: {
            args: Prisma.profileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilePayload>
          }
          deleteMany: {
            args: Prisma.profileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.profileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.profileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.profileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.profileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      message: {
        payload: Prisma.$messagePayload<ExtArgs>
        fields: Prisma.messageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.messageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.messageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload>
          }
          findFirst: {
            args: Prisma.messageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.messageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload>
          }
          findMany: {
            args: Prisma.messageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload>[]
          }
          create: {
            args: Prisma.messageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload>
          }
          createMany: {
            args: Prisma.messageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.messageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload>
          }
          update: {
            args: Prisma.messageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload>
          }
          deleteMany: {
            args: Prisma.messageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.messageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.messageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.messageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.messageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      groups: {
        payload: Prisma.$groupsPayload<ExtArgs>
        fields: Prisma.groupsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.groupsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.groupsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>
          }
          findFirst: {
            args: Prisma.groupsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.groupsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>
          }
          findMany: {
            args: Prisma.groupsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>[]
          }
          create: {
            args: Prisma.groupsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>
          }
          createMany: {
            args: Prisma.groupsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.groupsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>
          }
          update: {
            args: Prisma.groupsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>
          }
          deleteMany: {
            args: Prisma.groupsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.groupsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.groupsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>
          }
          aggregate: {
            args: Prisma.GroupsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroups>
          }
          groupBy: {
            args: Prisma.groupsGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupsGroupByOutputType>[]
          }
          count: {
            args: Prisma.groupsCountArgs<ExtArgs>
            result: $Utils.Optional<GroupsCountAggregateOutputType> | number
          }
        }
      }
      notification: {
        payload: Prisma.$notificationPayload<ExtArgs>
        fields: Prisma.notificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.notificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.notificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          findFirst: {
            args: Prisma.notificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.notificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          findMany: {
            args: Prisma.notificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>[]
          }
          create: {
            args: Prisma.notificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          createMany: {
            args: Prisma.notificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.notificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          update: {
            args: Prisma.notificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          deleteMany: {
            args: Prisma.notificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.notificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.notificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.notificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.notificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      resources: {
        payload: Prisma.$resourcesPayload<ExtArgs>
        fields: Prisma.resourcesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.resourcesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resourcesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.resourcesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resourcesPayload>
          }
          findFirst: {
            args: Prisma.resourcesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resourcesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.resourcesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resourcesPayload>
          }
          findMany: {
            args: Prisma.resourcesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resourcesPayload>[]
          }
          create: {
            args: Prisma.resourcesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resourcesPayload>
          }
          createMany: {
            args: Prisma.resourcesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.resourcesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resourcesPayload>
          }
          update: {
            args: Prisma.resourcesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resourcesPayload>
          }
          deleteMany: {
            args: Prisma.resourcesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.resourcesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.resourcesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resourcesPayload>
          }
          aggregate: {
            args: Prisma.ResourcesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResources>
          }
          groupBy: {
            args: Prisma.resourcesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResourcesGroupByOutputType>[]
          }
          count: {
            args: Prisma.resourcesCountArgs<ExtArgs>
            result: $Utils.Optional<ResourcesCountAggregateOutputType> | number
          }
        }
      }
      groupMembers: {
        payload: Prisma.$groupMembersPayload<ExtArgs>
        fields: Prisma.groupMembersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.groupMembersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupMembersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.groupMembersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupMembersPayload>
          }
          findFirst: {
            args: Prisma.groupMembersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupMembersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.groupMembersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupMembersPayload>
          }
          findMany: {
            args: Prisma.groupMembersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupMembersPayload>[]
          }
          create: {
            args: Prisma.groupMembersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupMembersPayload>
          }
          createMany: {
            args: Prisma.groupMembersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.groupMembersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupMembersPayload>
          }
          update: {
            args: Prisma.groupMembersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupMembersPayload>
          }
          deleteMany: {
            args: Prisma.groupMembersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.groupMembersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.groupMembersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupMembersPayload>
          }
          aggregate: {
            args: Prisma.GroupMembersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroupMembers>
          }
          groupBy: {
            args: Prisma.groupMembersGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupMembersGroupByOutputType>[]
          }
          count: {
            args: Prisma.groupMembersCountArgs<ExtArgs>
            result: $Utils.Optional<GroupMembersCountAggregateOutputType> | number
          }
        }
      }
      group_member_permission: {
        payload: Prisma.$group_member_permissionPayload<ExtArgs>
        fields: Prisma.group_member_permissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.group_member_permissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_member_permissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.group_member_permissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_member_permissionPayload>
          }
          findFirst: {
            args: Prisma.group_member_permissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_member_permissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.group_member_permissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_member_permissionPayload>
          }
          findMany: {
            args: Prisma.group_member_permissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_member_permissionPayload>[]
          }
          create: {
            args: Prisma.group_member_permissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_member_permissionPayload>
          }
          createMany: {
            args: Prisma.group_member_permissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.group_member_permissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_member_permissionPayload>
          }
          update: {
            args: Prisma.group_member_permissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_member_permissionPayload>
          }
          deleteMany: {
            args: Prisma.group_member_permissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.group_member_permissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.group_member_permissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$group_member_permissionPayload>
          }
          aggregate: {
            args: Prisma.Group_member_permissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroup_member_permission>
          }
          groupBy: {
            args: Prisma.group_member_permissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<Group_member_permissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.group_member_permissionCountArgs<ExtArgs>
            result: $Utils.Optional<Group_member_permissionCountAggregateOutputType> | number
          }
        }
      }
      system_group_permission: {
        payload: Prisma.$system_group_permissionPayload<ExtArgs>
        fields: Prisma.system_group_permissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.system_group_permissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$system_group_permissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.system_group_permissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$system_group_permissionPayload>
          }
          findFirst: {
            args: Prisma.system_group_permissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$system_group_permissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.system_group_permissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$system_group_permissionPayload>
          }
          findMany: {
            args: Prisma.system_group_permissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$system_group_permissionPayload>[]
          }
          create: {
            args: Prisma.system_group_permissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$system_group_permissionPayload>
          }
          createMany: {
            args: Prisma.system_group_permissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.system_group_permissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$system_group_permissionPayload>
          }
          update: {
            args: Prisma.system_group_permissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$system_group_permissionPayload>
          }
          deleteMany: {
            args: Prisma.system_group_permissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.system_group_permissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.system_group_permissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$system_group_permissionPayload>
          }
          aggregate: {
            args: Prisma.System_group_permissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystem_group_permission>
          }
          groupBy: {
            args: Prisma.system_group_permissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<System_group_permissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.system_group_permissionCountArgs<ExtArgs>
            result: $Utils.Optional<System_group_permissionCountAggregateOutputType> | number
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
    student?: studentOmit
    profile?: profileOmit
    message?: messageOmit
    groups?: groupsOmit
    notification?: notificationOmit
    resources?: resourcesOmit
    groupMembers?: groupMembersOmit
    group_member_permission?: group_member_permissionOmit
    system_group_permission?: system_group_permissionOmit
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
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    groupMembers: number
    receivedMessages: number
    sentMessages: number
    resources: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groupMembers?: boolean | StudentCountOutputTypeCountGroupMembersArgs
    receivedMessages?: boolean | StudentCountOutputTypeCountReceivedMessagesArgs
    sentMessages?: boolean | StudentCountOutputTypeCountSentMessagesArgs
    resources?: boolean | StudentCountOutputTypeCountResourcesArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountGroupMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: groupMembersWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountReceivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messageWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountSentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messageWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountResourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: resourcesWhereInput
  }


  /**
   * Count Type GroupsCountOutputType
   */

  export type GroupsCountOutputType = {
    groupMembers: number
    messages: number
    notifications: number
    resources: number
  }

  export type GroupsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groupMembers?: boolean | GroupsCountOutputTypeCountGroupMembersArgs
    messages?: boolean | GroupsCountOutputTypeCountMessagesArgs
    notifications?: boolean | GroupsCountOutputTypeCountNotificationsArgs
    resources?: boolean | GroupsCountOutputTypeCountResourcesArgs
  }

  // Custom InputTypes
  /**
   * GroupsCountOutputType without action
   */
  export type GroupsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupsCountOutputType
     */
    select?: GroupsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupsCountOutputType without action
   */
  export type GroupsCountOutputTypeCountGroupMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: groupMembersWhereInput
  }

  /**
   * GroupsCountOutputType without action
   */
  export type GroupsCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messageWhereInput
  }

  /**
   * GroupsCountOutputType without action
   */
  export type GroupsCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationWhereInput
  }

  /**
   * GroupsCountOutputType without action
   */
  export type GroupsCountOutputTypeCountResourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: resourcesWhereInput
  }


  /**
   * Count Type ResourcesCountOutputType
   */

  export type ResourcesCountOutputType = {
    messages: number
  }

  export type ResourcesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ResourcesCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ResourcesCountOutputType without action
   */
  export type ResourcesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourcesCountOutputType
     */
    select?: ResourcesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ResourcesCountOutputType without action
   */
  export type ResourcesCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messageWhereInput
  }


  /**
   * Count Type GroupMembersCountOutputType
   */

  export type GroupMembersCountOutputType = {
    group_member_permission: number
  }

  export type GroupMembersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group_member_permission?: boolean | GroupMembersCountOutputTypeCountGroup_member_permissionArgs
  }

  // Custom InputTypes
  /**
   * GroupMembersCountOutputType without action
   */
  export type GroupMembersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMembersCountOutputType
     */
    select?: GroupMembersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupMembersCountOutputType without action
   */
  export type GroupMembersCountOutputTypeCountGroup_member_permissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: group_member_permissionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    Mat: number | null
  }

  export type StudentSumAggregateOutputType = {
    Mat: number | null
  }

  export type StudentMinAggregateOutputType = {
    Mat: number | null
    name: string | null
    email: string | null
    role: $Enums.student_role | null
    password: string | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentMaxAggregateOutputType = {
    Mat: number | null
    name: string | null
    email: string | null
    role: $Enums.student_role | null
    password: string | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentCountAggregateOutputType = {
    Mat: number
    name: number
    email: number
    role: number
    password: number
    resetToken: number
    resetTokenExpiry: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    Mat?: true
  }

  export type StudentSumAggregateInputType = {
    Mat?: true
  }

  export type StudentMinAggregateInputType = {
    Mat?: true
    name?: true
    email?: true
    role?: true
    password?: true
    resetToken?: true
    resetTokenExpiry?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentMaxAggregateInputType = {
    Mat?: true
    name?: true
    email?: true
    role?: true
    password?: true
    resetToken?: true
    resetTokenExpiry?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentCountAggregateInputType = {
    Mat?: true
    name?: true
    email?: true
    role?: true
    password?: true
    resetToken?: true
    resetTokenExpiry?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which student to aggregate.
     */
    where?: studentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: studentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type studentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: studentWhereInput
    orderBy?: studentOrderByWithAggregationInput | studentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: studentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    Mat: number
    name: string
    email: string
    role: $Enums.student_role
    password: string
    resetToken: string | null
    resetTokenExpiry: Date | null
    createdAt: Date
    updatedAt: Date
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends studentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type studentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Mat?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    password?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    groupMembers?: boolean | student$groupMembersArgs<ExtArgs>
    receivedMessages?: boolean | student$receivedMessagesArgs<ExtArgs>
    sentMessages?: boolean | student$sentMessagesArgs<ExtArgs>
    profile?: boolean | student$profileArgs<ExtArgs>
    resources?: boolean | student$resourcesArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>



  export type studentSelectScalar = {
    Mat?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    password?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type studentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Mat" | "name" | "email" | "role" | "password" | "resetToken" | "resetTokenExpiry" | "createdAt" | "updatedAt", ExtArgs["result"]["student"]>
  export type studentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groupMembers?: boolean | student$groupMembersArgs<ExtArgs>
    receivedMessages?: boolean | student$receivedMessagesArgs<ExtArgs>
    sentMessages?: boolean | student$sentMessagesArgs<ExtArgs>
    profile?: boolean | student$profileArgs<ExtArgs>
    resources?: boolean | student$resourcesArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $studentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "student"
    objects: {
      groupMembers: Prisma.$groupMembersPayload<ExtArgs>[]
      receivedMessages: Prisma.$messagePayload<ExtArgs>[]
      sentMessages: Prisma.$messagePayload<ExtArgs>[]
      profile: Prisma.$profilePayload<ExtArgs> | null
      resources: Prisma.$resourcesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Mat: number
      name: string
      email: string
      role: $Enums.student_role
      password: string
      resetToken: string | null
      resetTokenExpiry: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type studentGetPayload<S extends boolean | null | undefined | studentDefaultArgs> = $Result.GetResult<Prisma.$studentPayload, S>

  type studentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<studentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface studentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['student'], meta: { name: 'student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {studentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends studentFindUniqueArgs>(args: SelectSubset<T, studentFindUniqueArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {studentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends studentFindUniqueOrThrowArgs>(args: SelectSubset<T, studentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends studentFindFirstArgs>(args?: SelectSubset<T, studentFindFirstArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends studentFindFirstOrThrowArgs>(args?: SelectSubset<T, studentFindFirstOrThrowArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `Mat`
     * const studentWithMatOnly = await prisma.student.findMany({ select: { Mat: true } })
     * 
     */
    findMany<T extends studentFindManyArgs>(args?: SelectSubset<T, studentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {studentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends studentCreateArgs>(args: SelectSubset<T, studentCreateArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {studentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends studentCreateManyArgs>(args?: SelectSubset<T, studentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Student.
     * @param {studentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends studentDeleteArgs>(args: SelectSubset<T, studentDeleteArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {studentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends studentUpdateArgs>(args: SelectSubset<T, studentUpdateArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {studentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends studentDeleteManyArgs>(args?: SelectSubset<T, studentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends studentUpdateManyArgs>(args: SelectSubset<T, studentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Student.
     * @param {studentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends studentUpsertArgs>(args: SelectSubset<T, studentUpsertArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends studentCountArgs>(
      args?: Subset<T, studentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentGroupByArgs} args - Group by arguments.
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
      T extends studentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: studentGroupByArgs['orderBy'] }
        : { orderBy?: studentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, studentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the student model
   */
  readonly fields: studentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__studentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    groupMembers<T extends student$groupMembersArgs<ExtArgs> = {}>(args?: Subset<T, student$groupMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$groupMembersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedMessages<T extends student$receivedMessagesArgs<ExtArgs> = {}>(args?: Subset<T, student$receivedMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentMessages<T extends student$sentMessagesArgs<ExtArgs> = {}>(args?: Subset<T, student$sentMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profile<T extends student$profileArgs<ExtArgs> = {}>(args?: Subset<T, student$profileArgs<ExtArgs>>): Prisma__profileClient<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    resources<T extends student$resourcesArgs<ExtArgs> = {}>(args?: Subset<T, student$resourcesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$resourcesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the student model
   */
  interface studentFieldRefs {
    readonly Mat: FieldRef<"student", 'Int'>
    readonly name: FieldRef<"student", 'String'>
    readonly email: FieldRef<"student", 'String'>
    readonly role: FieldRef<"student", 'student_role'>
    readonly password: FieldRef<"student", 'String'>
    readonly resetToken: FieldRef<"student", 'String'>
    readonly resetTokenExpiry: FieldRef<"student", 'DateTime'>
    readonly createdAt: FieldRef<"student", 'DateTime'>
    readonly updatedAt: FieldRef<"student", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * student findUnique
   */
  export type studentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which student to fetch.
     */
    where: studentWhereUniqueInput
  }

  /**
   * student findUniqueOrThrow
   */
  export type studentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which student to fetch.
     */
    where: studentWhereUniqueInput
  }

  /**
   * student findFirst
   */
  export type studentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which student to fetch.
     */
    where?: studentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for students.
     */
    cursor?: studentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * student findFirstOrThrow
   */
  export type studentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which student to fetch.
     */
    where?: studentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for students.
     */
    cursor?: studentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * student findMany
   */
  export type studentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which students to fetch.
     */
    where?: studentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing students.
     */
    cursor?: studentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * student create
   */
  export type studentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * The data needed to create a student.
     */
    data: XOR<studentCreateInput, studentUncheckedCreateInput>
  }

  /**
   * student createMany
   */
  export type studentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many students.
     */
    data: studentCreateManyInput | studentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * student update
   */
  export type studentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * The data needed to update a student.
     */
    data: XOR<studentUpdateInput, studentUncheckedUpdateInput>
    /**
     * Choose, which student to update.
     */
    where: studentWhereUniqueInput
  }

  /**
   * student updateMany
   */
  export type studentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update students.
     */
    data: XOR<studentUpdateManyMutationInput, studentUncheckedUpdateManyInput>
    /**
     * Filter which students to update
     */
    where?: studentWhereInput
    /**
     * Limit how many students to update.
     */
    limit?: number
  }

  /**
   * student upsert
   */
  export type studentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * The filter to search for the student to update in case it exists.
     */
    where: studentWhereUniqueInput
    /**
     * In case the student found by the `where` argument doesn't exist, create a new student with this data.
     */
    create: XOR<studentCreateInput, studentUncheckedCreateInput>
    /**
     * In case the student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<studentUpdateInput, studentUncheckedUpdateInput>
  }

  /**
   * student delete
   */
  export type studentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter which student to delete.
     */
    where: studentWhereUniqueInput
  }

  /**
   * student deleteMany
   */
  export type studentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which students to delete
     */
    where?: studentWhereInput
    /**
     * Limit how many students to delete.
     */
    limit?: number
  }

  /**
   * student.groupMembers
   */
  export type student$groupMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groupMembers
     */
    select?: groupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groupMembers
     */
    omit?: groupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupMembersInclude<ExtArgs> | null
    where?: groupMembersWhereInput
    orderBy?: groupMembersOrderByWithRelationInput | groupMembersOrderByWithRelationInput[]
    cursor?: groupMembersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupMembersScalarFieldEnum | GroupMembersScalarFieldEnum[]
  }

  /**
   * student.receivedMessages
   */
  export type student$receivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    where?: messageWhereInput
    orderBy?: messageOrderByWithRelationInput | messageOrderByWithRelationInput[]
    cursor?: messageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * student.sentMessages
   */
  export type student$sentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    where?: messageWhereInput
    orderBy?: messageOrderByWithRelationInput | messageOrderByWithRelationInput[]
    cursor?: messageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * student.profile
   */
  export type student$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile
     */
    omit?: profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profileInclude<ExtArgs> | null
    where?: profileWhereInput
  }

  /**
   * student.resources
   */
  export type student$resourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resources
     */
    select?: resourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resources
     */
    omit?: resourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resourcesInclude<ExtArgs> | null
    where?: resourcesWhereInput
    orderBy?: resourcesOrderByWithRelationInput | resourcesOrderByWithRelationInput[]
    cursor?: resourcesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResourcesScalarFieldEnum | ResourcesScalarFieldEnum[]
  }

  /**
   * student without action
   */
  export type studentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
  }


  /**
   * Model profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    id: number | null
    studentId: number | null
  }

  export type ProfileSumAggregateOutputType = {
    id: number | null
    studentId: number | null
  }

  export type ProfileMinAggregateOutputType = {
    id: number | null
    studentId: number | null
    image: string | null
    bio: string | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: number | null
    studentId: number | null
    image: string | null
    bio: string | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    studentId: number
    image: number
    bio: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    id?: true
    studentId?: true
  }

  export type ProfileSumAggregateInputType = {
    id?: true
    studentId?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    studentId?: true
    image?: true
    bio?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    studentId?: true
    image?: true
    bio?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    studentId?: true
    image?: true
    bio?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profile to aggregate.
     */
    where?: profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: profileOrderByWithRelationInput | profileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type profileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: profileWhereInput
    orderBy?: profileOrderByWithAggregationInput | profileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: profileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: number
    studentId: number
    image: string | null
    bio: string | null
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends profileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type profileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    image?: boolean
    bio?: boolean
    student?: boolean | studentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>



  export type profileSelectScalar = {
    id?: boolean
    studentId?: boolean
    image?: boolean
    bio?: boolean
  }

  export type profileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "image" | "bio", ExtArgs["result"]["profile"]>
  export type profileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | studentDefaultArgs<ExtArgs>
  }

  export type $profilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "profile"
    objects: {
      student: Prisma.$studentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentId: number
      image: string | null
      bio: string | null
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type profileGetPayload<S extends boolean | null | undefined | profileDefaultArgs> = $Result.GetResult<Prisma.$profilePayload, S>

  type profileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<profileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface profileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['profile'], meta: { name: 'profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {profileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends profileFindUniqueArgs>(args: SelectSubset<T, profileFindUniqueArgs<ExtArgs>>): Prisma__profileClient<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {profileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends profileFindUniqueOrThrowArgs>(args: SelectSubset<T, profileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__profileClient<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends profileFindFirstArgs>(args?: SelectSubset<T, profileFindFirstArgs<ExtArgs>>): Prisma__profileClient<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends profileFindFirstOrThrowArgs>(args?: SelectSubset<T, profileFindFirstOrThrowArgs<ExtArgs>>): Prisma__profileClient<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends profileFindManyArgs>(args?: SelectSubset<T, profileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {profileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends profileCreateArgs>(args: SelectSubset<T, profileCreateArgs<ExtArgs>>): Prisma__profileClient<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {profileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends profileCreateManyArgs>(args?: SelectSubset<T, profileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Profile.
     * @param {profileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends profileDeleteArgs>(args: SelectSubset<T, profileDeleteArgs<ExtArgs>>): Prisma__profileClient<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {profileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends profileUpdateArgs>(args: SelectSubset<T, profileUpdateArgs<ExtArgs>>): Prisma__profileClient<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {profileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends profileDeleteManyArgs>(args?: SelectSubset<T, profileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends profileUpdateManyArgs>(args: SelectSubset<T, profileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Profile.
     * @param {profileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends profileUpsertArgs>(args: SelectSubset<T, profileUpsertArgs<ExtArgs>>): Prisma__profileClient<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends profileCountArgs>(
      args?: Subset<T, profileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileGroupByArgs} args - Group by arguments.
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
      T extends profileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: profileGroupByArgs['orderBy'] }
        : { orderBy?: profileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, profileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the profile model
   */
  readonly fields: profileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__profileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends studentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, studentDefaultArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the profile model
   */
  interface profileFieldRefs {
    readonly id: FieldRef<"profile", 'Int'>
    readonly studentId: FieldRef<"profile", 'Int'>
    readonly image: FieldRef<"profile", 'String'>
    readonly bio: FieldRef<"profile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * profile findUnique
   */
  export type profileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile
     */
    omit?: profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profileInclude<ExtArgs> | null
    /**
     * Filter, which profile to fetch.
     */
    where: profileWhereUniqueInput
  }

  /**
   * profile findUniqueOrThrow
   */
  export type profileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile
     */
    omit?: profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profileInclude<ExtArgs> | null
    /**
     * Filter, which profile to fetch.
     */
    where: profileWhereUniqueInput
  }

  /**
   * profile findFirst
   */
  export type profileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile
     */
    omit?: profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profileInclude<ExtArgs> | null
    /**
     * Filter, which profile to fetch.
     */
    where?: profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: profileOrderByWithRelationInput | profileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profiles.
     */
    cursor?: profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * profile findFirstOrThrow
   */
  export type profileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile
     */
    omit?: profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profileInclude<ExtArgs> | null
    /**
     * Filter, which profile to fetch.
     */
    where?: profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: profileOrderByWithRelationInput | profileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profiles.
     */
    cursor?: profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * profile findMany
   */
  export type profileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile
     */
    omit?: profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profileInclude<ExtArgs> | null
    /**
     * Filter, which profiles to fetch.
     */
    where?: profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: profileOrderByWithRelationInput | profileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing profiles.
     */
    cursor?: profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * profile create
   */
  export type profileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile
     */
    omit?: profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profileInclude<ExtArgs> | null
    /**
     * The data needed to create a profile.
     */
    data: XOR<profileCreateInput, profileUncheckedCreateInput>
  }

  /**
   * profile createMany
   */
  export type profileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many profiles.
     */
    data: profileCreateManyInput | profileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * profile update
   */
  export type profileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile
     */
    omit?: profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profileInclude<ExtArgs> | null
    /**
     * The data needed to update a profile.
     */
    data: XOR<profileUpdateInput, profileUncheckedUpdateInput>
    /**
     * Choose, which profile to update.
     */
    where: profileWhereUniqueInput
  }

  /**
   * profile updateMany
   */
  export type profileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update profiles.
     */
    data: XOR<profileUpdateManyMutationInput, profileUncheckedUpdateManyInput>
    /**
     * Filter which profiles to update
     */
    where?: profileWhereInput
    /**
     * Limit how many profiles to update.
     */
    limit?: number
  }

  /**
   * profile upsert
   */
  export type profileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile
     */
    omit?: profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profileInclude<ExtArgs> | null
    /**
     * The filter to search for the profile to update in case it exists.
     */
    where: profileWhereUniqueInput
    /**
     * In case the profile found by the `where` argument doesn't exist, create a new profile with this data.
     */
    create: XOR<profileCreateInput, profileUncheckedCreateInput>
    /**
     * In case the profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<profileUpdateInput, profileUncheckedUpdateInput>
  }

  /**
   * profile delete
   */
  export type profileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile
     */
    omit?: profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profileInclude<ExtArgs> | null
    /**
     * Filter which profile to delete.
     */
    where: profileWhereUniqueInput
  }

  /**
   * profile deleteMany
   */
  export type profileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profiles to delete
     */
    where?: profileWhereInput
    /**
     * Limit how many profiles to delete.
     */
    limit?: number
  }

  /**
   * profile without action
   */
  export type profileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile
     */
    omit?: profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profileInclude<ExtArgs> | null
  }


  /**
   * Model message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    id: number | null
    senderId: number | null
    receiverId: number | null
    groupId: number | null
    resourceId: number | null
  }

  export type MessageSumAggregateOutputType = {
    id: number | null
    senderId: number | null
    receiverId: number | null
    groupId: number | null
    resourceId: number | null
  }

  export type MessageMinAggregateOutputType = {
    id: number | null
    content: string | null
    senderId: number | null
    receiverId: number | null
    groupId: number | null
    isRead: boolean | null
    createdAt: Date | null
    type: $Enums.message_type | null
    resourceId: number | null
  }

  export type MessageMaxAggregateOutputType = {
    id: number | null
    content: string | null
    senderId: number | null
    receiverId: number | null
    groupId: number | null
    isRead: boolean | null
    createdAt: Date | null
    type: $Enums.message_type | null
    resourceId: number | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    content: number
    senderId: number
    receiverId: number
    groupId: number
    isRead: number
    createdAt: number
    type: number
    resourceId: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    groupId?: true
    resourceId?: true
  }

  export type MessageSumAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    groupId?: true
    resourceId?: true
  }

  export type MessageMinAggregateInputType = {
    id?: true
    content?: true
    senderId?: true
    receiverId?: true
    groupId?: true
    isRead?: true
    createdAt?: true
    type?: true
    resourceId?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    content?: true
    senderId?: true
    receiverId?: true
    groupId?: true
    isRead?: true
    createdAt?: true
    type?: true
    resourceId?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    content?: true
    senderId?: true
    receiverId?: true
    groupId?: true
    isRead?: true
    createdAt?: true
    type?: true
    resourceId?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which message to aggregate.
     */
    where?: messageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messageOrderByWithRelationInput | messageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: messageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type messageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messageWhereInput
    orderBy?: messageOrderByWithAggregationInput | messageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: messageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: number
    content: string
    senderId: number
    receiverId: number | null
    groupId: number | null
    isRead: boolean
    createdAt: Date
    type: $Enums.message_type
    resourceId: number | null
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends messageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type messageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    senderId?: boolean
    receiverId?: boolean
    groupId?: boolean
    isRead?: boolean
    createdAt?: boolean
    type?: boolean
    resourceId?: boolean
    group?: boolean | message$groupArgs<ExtArgs>
    receiver?: boolean | message$receiverArgs<ExtArgs>
    resource?: boolean | message$resourceArgs<ExtArgs>
    sender?: boolean | studentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>



  export type messageSelectScalar = {
    id?: boolean
    content?: boolean
    senderId?: boolean
    receiverId?: boolean
    groupId?: boolean
    isRead?: boolean
    createdAt?: boolean
    type?: boolean
    resourceId?: boolean
  }

  export type messageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "senderId" | "receiverId" | "groupId" | "isRead" | "createdAt" | "type" | "resourceId", ExtArgs["result"]["message"]>
  export type messageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | message$groupArgs<ExtArgs>
    receiver?: boolean | message$receiverArgs<ExtArgs>
    resource?: boolean | message$resourceArgs<ExtArgs>
    sender?: boolean | studentDefaultArgs<ExtArgs>
  }

  export type $messagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "message"
    objects: {
      group: Prisma.$groupsPayload<ExtArgs> | null
      receiver: Prisma.$studentPayload<ExtArgs> | null
      resource: Prisma.$resourcesPayload<ExtArgs> | null
      sender: Prisma.$studentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      senderId: number
      receiverId: number | null
      groupId: number | null
      isRead: boolean
      createdAt: Date
      type: $Enums.message_type
      resourceId: number | null
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type messageGetPayload<S extends boolean | null | undefined | messageDefaultArgs> = $Result.GetResult<Prisma.$messagePayload, S>

  type messageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<messageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface messageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['message'], meta: { name: 'message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {messageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends messageFindUniqueArgs>(args: SelectSubset<T, messageFindUniqueArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {messageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends messageFindUniqueOrThrowArgs>(args: SelectSubset<T, messageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends messageFindFirstArgs>(args?: SelectSubset<T, messageFindFirstArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends messageFindFirstOrThrowArgs>(args?: SelectSubset<T, messageFindFirstOrThrowArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends messageFindManyArgs>(args?: SelectSubset<T, messageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {messageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends messageCreateArgs>(args: SelectSubset<T, messageCreateArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {messageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends messageCreateManyArgs>(args?: SelectSubset<T, messageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Message.
     * @param {messageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends messageDeleteArgs>(args: SelectSubset<T, messageDeleteArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {messageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends messageUpdateArgs>(args: SelectSubset<T, messageUpdateArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {messageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends messageDeleteManyArgs>(args?: SelectSubset<T, messageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends messageUpdateManyArgs>(args: SelectSubset<T, messageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Message.
     * @param {messageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends messageUpsertArgs>(args: SelectSubset<T, messageUpsertArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends messageCountArgs>(
      args?: Subset<T, messageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messageGroupByArgs} args - Group by arguments.
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
      T extends messageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: messageGroupByArgs['orderBy'] }
        : { orderBy?: messageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, messageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the message model
   */
  readonly fields: messageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__messageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends message$groupArgs<ExtArgs> = {}>(args?: Subset<T, message$groupArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    receiver<T extends message$receiverArgs<ExtArgs> = {}>(args?: Subset<T, message$receiverArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    resource<T extends message$resourceArgs<ExtArgs> = {}>(args?: Subset<T, message$resourceArgs<ExtArgs>>): Prisma__resourcesClient<$Result.GetResult<Prisma.$resourcesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sender<T extends studentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, studentDefaultArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the message model
   */
  interface messageFieldRefs {
    readonly id: FieldRef<"message", 'Int'>
    readonly content: FieldRef<"message", 'String'>
    readonly senderId: FieldRef<"message", 'Int'>
    readonly receiverId: FieldRef<"message", 'Int'>
    readonly groupId: FieldRef<"message", 'Int'>
    readonly isRead: FieldRef<"message", 'Boolean'>
    readonly createdAt: FieldRef<"message", 'DateTime'>
    readonly type: FieldRef<"message", 'message_type'>
    readonly resourceId: FieldRef<"message", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * message findUnique
   */
  export type messageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * Filter, which message to fetch.
     */
    where: messageWhereUniqueInput
  }

  /**
   * message findUniqueOrThrow
   */
  export type messageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * Filter, which message to fetch.
     */
    where: messageWhereUniqueInput
  }

  /**
   * message findFirst
   */
  export type messageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * Filter, which message to fetch.
     */
    where?: messageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messageOrderByWithRelationInput | messageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * message findFirstOrThrow
   */
  export type messageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * Filter, which message to fetch.
     */
    where?: messageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messageOrderByWithRelationInput | messageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * message findMany
   */
  export type messageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messageOrderByWithRelationInput | messageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing messages.
     */
    cursor?: messageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * message create
   */
  export type messageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * The data needed to create a message.
     */
    data: XOR<messageCreateInput, messageUncheckedCreateInput>
  }

  /**
   * message createMany
   */
  export type messageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many messages.
     */
    data: messageCreateManyInput | messageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * message update
   */
  export type messageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * The data needed to update a message.
     */
    data: XOR<messageUpdateInput, messageUncheckedUpdateInput>
    /**
     * Choose, which message to update.
     */
    where: messageWhereUniqueInput
  }

  /**
   * message updateMany
   */
  export type messageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update messages.
     */
    data: XOR<messageUpdateManyMutationInput, messageUncheckedUpdateManyInput>
    /**
     * Filter which messages to update
     */
    where?: messageWhereInput
    /**
     * Limit how many messages to update.
     */
    limit?: number
  }

  /**
   * message upsert
   */
  export type messageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * The filter to search for the message to update in case it exists.
     */
    where: messageWhereUniqueInput
    /**
     * In case the message found by the `where` argument doesn't exist, create a new message with this data.
     */
    create: XOR<messageCreateInput, messageUncheckedCreateInput>
    /**
     * In case the message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<messageUpdateInput, messageUncheckedUpdateInput>
  }

  /**
   * message delete
   */
  export type messageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * Filter which message to delete.
     */
    where: messageWhereUniqueInput
  }

  /**
   * message deleteMany
   */
  export type messageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which messages to delete
     */
    where?: messageWhereInput
    /**
     * Limit how many messages to delete.
     */
    limit?: number
  }

  /**
   * message.group
   */
  export type message$groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    where?: groupsWhereInput
  }

  /**
   * message.receiver
   */
  export type message$receiverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    where?: studentWhereInput
  }

  /**
   * message.resource
   */
  export type message$resourceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resources
     */
    select?: resourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resources
     */
    omit?: resourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resourcesInclude<ExtArgs> | null
    where?: resourcesWhereInput
  }

  /**
   * message without action
   */
  export type messageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
  }


  /**
   * Model groups
   */

  export type AggregateGroups = {
    _count: GroupsCountAggregateOutputType | null
    _avg: GroupsAvgAggregateOutputType | null
    _sum: GroupsSumAggregateOutputType | null
    _min: GroupsMinAggregateOutputType | null
    _max: GroupsMaxAggregateOutputType | null
  }

  export type GroupsAvgAggregateOutputType = {
    id: number | null
  }

  export type GroupsSumAggregateOutputType = {
    id: number | null
  }

  export type GroupsMinAggregateOutputType = {
    id: number | null
    type: $Enums.groups_type | null
    visibility: $Enums.groups_visibility | null
    name: string | null
    description: string | null
    validation: $Enums.groups_validation | null
    createdAt: Date | null
  }

  export type GroupsMaxAggregateOutputType = {
    id: number | null
    type: $Enums.groups_type | null
    visibility: $Enums.groups_visibility | null
    name: string | null
    description: string | null
    validation: $Enums.groups_validation | null
    createdAt: Date | null
  }

  export type GroupsCountAggregateOutputType = {
    id: number
    type: number
    visibility: number
    name: number
    description: number
    validation: number
    createdAt: number
    _all: number
  }


  export type GroupsAvgAggregateInputType = {
    id?: true
  }

  export type GroupsSumAggregateInputType = {
    id?: true
  }

  export type GroupsMinAggregateInputType = {
    id?: true
    type?: true
    visibility?: true
    name?: true
    description?: true
    validation?: true
    createdAt?: true
  }

  export type GroupsMaxAggregateInputType = {
    id?: true
    type?: true
    visibility?: true
    name?: true
    description?: true
    validation?: true
    createdAt?: true
  }

  export type GroupsCountAggregateInputType = {
    id?: true
    type?: true
    visibility?: true
    name?: true
    description?: true
    validation?: true
    createdAt?: true
    _all?: true
  }

  export type GroupsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which groups to aggregate.
     */
    where?: groupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of groups to fetch.
     */
    orderBy?: groupsOrderByWithRelationInput | groupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: groupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned groups
    **/
    _count?: true | GroupsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupsMaxAggregateInputType
  }

  export type GetGroupsAggregateType<T extends GroupsAggregateArgs> = {
        [P in keyof T & keyof AggregateGroups]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroups[P]>
      : GetScalarType<T[P], AggregateGroups[P]>
  }




  export type groupsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: groupsWhereInput
    orderBy?: groupsOrderByWithAggregationInput | groupsOrderByWithAggregationInput[]
    by: GroupsScalarFieldEnum[] | GroupsScalarFieldEnum
    having?: groupsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupsCountAggregateInputType | true
    _avg?: GroupsAvgAggregateInputType
    _sum?: GroupsSumAggregateInputType
    _min?: GroupsMinAggregateInputType
    _max?: GroupsMaxAggregateInputType
  }

  export type GroupsGroupByOutputType = {
    id: number
    type: $Enums.groups_type
    visibility: $Enums.groups_visibility
    name: string
    description: string
    validation: $Enums.groups_validation
    createdAt: Date
    _count: GroupsCountAggregateOutputType | null
    _avg: GroupsAvgAggregateOutputType | null
    _sum: GroupsSumAggregateOutputType | null
    _min: GroupsMinAggregateOutputType | null
    _max: GroupsMaxAggregateOutputType | null
  }

  type GetGroupsGroupByPayload<T extends groupsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupsGroupByOutputType[P]>
            : GetScalarType<T[P], GroupsGroupByOutputType[P]>
        }
      >
    >


  export type groupsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    visibility?: boolean
    name?: boolean
    description?: boolean
    validation?: boolean
    createdAt?: boolean
    groupMembers?: boolean | groups$groupMembersArgs<ExtArgs>
    messages?: boolean | groups$messagesArgs<ExtArgs>
    notifications?: boolean | groups$notificationsArgs<ExtArgs>
    resources?: boolean | groups$resourcesArgs<ExtArgs>
    system_group_permission?: boolean | groups$system_group_permissionArgs<ExtArgs>
    _count?: boolean | GroupsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groups"]>



  export type groupsSelectScalar = {
    id?: boolean
    type?: boolean
    visibility?: boolean
    name?: boolean
    description?: boolean
    validation?: boolean
    createdAt?: boolean
  }

  export type groupsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "visibility" | "name" | "description" | "validation" | "createdAt", ExtArgs["result"]["groups"]>
  export type groupsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groupMembers?: boolean | groups$groupMembersArgs<ExtArgs>
    messages?: boolean | groups$messagesArgs<ExtArgs>
    notifications?: boolean | groups$notificationsArgs<ExtArgs>
    resources?: boolean | groups$resourcesArgs<ExtArgs>
    system_group_permission?: boolean | groups$system_group_permissionArgs<ExtArgs>
    _count?: boolean | GroupsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $groupsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "groups"
    objects: {
      groupMembers: Prisma.$groupMembersPayload<ExtArgs>[]
      messages: Prisma.$messagePayload<ExtArgs>[]
      notifications: Prisma.$notificationPayload<ExtArgs>[]
      resources: Prisma.$resourcesPayload<ExtArgs>[]
      system_group_permission: Prisma.$system_group_permissionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: $Enums.groups_type
      visibility: $Enums.groups_visibility
      name: string
      description: string
      validation: $Enums.groups_validation
      createdAt: Date
    }, ExtArgs["result"]["groups"]>
    composites: {}
  }

  type groupsGetPayload<S extends boolean | null | undefined | groupsDefaultArgs> = $Result.GetResult<Prisma.$groupsPayload, S>

  type groupsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<groupsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupsCountAggregateInputType | true
    }

  export interface groupsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['groups'], meta: { name: 'groups' } }
    /**
     * Find zero or one Groups that matches the filter.
     * @param {groupsFindUniqueArgs} args - Arguments to find a Groups
     * @example
     * // Get one Groups
     * const groups = await prisma.groups.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends groupsFindUniqueArgs>(args: SelectSubset<T, groupsFindUniqueArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Groups that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {groupsFindUniqueOrThrowArgs} args - Arguments to find a Groups
     * @example
     * // Get one Groups
     * const groups = await prisma.groups.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends groupsFindUniqueOrThrowArgs>(args: SelectSubset<T, groupsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupsFindFirstArgs} args - Arguments to find a Groups
     * @example
     * // Get one Groups
     * const groups = await prisma.groups.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends groupsFindFirstArgs>(args?: SelectSubset<T, groupsFindFirstArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Groups that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupsFindFirstOrThrowArgs} args - Arguments to find a Groups
     * @example
     * // Get one Groups
     * const groups = await prisma.groups.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends groupsFindFirstOrThrowArgs>(args?: SelectSubset<T, groupsFindFirstOrThrowArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.groups.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.groups.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupsWithIdOnly = await prisma.groups.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends groupsFindManyArgs>(args?: SelectSubset<T, groupsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Groups.
     * @param {groupsCreateArgs} args - Arguments to create a Groups.
     * @example
     * // Create one Groups
     * const Groups = await prisma.groups.create({
     *   data: {
     *     // ... data to create a Groups
     *   }
     * })
     * 
     */
    create<T extends groupsCreateArgs>(args: SelectSubset<T, groupsCreateArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Groups.
     * @param {groupsCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const groups = await prisma.groups.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends groupsCreateManyArgs>(args?: SelectSubset<T, groupsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Groups.
     * @param {groupsDeleteArgs} args - Arguments to delete one Groups.
     * @example
     * // Delete one Groups
     * const Groups = await prisma.groups.delete({
     *   where: {
     *     // ... filter to delete one Groups
     *   }
     * })
     * 
     */
    delete<T extends groupsDeleteArgs>(args: SelectSubset<T, groupsDeleteArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Groups.
     * @param {groupsUpdateArgs} args - Arguments to update one Groups.
     * @example
     * // Update one Groups
     * const groups = await prisma.groups.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends groupsUpdateArgs>(args: SelectSubset<T, groupsUpdateArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Groups.
     * @param {groupsDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.groups.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends groupsDeleteManyArgs>(args?: SelectSubset<T, groupsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const groups = await prisma.groups.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends groupsUpdateManyArgs>(args: SelectSubset<T, groupsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Groups.
     * @param {groupsUpsertArgs} args - Arguments to update or create a Groups.
     * @example
     * // Update or create a Groups
     * const groups = await prisma.groups.upsert({
     *   create: {
     *     // ... data to create a Groups
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Groups we want to update
     *   }
     * })
     */
    upsert<T extends groupsUpsertArgs>(args: SelectSubset<T, groupsUpsertArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupsCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.groups.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends groupsCountArgs>(
      args?: Subset<T, groupsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupsAggregateArgs>(args: Subset<T, GroupsAggregateArgs>): Prisma.PrismaPromise<GetGroupsAggregateType<T>>

    /**
     * Group by Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupsGroupByArgs} args - Group by arguments.
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
      T extends groupsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: groupsGroupByArgs['orderBy'] }
        : { orderBy?: groupsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, groupsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the groups model
   */
  readonly fields: groupsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for groups.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__groupsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    groupMembers<T extends groups$groupMembersArgs<ExtArgs> = {}>(args?: Subset<T, groups$groupMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$groupMembersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends groups$messagesArgs<ExtArgs> = {}>(args?: Subset<T, groups$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends groups$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, groups$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    resources<T extends groups$resourcesArgs<ExtArgs> = {}>(args?: Subset<T, groups$resourcesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$resourcesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    system_group_permission<T extends groups$system_group_permissionArgs<ExtArgs> = {}>(args?: Subset<T, groups$system_group_permissionArgs<ExtArgs>>): Prisma__system_group_permissionClient<$Result.GetResult<Prisma.$system_group_permissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the groups model
   */
  interface groupsFieldRefs {
    readonly id: FieldRef<"groups", 'Int'>
    readonly type: FieldRef<"groups", 'groups_type'>
    readonly visibility: FieldRef<"groups", 'groups_visibility'>
    readonly name: FieldRef<"groups", 'String'>
    readonly description: FieldRef<"groups", 'String'>
    readonly validation: FieldRef<"groups", 'groups_validation'>
    readonly createdAt: FieldRef<"groups", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * groups findUnique
   */
  export type groupsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * Filter, which groups to fetch.
     */
    where: groupsWhereUniqueInput
  }

  /**
   * groups findUniqueOrThrow
   */
  export type groupsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * Filter, which groups to fetch.
     */
    where: groupsWhereUniqueInput
  }

  /**
   * groups findFirst
   */
  export type groupsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * Filter, which groups to fetch.
     */
    where?: groupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of groups to fetch.
     */
    orderBy?: groupsOrderByWithRelationInput | groupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for groups.
     */
    cursor?: groupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of groups.
     */
    distinct?: GroupsScalarFieldEnum | GroupsScalarFieldEnum[]
  }

  /**
   * groups findFirstOrThrow
   */
  export type groupsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * Filter, which groups to fetch.
     */
    where?: groupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of groups to fetch.
     */
    orderBy?: groupsOrderByWithRelationInput | groupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for groups.
     */
    cursor?: groupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of groups.
     */
    distinct?: GroupsScalarFieldEnum | GroupsScalarFieldEnum[]
  }

  /**
   * groups findMany
   */
  export type groupsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * Filter, which groups to fetch.
     */
    where?: groupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of groups to fetch.
     */
    orderBy?: groupsOrderByWithRelationInput | groupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing groups.
     */
    cursor?: groupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` groups.
     */
    skip?: number
    distinct?: GroupsScalarFieldEnum | GroupsScalarFieldEnum[]
  }

  /**
   * groups create
   */
  export type groupsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * The data needed to create a groups.
     */
    data: XOR<groupsCreateInput, groupsUncheckedCreateInput>
  }

  /**
   * groups createMany
   */
  export type groupsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many groups.
     */
    data: groupsCreateManyInput | groupsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * groups update
   */
  export type groupsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * The data needed to update a groups.
     */
    data: XOR<groupsUpdateInput, groupsUncheckedUpdateInput>
    /**
     * Choose, which groups to update.
     */
    where: groupsWhereUniqueInput
  }

  /**
   * groups updateMany
   */
  export type groupsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update groups.
     */
    data: XOR<groupsUpdateManyMutationInput, groupsUncheckedUpdateManyInput>
    /**
     * Filter which groups to update
     */
    where?: groupsWhereInput
    /**
     * Limit how many groups to update.
     */
    limit?: number
  }

  /**
   * groups upsert
   */
  export type groupsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * The filter to search for the groups to update in case it exists.
     */
    where: groupsWhereUniqueInput
    /**
     * In case the groups found by the `where` argument doesn't exist, create a new groups with this data.
     */
    create: XOR<groupsCreateInput, groupsUncheckedCreateInput>
    /**
     * In case the groups was found with the provided `where` argument, update it with this data.
     */
    update: XOR<groupsUpdateInput, groupsUncheckedUpdateInput>
  }

  /**
   * groups delete
   */
  export type groupsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * Filter which groups to delete.
     */
    where: groupsWhereUniqueInput
  }

  /**
   * groups deleteMany
   */
  export type groupsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which groups to delete
     */
    where?: groupsWhereInput
    /**
     * Limit how many groups to delete.
     */
    limit?: number
  }

  /**
   * groups.groupMembers
   */
  export type groups$groupMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groupMembers
     */
    select?: groupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groupMembers
     */
    omit?: groupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupMembersInclude<ExtArgs> | null
    where?: groupMembersWhereInput
    orderBy?: groupMembersOrderByWithRelationInput | groupMembersOrderByWithRelationInput[]
    cursor?: groupMembersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupMembersScalarFieldEnum | GroupMembersScalarFieldEnum[]
  }

  /**
   * groups.messages
   */
  export type groups$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    where?: messageWhereInput
    orderBy?: messageOrderByWithRelationInput | messageOrderByWithRelationInput[]
    cursor?: messageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * groups.notifications
   */
  export type groups$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    where?: notificationWhereInput
    orderBy?: notificationOrderByWithRelationInput | notificationOrderByWithRelationInput[]
    cursor?: notificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * groups.resources
   */
  export type groups$resourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resources
     */
    select?: resourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resources
     */
    omit?: resourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resourcesInclude<ExtArgs> | null
    where?: resourcesWhereInput
    orderBy?: resourcesOrderByWithRelationInput | resourcesOrderByWithRelationInput[]
    cursor?: resourcesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResourcesScalarFieldEnum | ResourcesScalarFieldEnum[]
  }

  /**
   * groups.system_group_permission
   */
  export type groups$system_group_permissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the system_group_permission
     */
    select?: system_group_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the system_group_permission
     */
    omit?: system_group_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: system_group_permissionInclude<ExtArgs> | null
    where?: system_group_permissionWhereInput
  }

  /**
   * groups without action
   */
  export type groupsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
  }


  /**
   * Model notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
    studentId: number | null
    groupId: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
    studentId: number | null
    groupId: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    titre: string | null
    content: string | null
    studentId: number | null
    groupId: number | null
    type: $Enums.notification_type | null
    isRead: boolean | null
    sentAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    titre: string | null
    content: string | null
    studentId: number | null
    groupId: number | null
    type: $Enums.notification_type | null
    isRead: boolean | null
    sentAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    titre: number
    content: number
    studentId: number
    groupId: number
    type: number
    isRead: number
    sentAt: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
    studentId?: true
    groupId?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
    studentId?: true
    groupId?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    titre?: true
    content?: true
    studentId?: true
    groupId?: true
    type?: true
    isRead?: true
    sentAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    titre?: true
    content?: true
    studentId?: true
    groupId?: true
    type?: true
    isRead?: true
    sentAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    titre?: true
    content?: true
    studentId?: true
    groupId?: true
    type?: true
    isRead?: true
    sentAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notification to aggregate.
     */
    where?: notificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationOrderByWithRelationInput | notificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: notificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type notificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationWhereInput
    orderBy?: notificationOrderByWithAggregationInput | notificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: notificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: number
    titre: string
    content: string
    studentId: number
    groupId: number | null
    type: $Enums.notification_type
    isRead: boolean
    sentAt: Date
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends notificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type notificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    content?: boolean
    studentId?: boolean
    groupId?: boolean
    type?: boolean
    isRead?: boolean
    sentAt?: boolean
    group?: boolean | notification$groupArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>



  export type notificationSelectScalar = {
    id?: boolean
    titre?: boolean
    content?: boolean
    studentId?: boolean
    groupId?: boolean
    type?: boolean
    isRead?: boolean
    sentAt?: boolean
  }

  export type notificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titre" | "content" | "studentId" | "groupId" | "type" | "isRead" | "sentAt", ExtArgs["result"]["notification"]>
  export type notificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | notification$groupArgs<ExtArgs>
  }

  export type $notificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "notification"
    objects: {
      group: Prisma.$groupsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titre: string
      content: string
      studentId: number
      groupId: number | null
      type: $Enums.notification_type
      isRead: boolean
      sentAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type notificationGetPayload<S extends boolean | null | undefined | notificationDefaultArgs> = $Result.GetResult<Prisma.$notificationPayload, S>

  type notificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<notificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface notificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['notification'], meta: { name: 'notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {notificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends notificationFindUniqueArgs>(args: SelectSubset<T, notificationFindUniqueArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {notificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends notificationFindUniqueOrThrowArgs>(args: SelectSubset<T, notificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends notificationFindFirstArgs>(args?: SelectSubset<T, notificationFindFirstArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends notificationFindFirstOrThrowArgs>(args?: SelectSubset<T, notificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends notificationFindManyArgs>(args?: SelectSubset<T, notificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {notificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends notificationCreateArgs>(args: SelectSubset<T, notificationCreateArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {notificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends notificationCreateManyArgs>(args?: SelectSubset<T, notificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notification.
     * @param {notificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends notificationDeleteArgs>(args: SelectSubset<T, notificationDeleteArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {notificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends notificationUpdateArgs>(args: SelectSubset<T, notificationUpdateArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {notificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends notificationDeleteManyArgs>(args?: SelectSubset<T, notificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends notificationUpdateManyArgs>(args: SelectSubset<T, notificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {notificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends notificationUpsertArgs>(args: SelectSubset<T, notificationUpsertArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends notificationCountArgs>(
      args?: Subset<T, notificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationGroupByArgs} args - Group by arguments.
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
      T extends notificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: notificationGroupByArgs['orderBy'] }
        : { orderBy?: notificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, notificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the notification model
   */
  readonly fields: notificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__notificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends notification$groupArgs<ExtArgs> = {}>(args?: Subset<T, notification$groupArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the notification model
   */
  interface notificationFieldRefs {
    readonly id: FieldRef<"notification", 'Int'>
    readonly titre: FieldRef<"notification", 'String'>
    readonly content: FieldRef<"notification", 'String'>
    readonly studentId: FieldRef<"notification", 'Int'>
    readonly groupId: FieldRef<"notification", 'Int'>
    readonly type: FieldRef<"notification", 'notification_type'>
    readonly isRead: FieldRef<"notification", 'Boolean'>
    readonly sentAt: FieldRef<"notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * notification findUnique
   */
  export type notificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter, which notification to fetch.
     */
    where: notificationWhereUniqueInput
  }

  /**
   * notification findUniqueOrThrow
   */
  export type notificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter, which notification to fetch.
     */
    where: notificationWhereUniqueInput
  }

  /**
   * notification findFirst
   */
  export type notificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter, which notification to fetch.
     */
    where?: notificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationOrderByWithRelationInput | notificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * notification findFirstOrThrow
   */
  export type notificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter, which notification to fetch.
     */
    where?: notificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationOrderByWithRelationInput | notificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * notification findMany
   */
  export type notificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationOrderByWithRelationInput | notificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notifications.
     */
    cursor?: notificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * notification create
   */
  export type notificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * The data needed to create a notification.
     */
    data: XOR<notificationCreateInput, notificationUncheckedCreateInput>
  }

  /**
   * notification createMany
   */
  export type notificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many notifications.
     */
    data: notificationCreateManyInput | notificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notification update
   */
  export type notificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * The data needed to update a notification.
     */
    data: XOR<notificationUpdateInput, notificationUncheckedUpdateInput>
    /**
     * Choose, which notification to update.
     */
    where: notificationWhereUniqueInput
  }

  /**
   * notification updateMany
   */
  export type notificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update notifications.
     */
    data: XOR<notificationUpdateManyMutationInput, notificationUncheckedUpdateManyInput>
    /**
     * Filter which notifications to update
     */
    where?: notificationWhereInput
    /**
     * Limit how many notifications to update.
     */
    limit?: number
  }

  /**
   * notification upsert
   */
  export type notificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * The filter to search for the notification to update in case it exists.
     */
    where: notificationWhereUniqueInput
    /**
     * In case the notification found by the `where` argument doesn't exist, create a new notification with this data.
     */
    create: XOR<notificationCreateInput, notificationUncheckedCreateInput>
    /**
     * In case the notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<notificationUpdateInput, notificationUncheckedUpdateInput>
  }

  /**
   * notification delete
   */
  export type notificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter which notification to delete.
     */
    where: notificationWhereUniqueInput
  }

  /**
   * notification deleteMany
   */
  export type notificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifications to delete
     */
    where?: notificationWhereInput
    /**
     * Limit how many notifications to delete.
     */
    limit?: number
  }

  /**
   * notification.group
   */
  export type notification$groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    where?: groupsWhereInput
  }

  /**
   * notification without action
   */
  export type notificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
  }


  /**
   * Model resources
   */

  export type AggregateResources = {
    _count: ResourcesCountAggregateOutputType | null
    _avg: ResourcesAvgAggregateOutputType | null
    _sum: ResourcesSumAggregateOutputType | null
    _min: ResourcesMinAggregateOutputType | null
    _max: ResourcesMaxAggregateOutputType | null
  }

  export type ResourcesAvgAggregateOutputType = {
    id: number | null
    size: number | null
    studentId: number | null
    groupId: number | null
  }

  export type ResourcesSumAggregateOutputType = {
    id: number | null
    size: number | null
    studentId: number | null
    groupId: number | null
  }

  export type ResourcesMinAggregateOutputType = {
    id: number | null
    name: string | null
    filepath: string | null
    size: number | null
    studentId: number | null
    validation: $Enums.resources_validation | null
    groupId: number | null
    uploadedAt: Date | null
    fileType: string | null
    mimeType: string | null
  }

  export type ResourcesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    filepath: string | null
    size: number | null
    studentId: number | null
    validation: $Enums.resources_validation | null
    groupId: number | null
    uploadedAt: Date | null
    fileType: string | null
    mimeType: string | null
  }

  export type ResourcesCountAggregateOutputType = {
    id: number
    name: number
    filepath: number
    size: number
    studentId: number
    validation: number
    groupId: number
    uploadedAt: number
    fileType: number
    mimeType: number
    _all: number
  }


  export type ResourcesAvgAggregateInputType = {
    id?: true
    size?: true
    studentId?: true
    groupId?: true
  }

  export type ResourcesSumAggregateInputType = {
    id?: true
    size?: true
    studentId?: true
    groupId?: true
  }

  export type ResourcesMinAggregateInputType = {
    id?: true
    name?: true
    filepath?: true
    size?: true
    studentId?: true
    validation?: true
    groupId?: true
    uploadedAt?: true
    fileType?: true
    mimeType?: true
  }

  export type ResourcesMaxAggregateInputType = {
    id?: true
    name?: true
    filepath?: true
    size?: true
    studentId?: true
    validation?: true
    groupId?: true
    uploadedAt?: true
    fileType?: true
    mimeType?: true
  }

  export type ResourcesCountAggregateInputType = {
    id?: true
    name?: true
    filepath?: true
    size?: true
    studentId?: true
    validation?: true
    groupId?: true
    uploadedAt?: true
    fileType?: true
    mimeType?: true
    _all?: true
  }

  export type ResourcesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which resources to aggregate.
     */
    where?: resourcesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of resources to fetch.
     */
    orderBy?: resourcesOrderByWithRelationInput | resourcesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: resourcesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned resources
    **/
    _count?: true | ResourcesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResourcesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResourcesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResourcesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResourcesMaxAggregateInputType
  }

  export type GetResourcesAggregateType<T extends ResourcesAggregateArgs> = {
        [P in keyof T & keyof AggregateResources]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResources[P]>
      : GetScalarType<T[P], AggregateResources[P]>
  }




  export type resourcesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: resourcesWhereInput
    orderBy?: resourcesOrderByWithAggregationInput | resourcesOrderByWithAggregationInput[]
    by: ResourcesScalarFieldEnum[] | ResourcesScalarFieldEnum
    having?: resourcesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResourcesCountAggregateInputType | true
    _avg?: ResourcesAvgAggregateInputType
    _sum?: ResourcesSumAggregateInputType
    _min?: ResourcesMinAggregateInputType
    _max?: ResourcesMaxAggregateInputType
  }

  export type ResourcesGroupByOutputType = {
    id: number
    name: string
    filepath: string
    size: number
    studentId: number
    validation: $Enums.resources_validation
    groupId: number | null
    uploadedAt: Date
    fileType: string | null
    mimeType: string | null
    _count: ResourcesCountAggregateOutputType | null
    _avg: ResourcesAvgAggregateOutputType | null
    _sum: ResourcesSumAggregateOutputType | null
    _min: ResourcesMinAggregateOutputType | null
    _max: ResourcesMaxAggregateOutputType | null
  }

  type GetResourcesGroupByPayload<T extends resourcesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResourcesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResourcesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResourcesGroupByOutputType[P]>
            : GetScalarType<T[P], ResourcesGroupByOutputType[P]>
        }
      >
    >


  export type resourcesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    filepath?: boolean
    size?: boolean
    studentId?: boolean
    validation?: boolean
    groupId?: boolean
    uploadedAt?: boolean
    fileType?: boolean
    mimeType?: boolean
    messages?: boolean | resources$messagesArgs<ExtArgs>
    group?: boolean | resources$groupArgs<ExtArgs>
    student?: boolean | studentDefaultArgs<ExtArgs>
    _count?: boolean | ResourcesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resources"]>



  export type resourcesSelectScalar = {
    id?: boolean
    name?: boolean
    filepath?: boolean
    size?: boolean
    studentId?: boolean
    validation?: boolean
    groupId?: boolean
    uploadedAt?: boolean
    fileType?: boolean
    mimeType?: boolean
  }

  export type resourcesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "filepath" | "size" | "studentId" | "validation" | "groupId" | "uploadedAt" | "fileType" | "mimeType", ExtArgs["result"]["resources"]>
  export type resourcesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | resources$messagesArgs<ExtArgs>
    group?: boolean | resources$groupArgs<ExtArgs>
    student?: boolean | studentDefaultArgs<ExtArgs>
    _count?: boolean | ResourcesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $resourcesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "resources"
    objects: {
      messages: Prisma.$messagePayload<ExtArgs>[]
      group: Prisma.$groupsPayload<ExtArgs> | null
      student: Prisma.$studentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      filepath: string
      size: number
      studentId: number
      validation: $Enums.resources_validation
      groupId: number | null
      uploadedAt: Date
      fileType: string | null
      mimeType: string | null
    }, ExtArgs["result"]["resources"]>
    composites: {}
  }

  type resourcesGetPayload<S extends boolean | null | undefined | resourcesDefaultArgs> = $Result.GetResult<Prisma.$resourcesPayload, S>

  type resourcesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<resourcesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResourcesCountAggregateInputType | true
    }

  export interface resourcesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['resources'], meta: { name: 'resources' } }
    /**
     * Find zero or one Resources that matches the filter.
     * @param {resourcesFindUniqueArgs} args - Arguments to find a Resources
     * @example
     * // Get one Resources
     * const resources = await prisma.resources.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends resourcesFindUniqueArgs>(args: SelectSubset<T, resourcesFindUniqueArgs<ExtArgs>>): Prisma__resourcesClient<$Result.GetResult<Prisma.$resourcesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resources that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {resourcesFindUniqueOrThrowArgs} args - Arguments to find a Resources
     * @example
     * // Get one Resources
     * const resources = await prisma.resources.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends resourcesFindUniqueOrThrowArgs>(args: SelectSubset<T, resourcesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__resourcesClient<$Result.GetResult<Prisma.$resourcesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resourcesFindFirstArgs} args - Arguments to find a Resources
     * @example
     * // Get one Resources
     * const resources = await prisma.resources.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends resourcesFindFirstArgs>(args?: SelectSubset<T, resourcesFindFirstArgs<ExtArgs>>): Prisma__resourcesClient<$Result.GetResult<Prisma.$resourcesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resources that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resourcesFindFirstOrThrowArgs} args - Arguments to find a Resources
     * @example
     * // Get one Resources
     * const resources = await prisma.resources.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends resourcesFindFirstOrThrowArgs>(args?: SelectSubset<T, resourcesFindFirstOrThrowArgs<ExtArgs>>): Prisma__resourcesClient<$Result.GetResult<Prisma.$resourcesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Resources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resourcesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resources
     * const resources = await prisma.resources.findMany()
     * 
     * // Get first 10 Resources
     * const resources = await prisma.resources.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resourcesWithIdOnly = await prisma.resources.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends resourcesFindManyArgs>(args?: SelectSubset<T, resourcesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$resourcesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resources.
     * @param {resourcesCreateArgs} args - Arguments to create a Resources.
     * @example
     * // Create one Resources
     * const Resources = await prisma.resources.create({
     *   data: {
     *     // ... data to create a Resources
     *   }
     * })
     * 
     */
    create<T extends resourcesCreateArgs>(args: SelectSubset<T, resourcesCreateArgs<ExtArgs>>): Prisma__resourcesClient<$Result.GetResult<Prisma.$resourcesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Resources.
     * @param {resourcesCreateManyArgs} args - Arguments to create many Resources.
     * @example
     * // Create many Resources
     * const resources = await prisma.resources.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends resourcesCreateManyArgs>(args?: SelectSubset<T, resourcesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Resources.
     * @param {resourcesDeleteArgs} args - Arguments to delete one Resources.
     * @example
     * // Delete one Resources
     * const Resources = await prisma.resources.delete({
     *   where: {
     *     // ... filter to delete one Resources
     *   }
     * })
     * 
     */
    delete<T extends resourcesDeleteArgs>(args: SelectSubset<T, resourcesDeleteArgs<ExtArgs>>): Prisma__resourcesClient<$Result.GetResult<Prisma.$resourcesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resources.
     * @param {resourcesUpdateArgs} args - Arguments to update one Resources.
     * @example
     * // Update one Resources
     * const resources = await prisma.resources.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends resourcesUpdateArgs>(args: SelectSubset<T, resourcesUpdateArgs<ExtArgs>>): Prisma__resourcesClient<$Result.GetResult<Prisma.$resourcesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Resources.
     * @param {resourcesDeleteManyArgs} args - Arguments to filter Resources to delete.
     * @example
     * // Delete a few Resources
     * const { count } = await prisma.resources.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends resourcesDeleteManyArgs>(args?: SelectSubset<T, resourcesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resourcesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resources
     * const resources = await prisma.resources.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends resourcesUpdateManyArgs>(args: SelectSubset<T, resourcesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Resources.
     * @param {resourcesUpsertArgs} args - Arguments to update or create a Resources.
     * @example
     * // Update or create a Resources
     * const resources = await prisma.resources.upsert({
     *   create: {
     *     // ... data to create a Resources
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resources we want to update
     *   }
     * })
     */
    upsert<T extends resourcesUpsertArgs>(args: SelectSubset<T, resourcesUpsertArgs<ExtArgs>>): Prisma__resourcesClient<$Result.GetResult<Prisma.$resourcesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Resources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resourcesCountArgs} args - Arguments to filter Resources to count.
     * @example
     * // Count the number of Resources
     * const count = await prisma.resources.count({
     *   where: {
     *     // ... the filter for the Resources we want to count
     *   }
     * })
    **/
    count<T extends resourcesCountArgs>(
      args?: Subset<T, resourcesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResourcesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourcesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResourcesAggregateArgs>(args: Subset<T, ResourcesAggregateArgs>): Prisma.PrismaPromise<GetResourcesAggregateType<T>>

    /**
     * Group by Resources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resourcesGroupByArgs} args - Group by arguments.
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
      T extends resourcesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: resourcesGroupByArgs['orderBy'] }
        : { orderBy?: resourcesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, resourcesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResourcesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the resources model
   */
  readonly fields: resourcesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for resources.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__resourcesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    messages<T extends resources$messagesArgs<ExtArgs> = {}>(args?: Subset<T, resources$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    group<T extends resources$groupArgs<ExtArgs> = {}>(args?: Subset<T, resources$groupArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    student<T extends studentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, studentDefaultArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the resources model
   */
  interface resourcesFieldRefs {
    readonly id: FieldRef<"resources", 'Int'>
    readonly name: FieldRef<"resources", 'String'>
    readonly filepath: FieldRef<"resources", 'String'>
    readonly size: FieldRef<"resources", 'Float'>
    readonly studentId: FieldRef<"resources", 'Int'>
    readonly validation: FieldRef<"resources", 'resources_validation'>
    readonly groupId: FieldRef<"resources", 'Int'>
    readonly uploadedAt: FieldRef<"resources", 'DateTime'>
    readonly fileType: FieldRef<"resources", 'String'>
    readonly mimeType: FieldRef<"resources", 'String'>
  }
    

  // Custom InputTypes
  /**
   * resources findUnique
   */
  export type resourcesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resources
     */
    select?: resourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resources
     */
    omit?: resourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resourcesInclude<ExtArgs> | null
    /**
     * Filter, which resources to fetch.
     */
    where: resourcesWhereUniqueInput
  }

  /**
   * resources findUniqueOrThrow
   */
  export type resourcesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resources
     */
    select?: resourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resources
     */
    omit?: resourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resourcesInclude<ExtArgs> | null
    /**
     * Filter, which resources to fetch.
     */
    where: resourcesWhereUniqueInput
  }

  /**
   * resources findFirst
   */
  export type resourcesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resources
     */
    select?: resourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resources
     */
    omit?: resourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resourcesInclude<ExtArgs> | null
    /**
     * Filter, which resources to fetch.
     */
    where?: resourcesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of resources to fetch.
     */
    orderBy?: resourcesOrderByWithRelationInput | resourcesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for resources.
     */
    cursor?: resourcesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of resources.
     */
    distinct?: ResourcesScalarFieldEnum | ResourcesScalarFieldEnum[]
  }

  /**
   * resources findFirstOrThrow
   */
  export type resourcesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resources
     */
    select?: resourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resources
     */
    omit?: resourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resourcesInclude<ExtArgs> | null
    /**
     * Filter, which resources to fetch.
     */
    where?: resourcesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of resources to fetch.
     */
    orderBy?: resourcesOrderByWithRelationInput | resourcesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for resources.
     */
    cursor?: resourcesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of resources.
     */
    distinct?: ResourcesScalarFieldEnum | ResourcesScalarFieldEnum[]
  }

  /**
   * resources findMany
   */
  export type resourcesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resources
     */
    select?: resourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resources
     */
    omit?: resourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resourcesInclude<ExtArgs> | null
    /**
     * Filter, which resources to fetch.
     */
    where?: resourcesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of resources to fetch.
     */
    orderBy?: resourcesOrderByWithRelationInput | resourcesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing resources.
     */
    cursor?: resourcesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` resources.
     */
    skip?: number
    distinct?: ResourcesScalarFieldEnum | ResourcesScalarFieldEnum[]
  }

  /**
   * resources create
   */
  export type resourcesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resources
     */
    select?: resourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resources
     */
    omit?: resourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resourcesInclude<ExtArgs> | null
    /**
     * The data needed to create a resources.
     */
    data: XOR<resourcesCreateInput, resourcesUncheckedCreateInput>
  }

  /**
   * resources createMany
   */
  export type resourcesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many resources.
     */
    data: resourcesCreateManyInput | resourcesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * resources update
   */
  export type resourcesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resources
     */
    select?: resourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resources
     */
    omit?: resourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resourcesInclude<ExtArgs> | null
    /**
     * The data needed to update a resources.
     */
    data: XOR<resourcesUpdateInput, resourcesUncheckedUpdateInput>
    /**
     * Choose, which resources to update.
     */
    where: resourcesWhereUniqueInput
  }

  /**
   * resources updateMany
   */
  export type resourcesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update resources.
     */
    data: XOR<resourcesUpdateManyMutationInput, resourcesUncheckedUpdateManyInput>
    /**
     * Filter which resources to update
     */
    where?: resourcesWhereInput
    /**
     * Limit how many resources to update.
     */
    limit?: number
  }

  /**
   * resources upsert
   */
  export type resourcesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resources
     */
    select?: resourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resources
     */
    omit?: resourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resourcesInclude<ExtArgs> | null
    /**
     * The filter to search for the resources to update in case it exists.
     */
    where: resourcesWhereUniqueInput
    /**
     * In case the resources found by the `where` argument doesn't exist, create a new resources with this data.
     */
    create: XOR<resourcesCreateInput, resourcesUncheckedCreateInput>
    /**
     * In case the resources was found with the provided `where` argument, update it with this data.
     */
    update: XOR<resourcesUpdateInput, resourcesUncheckedUpdateInput>
  }

  /**
   * resources delete
   */
  export type resourcesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resources
     */
    select?: resourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resources
     */
    omit?: resourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resourcesInclude<ExtArgs> | null
    /**
     * Filter which resources to delete.
     */
    where: resourcesWhereUniqueInput
  }

  /**
   * resources deleteMany
   */
  export type resourcesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which resources to delete
     */
    where?: resourcesWhereInput
    /**
     * Limit how many resources to delete.
     */
    limit?: number
  }

  /**
   * resources.messages
   */
  export type resources$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    where?: messageWhereInput
    orderBy?: messageOrderByWithRelationInput | messageOrderByWithRelationInput[]
    cursor?: messageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * resources.group
   */
  export type resources$groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    where?: groupsWhereInput
  }

  /**
   * resources without action
   */
  export type resourcesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resources
     */
    select?: resourcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resources
     */
    omit?: resourcesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resourcesInclude<ExtArgs> | null
  }


  /**
   * Model groupMembers
   */

  export type AggregateGroupMembers = {
    _count: GroupMembersCountAggregateOutputType | null
    _avg: GroupMembersAvgAggregateOutputType | null
    _sum: GroupMembersSumAggregateOutputType | null
    _min: GroupMembersMinAggregateOutputType | null
    _max: GroupMembersMaxAggregateOutputType | null
  }

  export type GroupMembersAvgAggregateOutputType = {
    id: number | null
    studentId: number | null
    groupId: number | null
  }

  export type GroupMembersSumAggregateOutputType = {
    id: number | null
    studentId: number | null
    groupId: number | null
  }

  export type GroupMembersMinAggregateOutputType = {
    id: number | null
    role: $Enums.groupMembers_role | null
    status: $Enums.groupMembers_status | null
    date_adhesion: Date | null
    studentId: number | null
    groupId: number | null
  }

  export type GroupMembersMaxAggregateOutputType = {
    id: number | null
    role: $Enums.groupMembers_role | null
    status: $Enums.groupMembers_status | null
    date_adhesion: Date | null
    studentId: number | null
    groupId: number | null
  }

  export type GroupMembersCountAggregateOutputType = {
    id: number
    role: number
    status: number
    date_adhesion: number
    studentId: number
    groupId: number
    _all: number
  }


  export type GroupMembersAvgAggregateInputType = {
    id?: true
    studentId?: true
    groupId?: true
  }

  export type GroupMembersSumAggregateInputType = {
    id?: true
    studentId?: true
    groupId?: true
  }

  export type GroupMembersMinAggregateInputType = {
    id?: true
    role?: true
    status?: true
    date_adhesion?: true
    studentId?: true
    groupId?: true
  }

  export type GroupMembersMaxAggregateInputType = {
    id?: true
    role?: true
    status?: true
    date_adhesion?: true
    studentId?: true
    groupId?: true
  }

  export type GroupMembersCountAggregateInputType = {
    id?: true
    role?: true
    status?: true
    date_adhesion?: true
    studentId?: true
    groupId?: true
    _all?: true
  }

  export type GroupMembersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which groupMembers to aggregate.
     */
    where?: groupMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of groupMembers to fetch.
     */
    orderBy?: groupMembersOrderByWithRelationInput | groupMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: groupMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` groupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` groupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned groupMembers
    **/
    _count?: true | GroupMembersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupMembersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupMembersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMembersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMembersMaxAggregateInputType
  }

  export type GetGroupMembersAggregateType<T extends GroupMembersAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupMembers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupMembers[P]>
      : GetScalarType<T[P], AggregateGroupMembers[P]>
  }




  export type groupMembersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: groupMembersWhereInput
    orderBy?: groupMembersOrderByWithAggregationInput | groupMembersOrderByWithAggregationInput[]
    by: GroupMembersScalarFieldEnum[] | GroupMembersScalarFieldEnum
    having?: groupMembersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupMembersCountAggregateInputType | true
    _avg?: GroupMembersAvgAggregateInputType
    _sum?: GroupMembersSumAggregateInputType
    _min?: GroupMembersMinAggregateInputType
    _max?: GroupMembersMaxAggregateInputType
  }

  export type GroupMembersGroupByOutputType = {
    id: number
    role: $Enums.groupMembers_role
    status: $Enums.groupMembers_status
    date_adhesion: Date | null
    studentId: number
    groupId: number
    _count: GroupMembersCountAggregateOutputType | null
    _avg: GroupMembersAvgAggregateOutputType | null
    _sum: GroupMembersSumAggregateOutputType | null
    _min: GroupMembersMinAggregateOutputType | null
    _max: GroupMembersMaxAggregateOutputType | null
  }

  type GetGroupMembersGroupByPayload<T extends groupMembersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupMembersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupMembersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupMembersGroupByOutputType[P]>
            : GetScalarType<T[P], GroupMembersGroupByOutputType[P]>
        }
      >
    >


  export type groupMembersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    status?: boolean
    date_adhesion?: boolean
    studentId?: boolean
    groupId?: boolean
    groups?: boolean | groupsDefaultArgs<ExtArgs>
    student?: boolean | studentDefaultArgs<ExtArgs>
    group_member_permission?: boolean | groupMembers$group_member_permissionArgs<ExtArgs>
    _count?: boolean | GroupMembersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupMembers"]>



  export type groupMembersSelectScalar = {
    id?: boolean
    role?: boolean
    status?: boolean
    date_adhesion?: boolean
    studentId?: boolean
    groupId?: boolean
  }

  export type groupMembersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role" | "status" | "date_adhesion" | "studentId" | "groupId", ExtArgs["result"]["groupMembers"]>
  export type groupMembersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groups?: boolean | groupsDefaultArgs<ExtArgs>
    student?: boolean | studentDefaultArgs<ExtArgs>
    group_member_permission?: boolean | groupMembers$group_member_permissionArgs<ExtArgs>
    _count?: boolean | GroupMembersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $groupMembersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "groupMembers"
    objects: {
      groups: Prisma.$groupsPayload<ExtArgs>
      student: Prisma.$studentPayload<ExtArgs>
      group_member_permission: Prisma.$group_member_permissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      role: $Enums.groupMembers_role
      status: $Enums.groupMembers_status
      date_adhesion: Date | null
      studentId: number
      groupId: number
    }, ExtArgs["result"]["groupMembers"]>
    composites: {}
  }

  type groupMembersGetPayload<S extends boolean | null | undefined | groupMembersDefaultArgs> = $Result.GetResult<Prisma.$groupMembersPayload, S>

  type groupMembersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<groupMembersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupMembersCountAggregateInputType | true
    }

  export interface groupMembersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['groupMembers'], meta: { name: 'groupMembers' } }
    /**
     * Find zero or one GroupMembers that matches the filter.
     * @param {groupMembersFindUniqueArgs} args - Arguments to find a GroupMembers
     * @example
     * // Get one GroupMembers
     * const groupMembers = await prisma.groupMembers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends groupMembersFindUniqueArgs>(args: SelectSubset<T, groupMembersFindUniqueArgs<ExtArgs>>): Prisma__groupMembersClient<$Result.GetResult<Prisma.$groupMembersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GroupMembers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {groupMembersFindUniqueOrThrowArgs} args - Arguments to find a GroupMembers
     * @example
     * // Get one GroupMembers
     * const groupMembers = await prisma.groupMembers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends groupMembersFindUniqueOrThrowArgs>(args: SelectSubset<T, groupMembersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__groupMembersClient<$Result.GetResult<Prisma.$groupMembersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupMembersFindFirstArgs} args - Arguments to find a GroupMembers
     * @example
     * // Get one GroupMembers
     * const groupMembers = await prisma.groupMembers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends groupMembersFindFirstArgs>(args?: SelectSubset<T, groupMembersFindFirstArgs<ExtArgs>>): Prisma__groupMembersClient<$Result.GetResult<Prisma.$groupMembersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupMembers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupMembersFindFirstOrThrowArgs} args - Arguments to find a GroupMembers
     * @example
     * // Get one GroupMembers
     * const groupMembers = await prisma.groupMembers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends groupMembersFindFirstOrThrowArgs>(args?: SelectSubset<T, groupMembersFindFirstOrThrowArgs<ExtArgs>>): Prisma__groupMembersClient<$Result.GetResult<Prisma.$groupMembersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GroupMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupMembersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupMembers
     * const groupMembers = await prisma.groupMembers.findMany()
     * 
     * // Get first 10 GroupMembers
     * const groupMembers = await prisma.groupMembers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupMembersWithIdOnly = await prisma.groupMembers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends groupMembersFindManyArgs>(args?: SelectSubset<T, groupMembersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$groupMembersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GroupMembers.
     * @param {groupMembersCreateArgs} args - Arguments to create a GroupMembers.
     * @example
     * // Create one GroupMembers
     * const GroupMembers = await prisma.groupMembers.create({
     *   data: {
     *     // ... data to create a GroupMembers
     *   }
     * })
     * 
     */
    create<T extends groupMembersCreateArgs>(args: SelectSubset<T, groupMembersCreateArgs<ExtArgs>>): Prisma__groupMembersClient<$Result.GetResult<Prisma.$groupMembersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GroupMembers.
     * @param {groupMembersCreateManyArgs} args - Arguments to create many GroupMembers.
     * @example
     * // Create many GroupMembers
     * const groupMembers = await prisma.groupMembers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends groupMembersCreateManyArgs>(args?: SelectSubset<T, groupMembersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GroupMembers.
     * @param {groupMembersDeleteArgs} args - Arguments to delete one GroupMembers.
     * @example
     * // Delete one GroupMembers
     * const GroupMembers = await prisma.groupMembers.delete({
     *   where: {
     *     // ... filter to delete one GroupMembers
     *   }
     * })
     * 
     */
    delete<T extends groupMembersDeleteArgs>(args: SelectSubset<T, groupMembersDeleteArgs<ExtArgs>>): Prisma__groupMembersClient<$Result.GetResult<Prisma.$groupMembersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GroupMembers.
     * @param {groupMembersUpdateArgs} args - Arguments to update one GroupMembers.
     * @example
     * // Update one GroupMembers
     * const groupMembers = await prisma.groupMembers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends groupMembersUpdateArgs>(args: SelectSubset<T, groupMembersUpdateArgs<ExtArgs>>): Prisma__groupMembersClient<$Result.GetResult<Prisma.$groupMembersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GroupMembers.
     * @param {groupMembersDeleteManyArgs} args - Arguments to filter GroupMembers to delete.
     * @example
     * // Delete a few GroupMembers
     * const { count } = await prisma.groupMembers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends groupMembersDeleteManyArgs>(args?: SelectSubset<T, groupMembersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupMembersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupMembers
     * const groupMembers = await prisma.groupMembers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends groupMembersUpdateManyArgs>(args: SelectSubset<T, groupMembersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GroupMembers.
     * @param {groupMembersUpsertArgs} args - Arguments to update or create a GroupMembers.
     * @example
     * // Update or create a GroupMembers
     * const groupMembers = await prisma.groupMembers.upsert({
     *   create: {
     *     // ... data to create a GroupMembers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupMembers we want to update
     *   }
     * })
     */
    upsert<T extends groupMembersUpsertArgs>(args: SelectSubset<T, groupMembersUpsertArgs<ExtArgs>>): Prisma__groupMembersClient<$Result.GetResult<Prisma.$groupMembersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupMembersCountArgs} args - Arguments to filter GroupMembers to count.
     * @example
     * // Count the number of GroupMembers
     * const count = await prisma.groupMembers.count({
     *   where: {
     *     // ... the filter for the GroupMembers we want to count
     *   }
     * })
    **/
    count<T extends groupMembersCountArgs>(
      args?: Subset<T, groupMembersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupMembersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMembersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupMembersAggregateArgs>(args: Subset<T, GroupMembersAggregateArgs>): Prisma.PrismaPromise<GetGroupMembersAggregateType<T>>

    /**
     * Group by GroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupMembersGroupByArgs} args - Group by arguments.
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
      T extends groupMembersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: groupMembersGroupByArgs['orderBy'] }
        : { orderBy?: groupMembersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, groupMembersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupMembersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the groupMembers model
   */
  readonly fields: groupMembersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for groupMembers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__groupMembersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    groups<T extends groupsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, groupsDefaultArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends studentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, studentDefaultArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    group_member_permission<T extends groupMembers$group_member_permissionArgs<ExtArgs> = {}>(args?: Subset<T, groupMembers$group_member_permissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$group_member_permissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the groupMembers model
   */
  interface groupMembersFieldRefs {
    readonly id: FieldRef<"groupMembers", 'Int'>
    readonly role: FieldRef<"groupMembers", 'groupMembers_role'>
    readonly status: FieldRef<"groupMembers", 'groupMembers_status'>
    readonly date_adhesion: FieldRef<"groupMembers", 'DateTime'>
    readonly studentId: FieldRef<"groupMembers", 'Int'>
    readonly groupId: FieldRef<"groupMembers", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * groupMembers findUnique
   */
  export type groupMembersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groupMembers
     */
    select?: groupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groupMembers
     */
    omit?: groupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupMembersInclude<ExtArgs> | null
    /**
     * Filter, which groupMembers to fetch.
     */
    where: groupMembersWhereUniqueInput
  }

  /**
   * groupMembers findUniqueOrThrow
   */
  export type groupMembersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groupMembers
     */
    select?: groupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groupMembers
     */
    omit?: groupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupMembersInclude<ExtArgs> | null
    /**
     * Filter, which groupMembers to fetch.
     */
    where: groupMembersWhereUniqueInput
  }

  /**
   * groupMembers findFirst
   */
  export type groupMembersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groupMembers
     */
    select?: groupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groupMembers
     */
    omit?: groupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupMembersInclude<ExtArgs> | null
    /**
     * Filter, which groupMembers to fetch.
     */
    where?: groupMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of groupMembers to fetch.
     */
    orderBy?: groupMembersOrderByWithRelationInput | groupMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for groupMembers.
     */
    cursor?: groupMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` groupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` groupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of groupMembers.
     */
    distinct?: GroupMembersScalarFieldEnum | GroupMembersScalarFieldEnum[]
  }

  /**
   * groupMembers findFirstOrThrow
   */
  export type groupMembersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groupMembers
     */
    select?: groupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groupMembers
     */
    omit?: groupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupMembersInclude<ExtArgs> | null
    /**
     * Filter, which groupMembers to fetch.
     */
    where?: groupMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of groupMembers to fetch.
     */
    orderBy?: groupMembersOrderByWithRelationInput | groupMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for groupMembers.
     */
    cursor?: groupMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` groupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` groupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of groupMembers.
     */
    distinct?: GroupMembersScalarFieldEnum | GroupMembersScalarFieldEnum[]
  }

  /**
   * groupMembers findMany
   */
  export type groupMembersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groupMembers
     */
    select?: groupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groupMembers
     */
    omit?: groupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupMembersInclude<ExtArgs> | null
    /**
     * Filter, which groupMembers to fetch.
     */
    where?: groupMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of groupMembers to fetch.
     */
    orderBy?: groupMembersOrderByWithRelationInput | groupMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing groupMembers.
     */
    cursor?: groupMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` groupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` groupMembers.
     */
    skip?: number
    distinct?: GroupMembersScalarFieldEnum | GroupMembersScalarFieldEnum[]
  }

  /**
   * groupMembers create
   */
  export type groupMembersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groupMembers
     */
    select?: groupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groupMembers
     */
    omit?: groupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupMembersInclude<ExtArgs> | null
    /**
     * The data needed to create a groupMembers.
     */
    data: XOR<groupMembersCreateInput, groupMembersUncheckedCreateInput>
  }

  /**
   * groupMembers createMany
   */
  export type groupMembersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many groupMembers.
     */
    data: groupMembersCreateManyInput | groupMembersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * groupMembers update
   */
  export type groupMembersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groupMembers
     */
    select?: groupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groupMembers
     */
    omit?: groupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupMembersInclude<ExtArgs> | null
    /**
     * The data needed to update a groupMembers.
     */
    data: XOR<groupMembersUpdateInput, groupMembersUncheckedUpdateInput>
    /**
     * Choose, which groupMembers to update.
     */
    where: groupMembersWhereUniqueInput
  }

  /**
   * groupMembers updateMany
   */
  export type groupMembersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update groupMembers.
     */
    data: XOR<groupMembersUpdateManyMutationInput, groupMembersUncheckedUpdateManyInput>
    /**
     * Filter which groupMembers to update
     */
    where?: groupMembersWhereInput
    /**
     * Limit how many groupMembers to update.
     */
    limit?: number
  }

  /**
   * groupMembers upsert
   */
  export type groupMembersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groupMembers
     */
    select?: groupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groupMembers
     */
    omit?: groupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupMembersInclude<ExtArgs> | null
    /**
     * The filter to search for the groupMembers to update in case it exists.
     */
    where: groupMembersWhereUniqueInput
    /**
     * In case the groupMembers found by the `where` argument doesn't exist, create a new groupMembers with this data.
     */
    create: XOR<groupMembersCreateInput, groupMembersUncheckedCreateInput>
    /**
     * In case the groupMembers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<groupMembersUpdateInput, groupMembersUncheckedUpdateInput>
  }

  /**
   * groupMembers delete
   */
  export type groupMembersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groupMembers
     */
    select?: groupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groupMembers
     */
    omit?: groupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupMembersInclude<ExtArgs> | null
    /**
     * Filter which groupMembers to delete.
     */
    where: groupMembersWhereUniqueInput
  }

  /**
   * groupMembers deleteMany
   */
  export type groupMembersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which groupMembers to delete
     */
    where?: groupMembersWhereInput
    /**
     * Limit how many groupMembers to delete.
     */
    limit?: number
  }

  /**
   * groupMembers.group_member_permission
   */
  export type groupMembers$group_member_permissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_member_permission
     */
    select?: group_member_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_member_permission
     */
    omit?: group_member_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_member_permissionInclude<ExtArgs> | null
    where?: group_member_permissionWhereInput
    orderBy?: group_member_permissionOrderByWithRelationInput | group_member_permissionOrderByWithRelationInput[]
    cursor?: group_member_permissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Group_member_permissionScalarFieldEnum | Group_member_permissionScalarFieldEnum[]
  }

  /**
   * groupMembers without action
   */
  export type groupMembersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groupMembers
     */
    select?: groupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groupMembers
     */
    omit?: groupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupMembersInclude<ExtArgs> | null
  }


  /**
   * Model group_member_permission
   */

  export type AggregateGroup_member_permission = {
    _count: Group_member_permissionCountAggregateOutputType | null
    _avg: Group_member_permissionAvgAggregateOutputType | null
    _sum: Group_member_permissionSumAggregateOutputType | null
    _min: Group_member_permissionMinAggregateOutputType | null
    _max: Group_member_permissionMaxAggregateOutputType | null
  }

  export type Group_member_permissionAvgAggregateOutputType = {
    id: number | null
    groupMemberId: number | null
  }

  export type Group_member_permissionSumAggregateOutputType = {
    id: number | null
    groupMemberId: number | null
  }

  export type Group_member_permissionMinAggregateOutputType = {
    id: number | null
    groupMemberId: number | null
    canAcceptMembers: boolean | null
    canValidateRessources: boolean | null
    canDeleteMessages: boolean | null
    canEditGroupInfo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Group_member_permissionMaxAggregateOutputType = {
    id: number | null
    groupMemberId: number | null
    canAcceptMembers: boolean | null
    canValidateRessources: boolean | null
    canDeleteMessages: boolean | null
    canEditGroupInfo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Group_member_permissionCountAggregateOutputType = {
    id: number
    groupMemberId: number
    canAcceptMembers: number
    canValidateRessources: number
    canDeleteMessages: number
    canEditGroupInfo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Group_member_permissionAvgAggregateInputType = {
    id?: true
    groupMemberId?: true
  }

  export type Group_member_permissionSumAggregateInputType = {
    id?: true
    groupMemberId?: true
  }

  export type Group_member_permissionMinAggregateInputType = {
    id?: true
    groupMemberId?: true
    canAcceptMembers?: true
    canValidateRessources?: true
    canDeleteMessages?: true
    canEditGroupInfo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Group_member_permissionMaxAggregateInputType = {
    id?: true
    groupMemberId?: true
    canAcceptMembers?: true
    canValidateRessources?: true
    canDeleteMessages?: true
    canEditGroupInfo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Group_member_permissionCountAggregateInputType = {
    id?: true
    groupMemberId?: true
    canAcceptMembers?: true
    canValidateRessources?: true
    canDeleteMessages?: true
    canEditGroupInfo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Group_member_permissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which group_member_permission to aggregate.
     */
    where?: group_member_permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of group_member_permissions to fetch.
     */
    orderBy?: group_member_permissionOrderByWithRelationInput | group_member_permissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: group_member_permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` group_member_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` group_member_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned group_member_permissions
    **/
    _count?: true | Group_member_permissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Group_member_permissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Group_member_permissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Group_member_permissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Group_member_permissionMaxAggregateInputType
  }

  export type GetGroup_member_permissionAggregateType<T extends Group_member_permissionAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup_member_permission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup_member_permission[P]>
      : GetScalarType<T[P], AggregateGroup_member_permission[P]>
  }




  export type group_member_permissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: group_member_permissionWhereInput
    orderBy?: group_member_permissionOrderByWithAggregationInput | group_member_permissionOrderByWithAggregationInput[]
    by: Group_member_permissionScalarFieldEnum[] | Group_member_permissionScalarFieldEnum
    having?: group_member_permissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Group_member_permissionCountAggregateInputType | true
    _avg?: Group_member_permissionAvgAggregateInputType
    _sum?: Group_member_permissionSumAggregateInputType
    _min?: Group_member_permissionMinAggregateInputType
    _max?: Group_member_permissionMaxAggregateInputType
  }

  export type Group_member_permissionGroupByOutputType = {
    id: number
    groupMemberId: number
    canAcceptMembers: boolean
    canValidateRessources: boolean
    canDeleteMessages: boolean
    canEditGroupInfo: boolean
    createdAt: Date
    updatedAt: Date
    _count: Group_member_permissionCountAggregateOutputType | null
    _avg: Group_member_permissionAvgAggregateOutputType | null
    _sum: Group_member_permissionSumAggregateOutputType | null
    _min: Group_member_permissionMinAggregateOutputType | null
    _max: Group_member_permissionMaxAggregateOutputType | null
  }

  type GetGroup_member_permissionGroupByPayload<T extends group_member_permissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Group_member_permissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Group_member_permissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Group_member_permissionGroupByOutputType[P]>
            : GetScalarType<T[P], Group_member_permissionGroupByOutputType[P]>
        }
      >
    >


  export type group_member_permissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupMemberId?: boolean
    canAcceptMembers?: boolean
    canValidateRessources?: boolean
    canDeleteMessages?: boolean
    canEditGroupInfo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    groupMembers?: boolean | groupMembersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group_member_permission"]>



  export type group_member_permissionSelectScalar = {
    id?: boolean
    groupMemberId?: boolean
    canAcceptMembers?: boolean
    canValidateRessources?: boolean
    canDeleteMessages?: boolean
    canEditGroupInfo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type group_member_permissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "groupMemberId" | "canAcceptMembers" | "canValidateRessources" | "canDeleteMessages" | "canEditGroupInfo" | "createdAt" | "updatedAt", ExtArgs["result"]["group_member_permission"]>
  export type group_member_permissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groupMembers?: boolean | groupMembersDefaultArgs<ExtArgs>
  }

  export type $group_member_permissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "group_member_permission"
    objects: {
      groupMembers: Prisma.$groupMembersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      groupMemberId: number
      canAcceptMembers: boolean
      canValidateRessources: boolean
      canDeleteMessages: boolean
      canEditGroupInfo: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["group_member_permission"]>
    composites: {}
  }

  type group_member_permissionGetPayload<S extends boolean | null | undefined | group_member_permissionDefaultArgs> = $Result.GetResult<Prisma.$group_member_permissionPayload, S>

  type group_member_permissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<group_member_permissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Group_member_permissionCountAggregateInputType | true
    }

  export interface group_member_permissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['group_member_permission'], meta: { name: 'group_member_permission' } }
    /**
     * Find zero or one Group_member_permission that matches the filter.
     * @param {group_member_permissionFindUniqueArgs} args - Arguments to find a Group_member_permission
     * @example
     * // Get one Group_member_permission
     * const group_member_permission = await prisma.group_member_permission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends group_member_permissionFindUniqueArgs>(args: SelectSubset<T, group_member_permissionFindUniqueArgs<ExtArgs>>): Prisma__group_member_permissionClient<$Result.GetResult<Prisma.$group_member_permissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Group_member_permission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {group_member_permissionFindUniqueOrThrowArgs} args - Arguments to find a Group_member_permission
     * @example
     * // Get one Group_member_permission
     * const group_member_permission = await prisma.group_member_permission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends group_member_permissionFindUniqueOrThrowArgs>(args: SelectSubset<T, group_member_permissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__group_member_permissionClient<$Result.GetResult<Prisma.$group_member_permissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group_member_permission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_member_permissionFindFirstArgs} args - Arguments to find a Group_member_permission
     * @example
     * // Get one Group_member_permission
     * const group_member_permission = await prisma.group_member_permission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends group_member_permissionFindFirstArgs>(args?: SelectSubset<T, group_member_permissionFindFirstArgs<ExtArgs>>): Prisma__group_member_permissionClient<$Result.GetResult<Prisma.$group_member_permissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group_member_permission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_member_permissionFindFirstOrThrowArgs} args - Arguments to find a Group_member_permission
     * @example
     * // Get one Group_member_permission
     * const group_member_permission = await prisma.group_member_permission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends group_member_permissionFindFirstOrThrowArgs>(args?: SelectSubset<T, group_member_permissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__group_member_permissionClient<$Result.GetResult<Prisma.$group_member_permissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Group_member_permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_member_permissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Group_member_permissions
     * const group_member_permissions = await prisma.group_member_permission.findMany()
     * 
     * // Get first 10 Group_member_permissions
     * const group_member_permissions = await prisma.group_member_permission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const group_member_permissionWithIdOnly = await prisma.group_member_permission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends group_member_permissionFindManyArgs>(args?: SelectSubset<T, group_member_permissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$group_member_permissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Group_member_permission.
     * @param {group_member_permissionCreateArgs} args - Arguments to create a Group_member_permission.
     * @example
     * // Create one Group_member_permission
     * const Group_member_permission = await prisma.group_member_permission.create({
     *   data: {
     *     // ... data to create a Group_member_permission
     *   }
     * })
     * 
     */
    create<T extends group_member_permissionCreateArgs>(args: SelectSubset<T, group_member_permissionCreateArgs<ExtArgs>>): Prisma__group_member_permissionClient<$Result.GetResult<Prisma.$group_member_permissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Group_member_permissions.
     * @param {group_member_permissionCreateManyArgs} args - Arguments to create many Group_member_permissions.
     * @example
     * // Create many Group_member_permissions
     * const group_member_permission = await prisma.group_member_permission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends group_member_permissionCreateManyArgs>(args?: SelectSubset<T, group_member_permissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Group_member_permission.
     * @param {group_member_permissionDeleteArgs} args - Arguments to delete one Group_member_permission.
     * @example
     * // Delete one Group_member_permission
     * const Group_member_permission = await prisma.group_member_permission.delete({
     *   where: {
     *     // ... filter to delete one Group_member_permission
     *   }
     * })
     * 
     */
    delete<T extends group_member_permissionDeleteArgs>(args: SelectSubset<T, group_member_permissionDeleteArgs<ExtArgs>>): Prisma__group_member_permissionClient<$Result.GetResult<Prisma.$group_member_permissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Group_member_permission.
     * @param {group_member_permissionUpdateArgs} args - Arguments to update one Group_member_permission.
     * @example
     * // Update one Group_member_permission
     * const group_member_permission = await prisma.group_member_permission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends group_member_permissionUpdateArgs>(args: SelectSubset<T, group_member_permissionUpdateArgs<ExtArgs>>): Prisma__group_member_permissionClient<$Result.GetResult<Prisma.$group_member_permissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Group_member_permissions.
     * @param {group_member_permissionDeleteManyArgs} args - Arguments to filter Group_member_permissions to delete.
     * @example
     * // Delete a few Group_member_permissions
     * const { count } = await prisma.group_member_permission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends group_member_permissionDeleteManyArgs>(args?: SelectSubset<T, group_member_permissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Group_member_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_member_permissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Group_member_permissions
     * const group_member_permission = await prisma.group_member_permission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends group_member_permissionUpdateManyArgs>(args: SelectSubset<T, group_member_permissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Group_member_permission.
     * @param {group_member_permissionUpsertArgs} args - Arguments to update or create a Group_member_permission.
     * @example
     * // Update or create a Group_member_permission
     * const group_member_permission = await prisma.group_member_permission.upsert({
     *   create: {
     *     // ... data to create a Group_member_permission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group_member_permission we want to update
     *   }
     * })
     */
    upsert<T extends group_member_permissionUpsertArgs>(args: SelectSubset<T, group_member_permissionUpsertArgs<ExtArgs>>): Prisma__group_member_permissionClient<$Result.GetResult<Prisma.$group_member_permissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Group_member_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_member_permissionCountArgs} args - Arguments to filter Group_member_permissions to count.
     * @example
     * // Count the number of Group_member_permissions
     * const count = await prisma.group_member_permission.count({
     *   where: {
     *     // ... the filter for the Group_member_permissions we want to count
     *   }
     * })
    **/
    count<T extends group_member_permissionCountArgs>(
      args?: Subset<T, group_member_permissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Group_member_permissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group_member_permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Group_member_permissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Group_member_permissionAggregateArgs>(args: Subset<T, Group_member_permissionAggregateArgs>): Prisma.PrismaPromise<GetGroup_member_permissionAggregateType<T>>

    /**
     * Group by Group_member_permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {group_member_permissionGroupByArgs} args - Group by arguments.
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
      T extends group_member_permissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: group_member_permissionGroupByArgs['orderBy'] }
        : { orderBy?: group_member_permissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, group_member_permissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroup_member_permissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the group_member_permission model
   */
  readonly fields: group_member_permissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for group_member_permission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__group_member_permissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    groupMembers<T extends groupMembersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, groupMembersDefaultArgs<ExtArgs>>): Prisma__groupMembersClient<$Result.GetResult<Prisma.$groupMembersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the group_member_permission model
   */
  interface group_member_permissionFieldRefs {
    readonly id: FieldRef<"group_member_permission", 'Int'>
    readonly groupMemberId: FieldRef<"group_member_permission", 'Int'>
    readonly canAcceptMembers: FieldRef<"group_member_permission", 'Boolean'>
    readonly canValidateRessources: FieldRef<"group_member_permission", 'Boolean'>
    readonly canDeleteMessages: FieldRef<"group_member_permission", 'Boolean'>
    readonly canEditGroupInfo: FieldRef<"group_member_permission", 'Boolean'>
    readonly createdAt: FieldRef<"group_member_permission", 'DateTime'>
    readonly updatedAt: FieldRef<"group_member_permission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * group_member_permission findUnique
   */
  export type group_member_permissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_member_permission
     */
    select?: group_member_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_member_permission
     */
    omit?: group_member_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_member_permissionInclude<ExtArgs> | null
    /**
     * Filter, which group_member_permission to fetch.
     */
    where: group_member_permissionWhereUniqueInput
  }

  /**
   * group_member_permission findUniqueOrThrow
   */
  export type group_member_permissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_member_permission
     */
    select?: group_member_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_member_permission
     */
    omit?: group_member_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_member_permissionInclude<ExtArgs> | null
    /**
     * Filter, which group_member_permission to fetch.
     */
    where: group_member_permissionWhereUniqueInput
  }

  /**
   * group_member_permission findFirst
   */
  export type group_member_permissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_member_permission
     */
    select?: group_member_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_member_permission
     */
    omit?: group_member_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_member_permissionInclude<ExtArgs> | null
    /**
     * Filter, which group_member_permission to fetch.
     */
    where?: group_member_permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of group_member_permissions to fetch.
     */
    orderBy?: group_member_permissionOrderByWithRelationInput | group_member_permissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for group_member_permissions.
     */
    cursor?: group_member_permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` group_member_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` group_member_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of group_member_permissions.
     */
    distinct?: Group_member_permissionScalarFieldEnum | Group_member_permissionScalarFieldEnum[]
  }

  /**
   * group_member_permission findFirstOrThrow
   */
  export type group_member_permissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_member_permission
     */
    select?: group_member_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_member_permission
     */
    omit?: group_member_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_member_permissionInclude<ExtArgs> | null
    /**
     * Filter, which group_member_permission to fetch.
     */
    where?: group_member_permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of group_member_permissions to fetch.
     */
    orderBy?: group_member_permissionOrderByWithRelationInput | group_member_permissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for group_member_permissions.
     */
    cursor?: group_member_permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` group_member_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` group_member_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of group_member_permissions.
     */
    distinct?: Group_member_permissionScalarFieldEnum | Group_member_permissionScalarFieldEnum[]
  }

  /**
   * group_member_permission findMany
   */
  export type group_member_permissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_member_permission
     */
    select?: group_member_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_member_permission
     */
    omit?: group_member_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_member_permissionInclude<ExtArgs> | null
    /**
     * Filter, which group_member_permissions to fetch.
     */
    where?: group_member_permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of group_member_permissions to fetch.
     */
    orderBy?: group_member_permissionOrderByWithRelationInput | group_member_permissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing group_member_permissions.
     */
    cursor?: group_member_permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` group_member_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` group_member_permissions.
     */
    skip?: number
    distinct?: Group_member_permissionScalarFieldEnum | Group_member_permissionScalarFieldEnum[]
  }

  /**
   * group_member_permission create
   */
  export type group_member_permissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_member_permission
     */
    select?: group_member_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_member_permission
     */
    omit?: group_member_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_member_permissionInclude<ExtArgs> | null
    /**
     * The data needed to create a group_member_permission.
     */
    data: XOR<group_member_permissionCreateInput, group_member_permissionUncheckedCreateInput>
  }

  /**
   * group_member_permission createMany
   */
  export type group_member_permissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many group_member_permissions.
     */
    data: group_member_permissionCreateManyInput | group_member_permissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * group_member_permission update
   */
  export type group_member_permissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_member_permission
     */
    select?: group_member_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_member_permission
     */
    omit?: group_member_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_member_permissionInclude<ExtArgs> | null
    /**
     * The data needed to update a group_member_permission.
     */
    data: XOR<group_member_permissionUpdateInput, group_member_permissionUncheckedUpdateInput>
    /**
     * Choose, which group_member_permission to update.
     */
    where: group_member_permissionWhereUniqueInput
  }

  /**
   * group_member_permission updateMany
   */
  export type group_member_permissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update group_member_permissions.
     */
    data: XOR<group_member_permissionUpdateManyMutationInput, group_member_permissionUncheckedUpdateManyInput>
    /**
     * Filter which group_member_permissions to update
     */
    where?: group_member_permissionWhereInput
    /**
     * Limit how many group_member_permissions to update.
     */
    limit?: number
  }

  /**
   * group_member_permission upsert
   */
  export type group_member_permissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_member_permission
     */
    select?: group_member_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_member_permission
     */
    omit?: group_member_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_member_permissionInclude<ExtArgs> | null
    /**
     * The filter to search for the group_member_permission to update in case it exists.
     */
    where: group_member_permissionWhereUniqueInput
    /**
     * In case the group_member_permission found by the `where` argument doesn't exist, create a new group_member_permission with this data.
     */
    create: XOR<group_member_permissionCreateInput, group_member_permissionUncheckedCreateInput>
    /**
     * In case the group_member_permission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<group_member_permissionUpdateInput, group_member_permissionUncheckedUpdateInput>
  }

  /**
   * group_member_permission delete
   */
  export type group_member_permissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_member_permission
     */
    select?: group_member_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_member_permission
     */
    omit?: group_member_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_member_permissionInclude<ExtArgs> | null
    /**
     * Filter which group_member_permission to delete.
     */
    where: group_member_permissionWhereUniqueInput
  }

  /**
   * group_member_permission deleteMany
   */
  export type group_member_permissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which group_member_permissions to delete
     */
    where?: group_member_permissionWhereInput
    /**
     * Limit how many group_member_permissions to delete.
     */
    limit?: number
  }

  /**
   * group_member_permission without action
   */
  export type group_member_permissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the group_member_permission
     */
    select?: group_member_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the group_member_permission
     */
    omit?: group_member_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: group_member_permissionInclude<ExtArgs> | null
  }


  /**
   * Model system_group_permission
   */

  export type AggregateSystem_group_permission = {
    _count: System_group_permissionCountAggregateOutputType | null
    _avg: System_group_permissionAvgAggregateOutputType | null
    _sum: System_group_permissionSumAggregateOutputType | null
    _min: System_group_permissionMinAggregateOutputType | null
    _max: System_group_permissionMaxAggregateOutputType | null
  }

  export type System_group_permissionAvgAggregateOutputType = {
    id: number | null
    groupId: number | null
    maxMember: number | null
    maxFileSizeMB: number | null
  }

  export type System_group_permissionSumAggregateOutputType = {
    id: number | null
    groupId: number | null
    maxMember: number | null
    maxFileSizeMB: number | null
  }

  export type System_group_permissionMinAggregateOutputType = {
    id: number | null
    groupId: number | null
    maxMember: number | null
    allowFileSharing: boolean | null
    allowPublicVisibility: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    maxFileSizeMB: number | null
    allowMessages: boolean | null
    autoAccept: boolean | null
  }

  export type System_group_permissionMaxAggregateOutputType = {
    id: number | null
    groupId: number | null
    maxMember: number | null
    allowFileSharing: boolean | null
    allowPublicVisibility: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    maxFileSizeMB: number | null
    allowMessages: boolean | null
    autoAccept: boolean | null
  }

  export type System_group_permissionCountAggregateOutputType = {
    id: number
    groupId: number
    maxMember: number
    allowFileSharing: number
    allowPublicVisibility: number
    createdAt: number
    updatedAt: number
    maxFileSizeMB: number
    allowMessages: number
    autoAccept: number
    _all: number
  }


  export type System_group_permissionAvgAggregateInputType = {
    id?: true
    groupId?: true
    maxMember?: true
    maxFileSizeMB?: true
  }

  export type System_group_permissionSumAggregateInputType = {
    id?: true
    groupId?: true
    maxMember?: true
    maxFileSizeMB?: true
  }

  export type System_group_permissionMinAggregateInputType = {
    id?: true
    groupId?: true
    maxMember?: true
    allowFileSharing?: true
    allowPublicVisibility?: true
    createdAt?: true
    updatedAt?: true
    maxFileSizeMB?: true
    allowMessages?: true
    autoAccept?: true
  }

  export type System_group_permissionMaxAggregateInputType = {
    id?: true
    groupId?: true
    maxMember?: true
    allowFileSharing?: true
    allowPublicVisibility?: true
    createdAt?: true
    updatedAt?: true
    maxFileSizeMB?: true
    allowMessages?: true
    autoAccept?: true
  }

  export type System_group_permissionCountAggregateInputType = {
    id?: true
    groupId?: true
    maxMember?: true
    allowFileSharing?: true
    allowPublicVisibility?: true
    createdAt?: true
    updatedAt?: true
    maxFileSizeMB?: true
    allowMessages?: true
    autoAccept?: true
    _all?: true
  }

  export type System_group_permissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which system_group_permission to aggregate.
     */
    where?: system_group_permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of system_group_permissions to fetch.
     */
    orderBy?: system_group_permissionOrderByWithRelationInput | system_group_permissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: system_group_permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` system_group_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` system_group_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned system_group_permissions
    **/
    _count?: true | System_group_permissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: System_group_permissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: System_group_permissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: System_group_permissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: System_group_permissionMaxAggregateInputType
  }

  export type GetSystem_group_permissionAggregateType<T extends System_group_permissionAggregateArgs> = {
        [P in keyof T & keyof AggregateSystem_group_permission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystem_group_permission[P]>
      : GetScalarType<T[P], AggregateSystem_group_permission[P]>
  }




  export type system_group_permissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: system_group_permissionWhereInput
    orderBy?: system_group_permissionOrderByWithAggregationInput | system_group_permissionOrderByWithAggregationInput[]
    by: System_group_permissionScalarFieldEnum[] | System_group_permissionScalarFieldEnum
    having?: system_group_permissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: System_group_permissionCountAggregateInputType | true
    _avg?: System_group_permissionAvgAggregateInputType
    _sum?: System_group_permissionSumAggregateInputType
    _min?: System_group_permissionMinAggregateInputType
    _max?: System_group_permissionMaxAggregateInputType
  }

  export type System_group_permissionGroupByOutputType = {
    id: number
    groupId: number
    maxMember: number
    allowFileSharing: boolean
    allowPublicVisibility: boolean
    createdAt: Date
    updatedAt: Date
    maxFileSizeMB: number
    allowMessages: boolean
    autoAccept: boolean
    _count: System_group_permissionCountAggregateOutputType | null
    _avg: System_group_permissionAvgAggregateOutputType | null
    _sum: System_group_permissionSumAggregateOutputType | null
    _min: System_group_permissionMinAggregateOutputType | null
    _max: System_group_permissionMaxAggregateOutputType | null
  }

  type GetSystem_group_permissionGroupByPayload<T extends system_group_permissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<System_group_permissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof System_group_permissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], System_group_permissionGroupByOutputType[P]>
            : GetScalarType<T[P], System_group_permissionGroupByOutputType[P]>
        }
      >
    >


  export type system_group_permissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    maxMember?: boolean
    allowFileSharing?: boolean
    allowPublicVisibility?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    maxFileSizeMB?: boolean
    allowMessages?: boolean
    autoAccept?: boolean
    groups?: boolean | groupsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["system_group_permission"]>



  export type system_group_permissionSelectScalar = {
    id?: boolean
    groupId?: boolean
    maxMember?: boolean
    allowFileSharing?: boolean
    allowPublicVisibility?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    maxFileSizeMB?: boolean
    allowMessages?: boolean
    autoAccept?: boolean
  }

  export type system_group_permissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "groupId" | "maxMember" | "allowFileSharing" | "allowPublicVisibility" | "createdAt" | "updatedAt" | "maxFileSizeMB" | "allowMessages" | "autoAccept", ExtArgs["result"]["system_group_permission"]>
  export type system_group_permissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groups?: boolean | groupsDefaultArgs<ExtArgs>
  }

  export type $system_group_permissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "system_group_permission"
    objects: {
      groups: Prisma.$groupsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      groupId: number
      maxMember: number
      allowFileSharing: boolean
      allowPublicVisibility: boolean
      createdAt: Date
      updatedAt: Date
      maxFileSizeMB: number
      allowMessages: boolean
      autoAccept: boolean
    }, ExtArgs["result"]["system_group_permission"]>
    composites: {}
  }

  type system_group_permissionGetPayload<S extends boolean | null | undefined | system_group_permissionDefaultArgs> = $Result.GetResult<Prisma.$system_group_permissionPayload, S>

  type system_group_permissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<system_group_permissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: System_group_permissionCountAggregateInputType | true
    }

  export interface system_group_permissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['system_group_permission'], meta: { name: 'system_group_permission' } }
    /**
     * Find zero or one System_group_permission that matches the filter.
     * @param {system_group_permissionFindUniqueArgs} args - Arguments to find a System_group_permission
     * @example
     * // Get one System_group_permission
     * const system_group_permission = await prisma.system_group_permission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends system_group_permissionFindUniqueArgs>(args: SelectSubset<T, system_group_permissionFindUniqueArgs<ExtArgs>>): Prisma__system_group_permissionClient<$Result.GetResult<Prisma.$system_group_permissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one System_group_permission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {system_group_permissionFindUniqueOrThrowArgs} args - Arguments to find a System_group_permission
     * @example
     * // Get one System_group_permission
     * const system_group_permission = await prisma.system_group_permission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends system_group_permissionFindUniqueOrThrowArgs>(args: SelectSubset<T, system_group_permissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__system_group_permissionClient<$Result.GetResult<Prisma.$system_group_permissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first System_group_permission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {system_group_permissionFindFirstArgs} args - Arguments to find a System_group_permission
     * @example
     * // Get one System_group_permission
     * const system_group_permission = await prisma.system_group_permission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends system_group_permissionFindFirstArgs>(args?: SelectSubset<T, system_group_permissionFindFirstArgs<ExtArgs>>): Prisma__system_group_permissionClient<$Result.GetResult<Prisma.$system_group_permissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first System_group_permission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {system_group_permissionFindFirstOrThrowArgs} args - Arguments to find a System_group_permission
     * @example
     * // Get one System_group_permission
     * const system_group_permission = await prisma.system_group_permission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends system_group_permissionFindFirstOrThrowArgs>(args?: SelectSubset<T, system_group_permissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__system_group_permissionClient<$Result.GetResult<Prisma.$system_group_permissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more System_group_permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {system_group_permissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all System_group_permissions
     * const system_group_permissions = await prisma.system_group_permission.findMany()
     * 
     * // Get first 10 System_group_permissions
     * const system_group_permissions = await prisma.system_group_permission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const system_group_permissionWithIdOnly = await prisma.system_group_permission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends system_group_permissionFindManyArgs>(args?: SelectSubset<T, system_group_permissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$system_group_permissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a System_group_permission.
     * @param {system_group_permissionCreateArgs} args - Arguments to create a System_group_permission.
     * @example
     * // Create one System_group_permission
     * const System_group_permission = await prisma.system_group_permission.create({
     *   data: {
     *     // ... data to create a System_group_permission
     *   }
     * })
     * 
     */
    create<T extends system_group_permissionCreateArgs>(args: SelectSubset<T, system_group_permissionCreateArgs<ExtArgs>>): Prisma__system_group_permissionClient<$Result.GetResult<Prisma.$system_group_permissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many System_group_permissions.
     * @param {system_group_permissionCreateManyArgs} args - Arguments to create many System_group_permissions.
     * @example
     * // Create many System_group_permissions
     * const system_group_permission = await prisma.system_group_permission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends system_group_permissionCreateManyArgs>(args?: SelectSubset<T, system_group_permissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a System_group_permission.
     * @param {system_group_permissionDeleteArgs} args - Arguments to delete one System_group_permission.
     * @example
     * // Delete one System_group_permission
     * const System_group_permission = await prisma.system_group_permission.delete({
     *   where: {
     *     // ... filter to delete one System_group_permission
     *   }
     * })
     * 
     */
    delete<T extends system_group_permissionDeleteArgs>(args: SelectSubset<T, system_group_permissionDeleteArgs<ExtArgs>>): Prisma__system_group_permissionClient<$Result.GetResult<Prisma.$system_group_permissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one System_group_permission.
     * @param {system_group_permissionUpdateArgs} args - Arguments to update one System_group_permission.
     * @example
     * // Update one System_group_permission
     * const system_group_permission = await prisma.system_group_permission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends system_group_permissionUpdateArgs>(args: SelectSubset<T, system_group_permissionUpdateArgs<ExtArgs>>): Prisma__system_group_permissionClient<$Result.GetResult<Prisma.$system_group_permissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more System_group_permissions.
     * @param {system_group_permissionDeleteManyArgs} args - Arguments to filter System_group_permissions to delete.
     * @example
     * // Delete a few System_group_permissions
     * const { count } = await prisma.system_group_permission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends system_group_permissionDeleteManyArgs>(args?: SelectSubset<T, system_group_permissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more System_group_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {system_group_permissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many System_group_permissions
     * const system_group_permission = await prisma.system_group_permission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends system_group_permissionUpdateManyArgs>(args: SelectSubset<T, system_group_permissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one System_group_permission.
     * @param {system_group_permissionUpsertArgs} args - Arguments to update or create a System_group_permission.
     * @example
     * // Update or create a System_group_permission
     * const system_group_permission = await prisma.system_group_permission.upsert({
     *   create: {
     *     // ... data to create a System_group_permission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the System_group_permission we want to update
     *   }
     * })
     */
    upsert<T extends system_group_permissionUpsertArgs>(args: SelectSubset<T, system_group_permissionUpsertArgs<ExtArgs>>): Prisma__system_group_permissionClient<$Result.GetResult<Prisma.$system_group_permissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of System_group_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {system_group_permissionCountArgs} args - Arguments to filter System_group_permissions to count.
     * @example
     * // Count the number of System_group_permissions
     * const count = await prisma.system_group_permission.count({
     *   where: {
     *     // ... the filter for the System_group_permissions we want to count
     *   }
     * })
    **/
    count<T extends system_group_permissionCountArgs>(
      args?: Subset<T, system_group_permissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], System_group_permissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a System_group_permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {System_group_permissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends System_group_permissionAggregateArgs>(args: Subset<T, System_group_permissionAggregateArgs>): Prisma.PrismaPromise<GetSystem_group_permissionAggregateType<T>>

    /**
     * Group by System_group_permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {system_group_permissionGroupByArgs} args - Group by arguments.
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
      T extends system_group_permissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: system_group_permissionGroupByArgs['orderBy'] }
        : { orderBy?: system_group_permissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, system_group_permissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystem_group_permissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the system_group_permission model
   */
  readonly fields: system_group_permissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for system_group_permission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__system_group_permissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    groups<T extends groupsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, groupsDefaultArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the system_group_permission model
   */
  interface system_group_permissionFieldRefs {
    readonly id: FieldRef<"system_group_permission", 'Int'>
    readonly groupId: FieldRef<"system_group_permission", 'Int'>
    readonly maxMember: FieldRef<"system_group_permission", 'Int'>
    readonly allowFileSharing: FieldRef<"system_group_permission", 'Boolean'>
    readonly allowPublicVisibility: FieldRef<"system_group_permission", 'Boolean'>
    readonly createdAt: FieldRef<"system_group_permission", 'DateTime'>
    readonly updatedAt: FieldRef<"system_group_permission", 'DateTime'>
    readonly maxFileSizeMB: FieldRef<"system_group_permission", 'Int'>
    readonly allowMessages: FieldRef<"system_group_permission", 'Boolean'>
    readonly autoAccept: FieldRef<"system_group_permission", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * system_group_permission findUnique
   */
  export type system_group_permissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the system_group_permission
     */
    select?: system_group_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the system_group_permission
     */
    omit?: system_group_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: system_group_permissionInclude<ExtArgs> | null
    /**
     * Filter, which system_group_permission to fetch.
     */
    where: system_group_permissionWhereUniqueInput
  }

  /**
   * system_group_permission findUniqueOrThrow
   */
  export type system_group_permissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the system_group_permission
     */
    select?: system_group_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the system_group_permission
     */
    omit?: system_group_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: system_group_permissionInclude<ExtArgs> | null
    /**
     * Filter, which system_group_permission to fetch.
     */
    where: system_group_permissionWhereUniqueInput
  }

  /**
   * system_group_permission findFirst
   */
  export type system_group_permissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the system_group_permission
     */
    select?: system_group_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the system_group_permission
     */
    omit?: system_group_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: system_group_permissionInclude<ExtArgs> | null
    /**
     * Filter, which system_group_permission to fetch.
     */
    where?: system_group_permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of system_group_permissions to fetch.
     */
    orderBy?: system_group_permissionOrderByWithRelationInput | system_group_permissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for system_group_permissions.
     */
    cursor?: system_group_permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` system_group_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` system_group_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of system_group_permissions.
     */
    distinct?: System_group_permissionScalarFieldEnum | System_group_permissionScalarFieldEnum[]
  }

  /**
   * system_group_permission findFirstOrThrow
   */
  export type system_group_permissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the system_group_permission
     */
    select?: system_group_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the system_group_permission
     */
    omit?: system_group_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: system_group_permissionInclude<ExtArgs> | null
    /**
     * Filter, which system_group_permission to fetch.
     */
    where?: system_group_permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of system_group_permissions to fetch.
     */
    orderBy?: system_group_permissionOrderByWithRelationInput | system_group_permissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for system_group_permissions.
     */
    cursor?: system_group_permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` system_group_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` system_group_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of system_group_permissions.
     */
    distinct?: System_group_permissionScalarFieldEnum | System_group_permissionScalarFieldEnum[]
  }

  /**
   * system_group_permission findMany
   */
  export type system_group_permissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the system_group_permission
     */
    select?: system_group_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the system_group_permission
     */
    omit?: system_group_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: system_group_permissionInclude<ExtArgs> | null
    /**
     * Filter, which system_group_permissions to fetch.
     */
    where?: system_group_permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of system_group_permissions to fetch.
     */
    orderBy?: system_group_permissionOrderByWithRelationInput | system_group_permissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing system_group_permissions.
     */
    cursor?: system_group_permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` system_group_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` system_group_permissions.
     */
    skip?: number
    distinct?: System_group_permissionScalarFieldEnum | System_group_permissionScalarFieldEnum[]
  }

  /**
   * system_group_permission create
   */
  export type system_group_permissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the system_group_permission
     */
    select?: system_group_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the system_group_permission
     */
    omit?: system_group_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: system_group_permissionInclude<ExtArgs> | null
    /**
     * The data needed to create a system_group_permission.
     */
    data: XOR<system_group_permissionCreateInput, system_group_permissionUncheckedCreateInput>
  }

  /**
   * system_group_permission createMany
   */
  export type system_group_permissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many system_group_permissions.
     */
    data: system_group_permissionCreateManyInput | system_group_permissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * system_group_permission update
   */
  export type system_group_permissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the system_group_permission
     */
    select?: system_group_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the system_group_permission
     */
    omit?: system_group_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: system_group_permissionInclude<ExtArgs> | null
    /**
     * The data needed to update a system_group_permission.
     */
    data: XOR<system_group_permissionUpdateInput, system_group_permissionUncheckedUpdateInput>
    /**
     * Choose, which system_group_permission to update.
     */
    where: system_group_permissionWhereUniqueInput
  }

  /**
   * system_group_permission updateMany
   */
  export type system_group_permissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update system_group_permissions.
     */
    data: XOR<system_group_permissionUpdateManyMutationInput, system_group_permissionUncheckedUpdateManyInput>
    /**
     * Filter which system_group_permissions to update
     */
    where?: system_group_permissionWhereInput
    /**
     * Limit how many system_group_permissions to update.
     */
    limit?: number
  }

  /**
   * system_group_permission upsert
   */
  export type system_group_permissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the system_group_permission
     */
    select?: system_group_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the system_group_permission
     */
    omit?: system_group_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: system_group_permissionInclude<ExtArgs> | null
    /**
     * The filter to search for the system_group_permission to update in case it exists.
     */
    where: system_group_permissionWhereUniqueInput
    /**
     * In case the system_group_permission found by the `where` argument doesn't exist, create a new system_group_permission with this data.
     */
    create: XOR<system_group_permissionCreateInput, system_group_permissionUncheckedCreateInput>
    /**
     * In case the system_group_permission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<system_group_permissionUpdateInput, system_group_permissionUncheckedUpdateInput>
  }

  /**
   * system_group_permission delete
   */
  export type system_group_permissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the system_group_permission
     */
    select?: system_group_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the system_group_permission
     */
    omit?: system_group_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: system_group_permissionInclude<ExtArgs> | null
    /**
     * Filter which system_group_permission to delete.
     */
    where: system_group_permissionWhereUniqueInput
  }

  /**
   * system_group_permission deleteMany
   */
  export type system_group_permissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which system_group_permissions to delete
     */
    where?: system_group_permissionWhereInput
    /**
     * Limit how many system_group_permissions to delete.
     */
    limit?: number
  }

  /**
   * system_group_permission without action
   */
  export type system_group_permissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the system_group_permission
     */
    select?: system_group_permissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the system_group_permission
     */
    omit?: system_group_permissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: system_group_permissionInclude<ExtArgs> | null
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


  export const StudentScalarFieldEnum: {
    Mat: 'Mat',
    name: 'name',
    email: 'email',
    role: 'role',
    password: 'password',
    resetToken: 'resetToken',
    resetTokenExpiry: 'resetTokenExpiry',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    image: 'image',
    bio: 'bio'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    content: 'content',
    senderId: 'senderId',
    receiverId: 'receiverId',
    groupId: 'groupId',
    isRead: 'isRead',
    createdAt: 'createdAt',
    type: 'type',
    resourceId: 'resourceId'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const GroupsScalarFieldEnum: {
    id: 'id',
    type: 'type',
    visibility: 'visibility',
    name: 'name',
    description: 'description',
    validation: 'validation',
    createdAt: 'createdAt'
  };

  export type GroupsScalarFieldEnum = (typeof GroupsScalarFieldEnum)[keyof typeof GroupsScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    titre: 'titre',
    content: 'content',
    studentId: 'studentId',
    groupId: 'groupId',
    type: 'type',
    isRead: 'isRead',
    sentAt: 'sentAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const ResourcesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    filepath: 'filepath',
    size: 'size',
    studentId: 'studentId',
    validation: 'validation',
    groupId: 'groupId',
    uploadedAt: 'uploadedAt',
    fileType: 'fileType',
    mimeType: 'mimeType'
  };

  export type ResourcesScalarFieldEnum = (typeof ResourcesScalarFieldEnum)[keyof typeof ResourcesScalarFieldEnum]


  export const GroupMembersScalarFieldEnum: {
    id: 'id',
    role: 'role',
    status: 'status',
    date_adhesion: 'date_adhesion',
    studentId: 'studentId',
    groupId: 'groupId'
  };

  export type GroupMembersScalarFieldEnum = (typeof GroupMembersScalarFieldEnum)[keyof typeof GroupMembersScalarFieldEnum]


  export const Group_member_permissionScalarFieldEnum: {
    id: 'id',
    groupMemberId: 'groupMemberId',
    canAcceptMembers: 'canAcceptMembers',
    canValidateRessources: 'canValidateRessources',
    canDeleteMessages: 'canDeleteMessages',
    canEditGroupInfo: 'canEditGroupInfo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Group_member_permissionScalarFieldEnum = (typeof Group_member_permissionScalarFieldEnum)[keyof typeof Group_member_permissionScalarFieldEnum]


  export const System_group_permissionScalarFieldEnum: {
    id: 'id',
    groupId: 'groupId',
    maxMember: 'maxMember',
    allowFileSharing: 'allowFileSharing',
    allowPublicVisibility: 'allowPublicVisibility',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    maxFileSizeMB: 'maxFileSizeMB',
    allowMessages: 'allowMessages',
    autoAccept: 'autoAccept'
  };

  export type System_group_permissionScalarFieldEnum = (typeof System_group_permissionScalarFieldEnum)[keyof typeof System_group_permissionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const studentOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    password: 'password',
    resetToken: 'resetToken'
  };

  export type studentOrderByRelevanceFieldEnum = (typeof studentOrderByRelevanceFieldEnum)[keyof typeof studentOrderByRelevanceFieldEnum]


  export const profileOrderByRelevanceFieldEnum: {
    image: 'image',
    bio: 'bio'
  };

  export type profileOrderByRelevanceFieldEnum = (typeof profileOrderByRelevanceFieldEnum)[keyof typeof profileOrderByRelevanceFieldEnum]


  export const messageOrderByRelevanceFieldEnum: {
    content: 'content'
  };

  export type messageOrderByRelevanceFieldEnum = (typeof messageOrderByRelevanceFieldEnum)[keyof typeof messageOrderByRelevanceFieldEnum]


  export const groupsOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type groupsOrderByRelevanceFieldEnum = (typeof groupsOrderByRelevanceFieldEnum)[keyof typeof groupsOrderByRelevanceFieldEnum]


  export const notificationOrderByRelevanceFieldEnum: {
    titre: 'titre',
    content: 'content'
  };

  export type notificationOrderByRelevanceFieldEnum = (typeof notificationOrderByRelevanceFieldEnum)[keyof typeof notificationOrderByRelevanceFieldEnum]


  export const resourcesOrderByRelevanceFieldEnum: {
    name: 'name',
    filepath: 'filepath',
    fileType: 'fileType',
    mimeType: 'mimeType'
  };

  export type resourcesOrderByRelevanceFieldEnum = (typeof resourcesOrderByRelevanceFieldEnum)[keyof typeof resourcesOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'student_role'
   */
  export type Enumstudent_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'student_role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'message_type'
   */
  export type Enummessage_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'message_type'>
    


  /**
   * Reference to a field of type 'groups_type'
   */
  export type Enumgroups_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'groups_type'>
    


  /**
   * Reference to a field of type 'groups_visibility'
   */
  export type Enumgroups_visibilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'groups_visibility'>
    


  /**
   * Reference to a field of type 'groups_validation'
   */
  export type Enumgroups_validationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'groups_validation'>
    


  /**
   * Reference to a field of type 'notification_type'
   */
  export type Enumnotification_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'notification_type'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'resources_validation'
   */
  export type Enumresources_validationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'resources_validation'>
    


  /**
   * Reference to a field of type 'groupMembers_role'
   */
  export type EnumgroupMembers_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'groupMembers_role'>
    


  /**
   * Reference to a field of type 'groupMembers_status'
   */
  export type EnumgroupMembers_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'groupMembers_status'>
    
  /**
   * Deep Input Types
   */


  export type studentWhereInput = {
    AND?: studentWhereInput | studentWhereInput[]
    OR?: studentWhereInput[]
    NOT?: studentWhereInput | studentWhereInput[]
    Mat?: IntFilter<"student"> | number
    name?: StringFilter<"student"> | string
    email?: StringFilter<"student"> | string
    role?: Enumstudent_roleFilter<"student"> | $Enums.student_role
    password?: StringFilter<"student"> | string
    resetToken?: StringNullableFilter<"student"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"student"> | Date | string | null
    createdAt?: DateTimeFilter<"student"> | Date | string
    updatedAt?: DateTimeFilter<"student"> | Date | string
    groupMembers?: GroupMembersListRelationFilter
    receivedMessages?: MessageListRelationFilter
    sentMessages?: MessageListRelationFilter
    profile?: XOR<ProfileNullableScalarRelationFilter, profileWhereInput> | null
    resources?: ResourcesListRelationFilter
  }

  export type studentOrderByWithRelationInput = {
    Mat?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    groupMembers?: groupMembersOrderByRelationAggregateInput
    receivedMessages?: messageOrderByRelationAggregateInput
    sentMessages?: messageOrderByRelationAggregateInput
    profile?: profileOrderByWithRelationInput
    resources?: resourcesOrderByRelationAggregateInput
    _relevance?: studentOrderByRelevanceInput
  }

  export type studentWhereUniqueInput = Prisma.AtLeast<{
    Mat?: number
    email?: string
    AND?: studentWhereInput | studentWhereInput[]
    OR?: studentWhereInput[]
    NOT?: studentWhereInput | studentWhereInput[]
    name?: StringFilter<"student"> | string
    role?: Enumstudent_roleFilter<"student"> | $Enums.student_role
    password?: StringFilter<"student"> | string
    resetToken?: StringNullableFilter<"student"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"student"> | Date | string | null
    createdAt?: DateTimeFilter<"student"> | Date | string
    updatedAt?: DateTimeFilter<"student"> | Date | string
    groupMembers?: GroupMembersListRelationFilter
    receivedMessages?: MessageListRelationFilter
    sentMessages?: MessageListRelationFilter
    profile?: XOR<ProfileNullableScalarRelationFilter, profileWhereInput> | null
    resources?: ResourcesListRelationFilter
  }, "Mat" | "email">

  export type studentOrderByWithAggregationInput = {
    Mat?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: studentCountOrderByAggregateInput
    _avg?: studentAvgOrderByAggregateInput
    _max?: studentMaxOrderByAggregateInput
    _min?: studentMinOrderByAggregateInput
    _sum?: studentSumOrderByAggregateInput
  }

  export type studentScalarWhereWithAggregatesInput = {
    AND?: studentScalarWhereWithAggregatesInput | studentScalarWhereWithAggregatesInput[]
    OR?: studentScalarWhereWithAggregatesInput[]
    NOT?: studentScalarWhereWithAggregatesInput | studentScalarWhereWithAggregatesInput[]
    Mat?: IntWithAggregatesFilter<"student"> | number
    name?: StringWithAggregatesFilter<"student"> | string
    email?: StringWithAggregatesFilter<"student"> | string
    role?: Enumstudent_roleWithAggregatesFilter<"student"> | $Enums.student_role
    password?: StringWithAggregatesFilter<"student"> | string
    resetToken?: StringNullableWithAggregatesFilter<"student"> | string | null
    resetTokenExpiry?: DateTimeNullableWithAggregatesFilter<"student"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"student"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"student"> | Date | string
  }

  export type profileWhereInput = {
    AND?: profileWhereInput | profileWhereInput[]
    OR?: profileWhereInput[]
    NOT?: profileWhereInput | profileWhereInput[]
    id?: IntFilter<"profile"> | number
    studentId?: IntFilter<"profile"> | number
    image?: StringNullableFilter<"profile"> | string | null
    bio?: StringNullableFilter<"profile"> | string | null
    student?: XOR<StudentScalarRelationFilter, studentWhereInput>
  }

  export type profileOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    image?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    student?: studentOrderByWithRelationInput
    _relevance?: profileOrderByRelevanceInput
  }

  export type profileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    studentId?: number
    AND?: profileWhereInput | profileWhereInput[]
    OR?: profileWhereInput[]
    NOT?: profileWhereInput | profileWhereInput[]
    image?: StringNullableFilter<"profile"> | string | null
    bio?: StringNullableFilter<"profile"> | string | null
    student?: XOR<StudentScalarRelationFilter, studentWhereInput>
  }, "id" | "studentId">

  export type profileOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    image?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    _count?: profileCountOrderByAggregateInput
    _avg?: profileAvgOrderByAggregateInput
    _max?: profileMaxOrderByAggregateInput
    _min?: profileMinOrderByAggregateInput
    _sum?: profileSumOrderByAggregateInput
  }

  export type profileScalarWhereWithAggregatesInput = {
    AND?: profileScalarWhereWithAggregatesInput | profileScalarWhereWithAggregatesInput[]
    OR?: profileScalarWhereWithAggregatesInput[]
    NOT?: profileScalarWhereWithAggregatesInput | profileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"profile"> | number
    studentId?: IntWithAggregatesFilter<"profile"> | number
    image?: StringNullableWithAggregatesFilter<"profile"> | string | null
    bio?: StringNullableWithAggregatesFilter<"profile"> | string | null
  }

  export type messageWhereInput = {
    AND?: messageWhereInput | messageWhereInput[]
    OR?: messageWhereInput[]
    NOT?: messageWhereInput | messageWhereInput[]
    id?: IntFilter<"message"> | number
    content?: StringFilter<"message"> | string
    senderId?: IntFilter<"message"> | number
    receiverId?: IntNullableFilter<"message"> | number | null
    groupId?: IntNullableFilter<"message"> | number | null
    isRead?: BoolFilter<"message"> | boolean
    createdAt?: DateTimeFilter<"message"> | Date | string
    type?: Enummessage_typeFilter<"message"> | $Enums.message_type
    resourceId?: IntNullableFilter<"message"> | number | null
    group?: XOR<GroupsNullableScalarRelationFilter, groupsWhereInput> | null
    receiver?: XOR<StudentNullableScalarRelationFilter, studentWhereInput> | null
    resource?: XOR<ResourcesNullableScalarRelationFilter, resourcesWhereInput> | null
    sender?: XOR<StudentScalarRelationFilter, studentWhereInput>
  }

  export type messageOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrderInput | SortOrder
    groupId?: SortOrderInput | SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    type?: SortOrder
    resourceId?: SortOrderInput | SortOrder
    group?: groupsOrderByWithRelationInput
    receiver?: studentOrderByWithRelationInput
    resource?: resourcesOrderByWithRelationInput
    sender?: studentOrderByWithRelationInput
    _relevance?: messageOrderByRelevanceInput
  }

  export type messageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: messageWhereInput | messageWhereInput[]
    OR?: messageWhereInput[]
    NOT?: messageWhereInput | messageWhereInput[]
    content?: StringFilter<"message"> | string
    senderId?: IntFilter<"message"> | number
    receiverId?: IntNullableFilter<"message"> | number | null
    groupId?: IntNullableFilter<"message"> | number | null
    isRead?: BoolFilter<"message"> | boolean
    createdAt?: DateTimeFilter<"message"> | Date | string
    type?: Enummessage_typeFilter<"message"> | $Enums.message_type
    resourceId?: IntNullableFilter<"message"> | number | null
    group?: XOR<GroupsNullableScalarRelationFilter, groupsWhereInput> | null
    receiver?: XOR<StudentNullableScalarRelationFilter, studentWhereInput> | null
    resource?: XOR<ResourcesNullableScalarRelationFilter, resourcesWhereInput> | null
    sender?: XOR<StudentScalarRelationFilter, studentWhereInput>
  }, "id">

  export type messageOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrderInput | SortOrder
    groupId?: SortOrderInput | SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    type?: SortOrder
    resourceId?: SortOrderInput | SortOrder
    _count?: messageCountOrderByAggregateInput
    _avg?: messageAvgOrderByAggregateInput
    _max?: messageMaxOrderByAggregateInput
    _min?: messageMinOrderByAggregateInput
    _sum?: messageSumOrderByAggregateInput
  }

  export type messageScalarWhereWithAggregatesInput = {
    AND?: messageScalarWhereWithAggregatesInput | messageScalarWhereWithAggregatesInput[]
    OR?: messageScalarWhereWithAggregatesInput[]
    NOT?: messageScalarWhereWithAggregatesInput | messageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"message"> | number
    content?: StringWithAggregatesFilter<"message"> | string
    senderId?: IntWithAggregatesFilter<"message"> | number
    receiverId?: IntNullableWithAggregatesFilter<"message"> | number | null
    groupId?: IntNullableWithAggregatesFilter<"message"> | number | null
    isRead?: BoolWithAggregatesFilter<"message"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"message"> | Date | string
    type?: Enummessage_typeWithAggregatesFilter<"message"> | $Enums.message_type
    resourceId?: IntNullableWithAggregatesFilter<"message"> | number | null
  }

  export type groupsWhereInput = {
    AND?: groupsWhereInput | groupsWhereInput[]
    OR?: groupsWhereInput[]
    NOT?: groupsWhereInput | groupsWhereInput[]
    id?: IntFilter<"groups"> | number
    type?: Enumgroups_typeFilter<"groups"> | $Enums.groups_type
    visibility?: Enumgroups_visibilityFilter<"groups"> | $Enums.groups_visibility
    name?: StringFilter<"groups"> | string
    description?: StringFilter<"groups"> | string
    validation?: Enumgroups_validationFilter<"groups"> | $Enums.groups_validation
    createdAt?: DateTimeFilter<"groups"> | Date | string
    groupMembers?: GroupMembersListRelationFilter
    messages?: MessageListRelationFilter
    notifications?: NotificationListRelationFilter
    resources?: ResourcesListRelationFilter
    system_group_permission?: XOR<System_group_permissionNullableScalarRelationFilter, system_group_permissionWhereInput> | null
  }

  export type groupsOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    visibility?: SortOrder
    name?: SortOrder
    description?: SortOrder
    validation?: SortOrder
    createdAt?: SortOrder
    groupMembers?: groupMembersOrderByRelationAggregateInput
    messages?: messageOrderByRelationAggregateInput
    notifications?: notificationOrderByRelationAggregateInput
    resources?: resourcesOrderByRelationAggregateInput
    system_group_permission?: system_group_permissionOrderByWithRelationInput
    _relevance?: groupsOrderByRelevanceInput
  }

  export type groupsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: groupsWhereInput | groupsWhereInput[]
    OR?: groupsWhereInput[]
    NOT?: groupsWhereInput | groupsWhereInput[]
    type?: Enumgroups_typeFilter<"groups"> | $Enums.groups_type
    visibility?: Enumgroups_visibilityFilter<"groups"> | $Enums.groups_visibility
    name?: StringFilter<"groups"> | string
    description?: StringFilter<"groups"> | string
    validation?: Enumgroups_validationFilter<"groups"> | $Enums.groups_validation
    createdAt?: DateTimeFilter<"groups"> | Date | string
    groupMembers?: GroupMembersListRelationFilter
    messages?: MessageListRelationFilter
    notifications?: NotificationListRelationFilter
    resources?: ResourcesListRelationFilter
    system_group_permission?: XOR<System_group_permissionNullableScalarRelationFilter, system_group_permissionWhereInput> | null
  }, "id">

  export type groupsOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    visibility?: SortOrder
    name?: SortOrder
    description?: SortOrder
    validation?: SortOrder
    createdAt?: SortOrder
    _count?: groupsCountOrderByAggregateInput
    _avg?: groupsAvgOrderByAggregateInput
    _max?: groupsMaxOrderByAggregateInput
    _min?: groupsMinOrderByAggregateInput
    _sum?: groupsSumOrderByAggregateInput
  }

  export type groupsScalarWhereWithAggregatesInput = {
    AND?: groupsScalarWhereWithAggregatesInput | groupsScalarWhereWithAggregatesInput[]
    OR?: groupsScalarWhereWithAggregatesInput[]
    NOT?: groupsScalarWhereWithAggregatesInput | groupsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"groups"> | number
    type?: Enumgroups_typeWithAggregatesFilter<"groups"> | $Enums.groups_type
    visibility?: Enumgroups_visibilityWithAggregatesFilter<"groups"> | $Enums.groups_visibility
    name?: StringWithAggregatesFilter<"groups"> | string
    description?: StringWithAggregatesFilter<"groups"> | string
    validation?: Enumgroups_validationWithAggregatesFilter<"groups"> | $Enums.groups_validation
    createdAt?: DateTimeWithAggregatesFilter<"groups"> | Date | string
  }

  export type notificationWhereInput = {
    AND?: notificationWhereInput | notificationWhereInput[]
    OR?: notificationWhereInput[]
    NOT?: notificationWhereInput | notificationWhereInput[]
    id?: IntFilter<"notification"> | number
    titre?: StringFilter<"notification"> | string
    content?: StringFilter<"notification"> | string
    studentId?: IntFilter<"notification"> | number
    groupId?: IntNullableFilter<"notification"> | number | null
    type?: Enumnotification_typeFilter<"notification"> | $Enums.notification_type
    isRead?: BoolFilter<"notification"> | boolean
    sentAt?: DateTimeFilter<"notification"> | Date | string
    group?: XOR<GroupsNullableScalarRelationFilter, groupsWhereInput> | null
  }

  export type notificationOrderByWithRelationInput = {
    id?: SortOrder
    titre?: SortOrder
    content?: SortOrder
    studentId?: SortOrder
    groupId?: SortOrderInput | SortOrder
    type?: SortOrder
    isRead?: SortOrder
    sentAt?: SortOrder
    group?: groupsOrderByWithRelationInput
    _relevance?: notificationOrderByRelevanceInput
  }

  export type notificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: notificationWhereInput | notificationWhereInput[]
    OR?: notificationWhereInput[]
    NOT?: notificationWhereInput | notificationWhereInput[]
    titre?: StringFilter<"notification"> | string
    content?: StringFilter<"notification"> | string
    studentId?: IntFilter<"notification"> | number
    groupId?: IntNullableFilter<"notification"> | number | null
    type?: Enumnotification_typeFilter<"notification"> | $Enums.notification_type
    isRead?: BoolFilter<"notification"> | boolean
    sentAt?: DateTimeFilter<"notification"> | Date | string
    group?: XOR<GroupsNullableScalarRelationFilter, groupsWhereInput> | null
  }, "id">

  export type notificationOrderByWithAggregationInput = {
    id?: SortOrder
    titre?: SortOrder
    content?: SortOrder
    studentId?: SortOrder
    groupId?: SortOrderInput | SortOrder
    type?: SortOrder
    isRead?: SortOrder
    sentAt?: SortOrder
    _count?: notificationCountOrderByAggregateInput
    _avg?: notificationAvgOrderByAggregateInput
    _max?: notificationMaxOrderByAggregateInput
    _min?: notificationMinOrderByAggregateInput
    _sum?: notificationSumOrderByAggregateInput
  }

  export type notificationScalarWhereWithAggregatesInput = {
    AND?: notificationScalarWhereWithAggregatesInput | notificationScalarWhereWithAggregatesInput[]
    OR?: notificationScalarWhereWithAggregatesInput[]
    NOT?: notificationScalarWhereWithAggregatesInput | notificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"notification"> | number
    titre?: StringWithAggregatesFilter<"notification"> | string
    content?: StringWithAggregatesFilter<"notification"> | string
    studentId?: IntWithAggregatesFilter<"notification"> | number
    groupId?: IntNullableWithAggregatesFilter<"notification"> | number | null
    type?: Enumnotification_typeWithAggregatesFilter<"notification"> | $Enums.notification_type
    isRead?: BoolWithAggregatesFilter<"notification"> | boolean
    sentAt?: DateTimeWithAggregatesFilter<"notification"> | Date | string
  }

  export type resourcesWhereInput = {
    AND?: resourcesWhereInput | resourcesWhereInput[]
    OR?: resourcesWhereInput[]
    NOT?: resourcesWhereInput | resourcesWhereInput[]
    id?: IntFilter<"resources"> | number
    name?: StringFilter<"resources"> | string
    filepath?: StringFilter<"resources"> | string
    size?: FloatFilter<"resources"> | number
    studentId?: IntFilter<"resources"> | number
    validation?: Enumresources_validationFilter<"resources"> | $Enums.resources_validation
    groupId?: IntNullableFilter<"resources"> | number | null
    uploadedAt?: DateTimeFilter<"resources"> | Date | string
    fileType?: StringNullableFilter<"resources"> | string | null
    mimeType?: StringNullableFilter<"resources"> | string | null
    messages?: MessageListRelationFilter
    group?: XOR<GroupsNullableScalarRelationFilter, groupsWhereInput> | null
    student?: XOR<StudentScalarRelationFilter, studentWhereInput>
  }

  export type resourcesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    filepath?: SortOrder
    size?: SortOrder
    studentId?: SortOrder
    validation?: SortOrder
    groupId?: SortOrderInput | SortOrder
    uploadedAt?: SortOrder
    fileType?: SortOrderInput | SortOrder
    mimeType?: SortOrderInput | SortOrder
    messages?: messageOrderByRelationAggregateInput
    group?: groupsOrderByWithRelationInput
    student?: studentOrderByWithRelationInput
    _relevance?: resourcesOrderByRelevanceInput
  }

  export type resourcesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: resourcesWhereInput | resourcesWhereInput[]
    OR?: resourcesWhereInput[]
    NOT?: resourcesWhereInput | resourcesWhereInput[]
    name?: StringFilter<"resources"> | string
    filepath?: StringFilter<"resources"> | string
    size?: FloatFilter<"resources"> | number
    studentId?: IntFilter<"resources"> | number
    validation?: Enumresources_validationFilter<"resources"> | $Enums.resources_validation
    groupId?: IntNullableFilter<"resources"> | number | null
    uploadedAt?: DateTimeFilter<"resources"> | Date | string
    fileType?: StringNullableFilter<"resources"> | string | null
    mimeType?: StringNullableFilter<"resources"> | string | null
    messages?: MessageListRelationFilter
    group?: XOR<GroupsNullableScalarRelationFilter, groupsWhereInput> | null
    student?: XOR<StudentScalarRelationFilter, studentWhereInput>
  }, "id">

  export type resourcesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    filepath?: SortOrder
    size?: SortOrder
    studentId?: SortOrder
    validation?: SortOrder
    groupId?: SortOrderInput | SortOrder
    uploadedAt?: SortOrder
    fileType?: SortOrderInput | SortOrder
    mimeType?: SortOrderInput | SortOrder
    _count?: resourcesCountOrderByAggregateInput
    _avg?: resourcesAvgOrderByAggregateInput
    _max?: resourcesMaxOrderByAggregateInput
    _min?: resourcesMinOrderByAggregateInput
    _sum?: resourcesSumOrderByAggregateInput
  }

  export type resourcesScalarWhereWithAggregatesInput = {
    AND?: resourcesScalarWhereWithAggregatesInput | resourcesScalarWhereWithAggregatesInput[]
    OR?: resourcesScalarWhereWithAggregatesInput[]
    NOT?: resourcesScalarWhereWithAggregatesInput | resourcesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"resources"> | number
    name?: StringWithAggregatesFilter<"resources"> | string
    filepath?: StringWithAggregatesFilter<"resources"> | string
    size?: FloatWithAggregatesFilter<"resources"> | number
    studentId?: IntWithAggregatesFilter<"resources"> | number
    validation?: Enumresources_validationWithAggregatesFilter<"resources"> | $Enums.resources_validation
    groupId?: IntNullableWithAggregatesFilter<"resources"> | number | null
    uploadedAt?: DateTimeWithAggregatesFilter<"resources"> | Date | string
    fileType?: StringNullableWithAggregatesFilter<"resources"> | string | null
    mimeType?: StringNullableWithAggregatesFilter<"resources"> | string | null
  }

  export type groupMembersWhereInput = {
    AND?: groupMembersWhereInput | groupMembersWhereInput[]
    OR?: groupMembersWhereInput[]
    NOT?: groupMembersWhereInput | groupMembersWhereInput[]
    id?: IntFilter<"groupMembers"> | number
    role?: EnumgroupMembers_roleFilter<"groupMembers"> | $Enums.groupMembers_role
    status?: EnumgroupMembers_statusFilter<"groupMembers"> | $Enums.groupMembers_status
    date_adhesion?: DateTimeNullableFilter<"groupMembers"> | Date | string | null
    studentId?: IntFilter<"groupMembers"> | number
    groupId?: IntFilter<"groupMembers"> | number
    groups?: XOR<GroupsScalarRelationFilter, groupsWhereInput>
    student?: XOR<StudentScalarRelationFilter, studentWhereInput>
    group_member_permission?: Group_member_permissionListRelationFilter
  }

  export type groupMembersOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    status?: SortOrder
    date_adhesion?: SortOrderInput | SortOrder
    studentId?: SortOrder
    groupId?: SortOrder
    groups?: groupsOrderByWithRelationInput
    student?: studentOrderByWithRelationInput
    group_member_permission?: group_member_permissionOrderByRelationAggregateInput
  }

  export type groupMembersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    studentId_groupId?: groupMembersStudentIdGroupIdCompoundUniqueInput
    AND?: groupMembersWhereInput | groupMembersWhereInput[]
    OR?: groupMembersWhereInput[]
    NOT?: groupMembersWhereInput | groupMembersWhereInput[]
    role?: EnumgroupMembers_roleFilter<"groupMembers"> | $Enums.groupMembers_role
    status?: EnumgroupMembers_statusFilter<"groupMembers"> | $Enums.groupMembers_status
    date_adhesion?: DateTimeNullableFilter<"groupMembers"> | Date | string | null
    studentId?: IntFilter<"groupMembers"> | number
    groupId?: IntFilter<"groupMembers"> | number
    groups?: XOR<GroupsScalarRelationFilter, groupsWhereInput>
    student?: XOR<StudentScalarRelationFilter, studentWhereInput>
    group_member_permission?: Group_member_permissionListRelationFilter
  }, "id" | "studentId_groupId">

  export type groupMembersOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    status?: SortOrder
    date_adhesion?: SortOrderInput | SortOrder
    studentId?: SortOrder
    groupId?: SortOrder
    _count?: groupMembersCountOrderByAggregateInput
    _avg?: groupMembersAvgOrderByAggregateInput
    _max?: groupMembersMaxOrderByAggregateInput
    _min?: groupMembersMinOrderByAggregateInput
    _sum?: groupMembersSumOrderByAggregateInput
  }

  export type groupMembersScalarWhereWithAggregatesInput = {
    AND?: groupMembersScalarWhereWithAggregatesInput | groupMembersScalarWhereWithAggregatesInput[]
    OR?: groupMembersScalarWhereWithAggregatesInput[]
    NOT?: groupMembersScalarWhereWithAggregatesInput | groupMembersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"groupMembers"> | number
    role?: EnumgroupMembers_roleWithAggregatesFilter<"groupMembers"> | $Enums.groupMembers_role
    status?: EnumgroupMembers_statusWithAggregatesFilter<"groupMembers"> | $Enums.groupMembers_status
    date_adhesion?: DateTimeNullableWithAggregatesFilter<"groupMembers"> | Date | string | null
    studentId?: IntWithAggregatesFilter<"groupMembers"> | number
    groupId?: IntWithAggregatesFilter<"groupMembers"> | number
  }

  export type group_member_permissionWhereInput = {
    AND?: group_member_permissionWhereInput | group_member_permissionWhereInput[]
    OR?: group_member_permissionWhereInput[]
    NOT?: group_member_permissionWhereInput | group_member_permissionWhereInput[]
    id?: IntFilter<"group_member_permission"> | number
    groupMemberId?: IntFilter<"group_member_permission"> | number
    canAcceptMembers?: BoolFilter<"group_member_permission"> | boolean
    canValidateRessources?: BoolFilter<"group_member_permission"> | boolean
    canDeleteMessages?: BoolFilter<"group_member_permission"> | boolean
    canEditGroupInfo?: BoolFilter<"group_member_permission"> | boolean
    createdAt?: DateTimeFilter<"group_member_permission"> | Date | string
    updatedAt?: DateTimeFilter<"group_member_permission"> | Date | string
    groupMembers?: XOR<GroupMembersScalarRelationFilter, groupMembersWhereInput>
  }

  export type group_member_permissionOrderByWithRelationInput = {
    id?: SortOrder
    groupMemberId?: SortOrder
    canAcceptMembers?: SortOrder
    canValidateRessources?: SortOrder
    canDeleteMessages?: SortOrder
    canEditGroupInfo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    groupMembers?: groupMembersOrderByWithRelationInput
  }

  export type group_member_permissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: group_member_permissionWhereInput | group_member_permissionWhereInput[]
    OR?: group_member_permissionWhereInput[]
    NOT?: group_member_permissionWhereInput | group_member_permissionWhereInput[]
    groupMemberId?: IntFilter<"group_member_permission"> | number
    canAcceptMembers?: BoolFilter<"group_member_permission"> | boolean
    canValidateRessources?: BoolFilter<"group_member_permission"> | boolean
    canDeleteMessages?: BoolFilter<"group_member_permission"> | boolean
    canEditGroupInfo?: BoolFilter<"group_member_permission"> | boolean
    createdAt?: DateTimeFilter<"group_member_permission"> | Date | string
    updatedAt?: DateTimeFilter<"group_member_permission"> | Date | string
    groupMembers?: XOR<GroupMembersScalarRelationFilter, groupMembersWhereInput>
  }, "id">

  export type group_member_permissionOrderByWithAggregationInput = {
    id?: SortOrder
    groupMemberId?: SortOrder
    canAcceptMembers?: SortOrder
    canValidateRessources?: SortOrder
    canDeleteMessages?: SortOrder
    canEditGroupInfo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: group_member_permissionCountOrderByAggregateInput
    _avg?: group_member_permissionAvgOrderByAggregateInput
    _max?: group_member_permissionMaxOrderByAggregateInput
    _min?: group_member_permissionMinOrderByAggregateInput
    _sum?: group_member_permissionSumOrderByAggregateInput
  }

  export type group_member_permissionScalarWhereWithAggregatesInput = {
    AND?: group_member_permissionScalarWhereWithAggregatesInput | group_member_permissionScalarWhereWithAggregatesInput[]
    OR?: group_member_permissionScalarWhereWithAggregatesInput[]
    NOT?: group_member_permissionScalarWhereWithAggregatesInput | group_member_permissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"group_member_permission"> | number
    groupMemberId?: IntWithAggregatesFilter<"group_member_permission"> | number
    canAcceptMembers?: BoolWithAggregatesFilter<"group_member_permission"> | boolean
    canValidateRessources?: BoolWithAggregatesFilter<"group_member_permission"> | boolean
    canDeleteMessages?: BoolWithAggregatesFilter<"group_member_permission"> | boolean
    canEditGroupInfo?: BoolWithAggregatesFilter<"group_member_permission"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"group_member_permission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"group_member_permission"> | Date | string
  }

  export type system_group_permissionWhereInput = {
    AND?: system_group_permissionWhereInput | system_group_permissionWhereInput[]
    OR?: system_group_permissionWhereInput[]
    NOT?: system_group_permissionWhereInput | system_group_permissionWhereInput[]
    id?: IntFilter<"system_group_permission"> | number
    groupId?: IntFilter<"system_group_permission"> | number
    maxMember?: IntFilter<"system_group_permission"> | number
    allowFileSharing?: BoolFilter<"system_group_permission"> | boolean
    allowPublicVisibility?: BoolFilter<"system_group_permission"> | boolean
    createdAt?: DateTimeFilter<"system_group_permission"> | Date | string
    updatedAt?: DateTimeFilter<"system_group_permission"> | Date | string
    maxFileSizeMB?: IntFilter<"system_group_permission"> | number
    allowMessages?: BoolFilter<"system_group_permission"> | boolean
    autoAccept?: BoolFilter<"system_group_permission"> | boolean
    groups?: XOR<GroupsScalarRelationFilter, groupsWhereInput>
  }

  export type system_group_permissionOrderByWithRelationInput = {
    id?: SortOrder
    groupId?: SortOrder
    maxMember?: SortOrder
    allowFileSharing?: SortOrder
    allowPublicVisibility?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    maxFileSizeMB?: SortOrder
    allowMessages?: SortOrder
    autoAccept?: SortOrder
    groups?: groupsOrderByWithRelationInput
  }

  export type system_group_permissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    groupId?: number
    AND?: system_group_permissionWhereInput | system_group_permissionWhereInput[]
    OR?: system_group_permissionWhereInput[]
    NOT?: system_group_permissionWhereInput | system_group_permissionWhereInput[]
    maxMember?: IntFilter<"system_group_permission"> | number
    allowFileSharing?: BoolFilter<"system_group_permission"> | boolean
    allowPublicVisibility?: BoolFilter<"system_group_permission"> | boolean
    createdAt?: DateTimeFilter<"system_group_permission"> | Date | string
    updatedAt?: DateTimeFilter<"system_group_permission"> | Date | string
    maxFileSizeMB?: IntFilter<"system_group_permission"> | number
    allowMessages?: BoolFilter<"system_group_permission"> | boolean
    autoAccept?: BoolFilter<"system_group_permission"> | boolean
    groups?: XOR<GroupsScalarRelationFilter, groupsWhereInput>
  }, "id" | "groupId">

  export type system_group_permissionOrderByWithAggregationInput = {
    id?: SortOrder
    groupId?: SortOrder
    maxMember?: SortOrder
    allowFileSharing?: SortOrder
    allowPublicVisibility?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    maxFileSizeMB?: SortOrder
    allowMessages?: SortOrder
    autoAccept?: SortOrder
    _count?: system_group_permissionCountOrderByAggregateInput
    _avg?: system_group_permissionAvgOrderByAggregateInput
    _max?: system_group_permissionMaxOrderByAggregateInput
    _min?: system_group_permissionMinOrderByAggregateInput
    _sum?: system_group_permissionSumOrderByAggregateInput
  }

  export type system_group_permissionScalarWhereWithAggregatesInput = {
    AND?: system_group_permissionScalarWhereWithAggregatesInput | system_group_permissionScalarWhereWithAggregatesInput[]
    OR?: system_group_permissionScalarWhereWithAggregatesInput[]
    NOT?: system_group_permissionScalarWhereWithAggregatesInput | system_group_permissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"system_group_permission"> | number
    groupId?: IntWithAggregatesFilter<"system_group_permission"> | number
    maxMember?: IntWithAggregatesFilter<"system_group_permission"> | number
    allowFileSharing?: BoolWithAggregatesFilter<"system_group_permission"> | boolean
    allowPublicVisibility?: BoolWithAggregatesFilter<"system_group_permission"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"system_group_permission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"system_group_permission"> | Date | string
    maxFileSizeMB?: IntWithAggregatesFilter<"system_group_permission"> | number
    allowMessages?: BoolWithAggregatesFilter<"system_group_permission"> | boolean
    autoAccept?: BoolWithAggregatesFilter<"system_group_permission"> | boolean
  }

  export type studentCreateInput = {
    Mat: number
    name: string
    email: string
    role?: $Enums.student_role
    password: string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groupMembers?: groupMembersCreateNestedManyWithoutStudentInput
    receivedMessages?: messageCreateNestedManyWithoutReceiverInput
    sentMessages?: messageCreateNestedManyWithoutSenderInput
    profile?: profileCreateNestedOneWithoutStudentInput
    resources?: resourcesCreateNestedManyWithoutStudentInput
  }

  export type studentUncheckedCreateInput = {
    Mat: number
    name: string
    email: string
    role?: $Enums.student_role
    password: string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groupMembers?: groupMembersUncheckedCreateNestedManyWithoutStudentInput
    receivedMessages?: messageUncheckedCreateNestedManyWithoutReceiverInput
    sentMessages?: messageUncheckedCreateNestedManyWithoutSenderInput
    profile?: profileUncheckedCreateNestedOneWithoutStudentInput
    resources?: resourcesUncheckedCreateNestedManyWithoutStudentInput
  }

  export type studentUpdateInput = {
    Mat?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumstudent_roleFieldUpdateOperationsInput | $Enums.student_role
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupMembers?: groupMembersUpdateManyWithoutStudentNestedInput
    receivedMessages?: messageUpdateManyWithoutReceiverNestedInput
    sentMessages?: messageUpdateManyWithoutSenderNestedInput
    profile?: profileUpdateOneWithoutStudentNestedInput
    resources?: resourcesUpdateManyWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateInput = {
    Mat?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumstudent_roleFieldUpdateOperationsInput | $Enums.student_role
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupMembers?: groupMembersUncheckedUpdateManyWithoutStudentNestedInput
    receivedMessages?: messageUncheckedUpdateManyWithoutReceiverNestedInput
    sentMessages?: messageUncheckedUpdateManyWithoutSenderNestedInput
    profile?: profileUncheckedUpdateOneWithoutStudentNestedInput
    resources?: resourcesUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type studentCreateManyInput = {
    Mat: number
    name: string
    email: string
    role?: $Enums.student_role
    password: string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type studentUpdateManyMutationInput = {
    Mat?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumstudent_roleFieldUpdateOperationsInput | $Enums.student_role
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type studentUncheckedUpdateManyInput = {
    Mat?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumstudent_roleFieldUpdateOperationsInput | $Enums.student_role
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type profileCreateInput = {
    image?: string | null
    bio?: string | null
    student: studentCreateNestedOneWithoutProfileInput
  }

  export type profileUncheckedCreateInput = {
    id?: number
    studentId: number
    image?: string | null
    bio?: string | null
  }

  export type profileUpdateInput = {
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    student?: studentUpdateOneRequiredWithoutProfileNestedInput
  }

  export type profileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type profileCreateManyInput = {
    id?: number
    studentId: number
    image?: string | null
    bio?: string | null
  }

  export type profileUpdateManyMutationInput = {
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type profileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type messageCreateInput = {
    content: string
    isRead?: boolean
    createdAt?: Date | string
    type: $Enums.message_type
    group?: groupsCreateNestedOneWithoutMessagesInput
    receiver?: studentCreateNestedOneWithoutReceivedMessagesInput
    resource?: resourcesCreateNestedOneWithoutMessagesInput
    sender: studentCreateNestedOneWithoutSentMessagesInput
  }

  export type messageUncheckedCreateInput = {
    id?: number
    content: string
    senderId: number
    receiverId?: number | null
    groupId?: number | null
    isRead?: boolean
    createdAt?: Date | string
    type: $Enums.message_type
    resourceId?: number | null
  }

  export type messageUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: Enummessage_typeFieldUpdateOperationsInput | $Enums.message_type
    group?: groupsUpdateOneWithoutMessagesNestedInput
    receiver?: studentUpdateOneWithoutReceivedMessagesNestedInput
    resource?: resourcesUpdateOneWithoutMessagesNestedInput
    sender?: studentUpdateOneRequiredWithoutSentMessagesNestedInput
  }

  export type messageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: NullableIntFieldUpdateOperationsInput | number | null
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: Enummessage_typeFieldUpdateOperationsInput | $Enums.message_type
    resourceId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type messageCreateManyInput = {
    id?: number
    content: string
    senderId: number
    receiverId?: number | null
    groupId?: number | null
    isRead?: boolean
    createdAt?: Date | string
    type: $Enums.message_type
    resourceId?: number | null
  }

  export type messageUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: Enummessage_typeFieldUpdateOperationsInput | $Enums.message_type
  }

  export type messageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: NullableIntFieldUpdateOperationsInput | number | null
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: Enummessage_typeFieldUpdateOperationsInput | $Enums.message_type
    resourceId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type groupsCreateInput = {
    type: $Enums.groups_type
    visibility: $Enums.groups_visibility
    name: string
    description: string
    validation?: $Enums.groups_validation
    createdAt?: Date | string
    groupMembers?: groupMembersCreateNestedManyWithoutGroupsInput
    messages?: messageCreateNestedManyWithoutGroupInput
    notifications?: notificationCreateNestedManyWithoutGroupInput
    resources?: resourcesCreateNestedManyWithoutGroupInput
    system_group_permission?: system_group_permissionCreateNestedOneWithoutGroupsInput
  }

  export type groupsUncheckedCreateInput = {
    id?: number
    type: $Enums.groups_type
    visibility: $Enums.groups_visibility
    name: string
    description: string
    validation?: $Enums.groups_validation
    createdAt?: Date | string
    groupMembers?: groupMembersUncheckedCreateNestedManyWithoutGroupsInput
    messages?: messageUncheckedCreateNestedManyWithoutGroupInput
    notifications?: notificationUncheckedCreateNestedManyWithoutGroupInput
    resources?: resourcesUncheckedCreateNestedManyWithoutGroupInput
    system_group_permission?: system_group_permissionUncheckedCreateNestedOneWithoutGroupsInput
  }

  export type groupsUpdateInput = {
    type?: Enumgroups_typeFieldUpdateOperationsInput | $Enums.groups_type
    visibility?: Enumgroups_visibilityFieldUpdateOperationsInput | $Enums.groups_visibility
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    validation?: Enumgroups_validationFieldUpdateOperationsInput | $Enums.groups_validation
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupMembers?: groupMembersUpdateManyWithoutGroupsNestedInput
    messages?: messageUpdateManyWithoutGroupNestedInput
    notifications?: notificationUpdateManyWithoutGroupNestedInput
    resources?: resourcesUpdateManyWithoutGroupNestedInput
    system_group_permission?: system_group_permissionUpdateOneWithoutGroupsNestedInput
  }

  export type groupsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: Enumgroups_typeFieldUpdateOperationsInput | $Enums.groups_type
    visibility?: Enumgroups_visibilityFieldUpdateOperationsInput | $Enums.groups_visibility
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    validation?: Enumgroups_validationFieldUpdateOperationsInput | $Enums.groups_validation
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupMembers?: groupMembersUncheckedUpdateManyWithoutGroupsNestedInput
    messages?: messageUncheckedUpdateManyWithoutGroupNestedInput
    notifications?: notificationUncheckedUpdateManyWithoutGroupNestedInput
    resources?: resourcesUncheckedUpdateManyWithoutGroupNestedInput
    system_group_permission?: system_group_permissionUncheckedUpdateOneWithoutGroupsNestedInput
  }

  export type groupsCreateManyInput = {
    id?: number
    type: $Enums.groups_type
    visibility: $Enums.groups_visibility
    name: string
    description: string
    validation?: $Enums.groups_validation
    createdAt?: Date | string
  }

  export type groupsUpdateManyMutationInput = {
    type?: Enumgroups_typeFieldUpdateOperationsInput | $Enums.groups_type
    visibility?: Enumgroups_visibilityFieldUpdateOperationsInput | $Enums.groups_visibility
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    validation?: Enumgroups_validationFieldUpdateOperationsInput | $Enums.groups_validation
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type groupsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: Enumgroups_typeFieldUpdateOperationsInput | $Enums.groups_type
    visibility?: Enumgroups_visibilityFieldUpdateOperationsInput | $Enums.groups_visibility
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    validation?: Enumgroups_validationFieldUpdateOperationsInput | $Enums.groups_validation
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificationCreateInput = {
    titre?: string
    content: string
    studentId: number
    type?: $Enums.notification_type
    isRead?: boolean
    sentAt?: Date | string
    group?: groupsCreateNestedOneWithoutNotificationsInput
  }

  export type notificationUncheckedCreateInput = {
    id?: number
    titre?: string
    content: string
    studentId: number
    groupId?: number | null
    type?: $Enums.notification_type
    isRead?: boolean
    sentAt?: Date | string
  }

  export type notificationUpdateInput = {
    titre?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    studentId?: IntFieldUpdateOperationsInput | number
    type?: Enumnotification_typeFieldUpdateOperationsInput | $Enums.notification_type
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: groupsUpdateOneWithoutNotificationsNestedInput
  }

  export type notificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    studentId?: IntFieldUpdateOperationsInput | number
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    type?: Enumnotification_typeFieldUpdateOperationsInput | $Enums.notification_type
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificationCreateManyInput = {
    id?: number
    titre?: string
    content: string
    studentId: number
    groupId?: number | null
    type?: $Enums.notification_type
    isRead?: boolean
    sentAt?: Date | string
  }

  export type notificationUpdateManyMutationInput = {
    titre?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    studentId?: IntFieldUpdateOperationsInput | number
    type?: Enumnotification_typeFieldUpdateOperationsInput | $Enums.notification_type
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    studentId?: IntFieldUpdateOperationsInput | number
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    type?: Enumnotification_typeFieldUpdateOperationsInput | $Enums.notification_type
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type resourcesCreateInput = {
    name: string
    filepath: string
    size: number
    validation?: $Enums.resources_validation
    uploadedAt?: Date | string
    fileType?: string | null
    mimeType?: string | null
    messages?: messageCreateNestedManyWithoutResourceInput
    group?: groupsCreateNestedOneWithoutResourcesInput
    student: studentCreateNestedOneWithoutResourcesInput
  }

  export type resourcesUncheckedCreateInput = {
    id?: number
    name: string
    filepath: string
    size: number
    studentId: number
    validation?: $Enums.resources_validation
    groupId?: number | null
    uploadedAt?: Date | string
    fileType?: string | null
    mimeType?: string | null
    messages?: messageUncheckedCreateNestedManyWithoutResourceInput
  }

  export type resourcesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    filepath?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    validation?: Enumresources_validationFieldUpdateOperationsInput | $Enums.resources_validation
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: messageUpdateManyWithoutResourceNestedInput
    group?: groupsUpdateOneWithoutResourcesNestedInput
    student?: studentUpdateOneRequiredWithoutResourcesNestedInput
  }

  export type resourcesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    filepath?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    validation?: Enumresources_validationFieldUpdateOperationsInput | $Enums.resources_validation
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: messageUncheckedUpdateManyWithoutResourceNestedInput
  }

  export type resourcesCreateManyInput = {
    id?: number
    name: string
    filepath: string
    size: number
    studentId: number
    validation?: $Enums.resources_validation
    groupId?: number | null
    uploadedAt?: Date | string
    fileType?: string | null
    mimeType?: string | null
  }

  export type resourcesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    filepath?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    validation?: Enumresources_validationFieldUpdateOperationsInput | $Enums.resources_validation
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type resourcesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    filepath?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    validation?: Enumresources_validationFieldUpdateOperationsInput | $Enums.resources_validation
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type groupMembersCreateInput = {
    role?: $Enums.groupMembers_role
    status?: $Enums.groupMembers_status
    date_adhesion?: Date | string | null
    groups: groupsCreateNestedOneWithoutGroupMembersInput
    student: studentCreateNestedOneWithoutGroupMembersInput
    group_member_permission?: group_member_permissionCreateNestedManyWithoutGroupMembersInput
  }

  export type groupMembersUncheckedCreateInput = {
    id?: number
    role?: $Enums.groupMembers_role
    status?: $Enums.groupMembers_status
    date_adhesion?: Date | string | null
    studentId: number
    groupId: number
    group_member_permission?: group_member_permissionUncheckedCreateNestedManyWithoutGroupMembersInput
  }

  export type groupMembersUpdateInput = {
    role?: EnumgroupMembers_roleFieldUpdateOperationsInput | $Enums.groupMembers_role
    status?: EnumgroupMembers_statusFieldUpdateOperationsInput | $Enums.groupMembers_status
    date_adhesion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    groups?: groupsUpdateOneRequiredWithoutGroupMembersNestedInput
    student?: studentUpdateOneRequiredWithoutGroupMembersNestedInput
    group_member_permission?: group_member_permissionUpdateManyWithoutGroupMembersNestedInput
  }

  export type groupMembersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumgroupMembers_roleFieldUpdateOperationsInput | $Enums.groupMembers_role
    status?: EnumgroupMembers_statusFieldUpdateOperationsInput | $Enums.groupMembers_status
    date_adhesion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentId?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    group_member_permission?: group_member_permissionUncheckedUpdateManyWithoutGroupMembersNestedInput
  }

  export type groupMembersCreateManyInput = {
    id?: number
    role?: $Enums.groupMembers_role
    status?: $Enums.groupMembers_status
    date_adhesion?: Date | string | null
    studentId: number
    groupId: number
  }

  export type groupMembersUpdateManyMutationInput = {
    role?: EnumgroupMembers_roleFieldUpdateOperationsInput | $Enums.groupMembers_role
    status?: EnumgroupMembers_statusFieldUpdateOperationsInput | $Enums.groupMembers_status
    date_adhesion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type groupMembersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumgroupMembers_roleFieldUpdateOperationsInput | $Enums.groupMembers_role
    status?: EnumgroupMembers_statusFieldUpdateOperationsInput | $Enums.groupMembers_status
    date_adhesion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentId?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
  }

  export type group_member_permissionCreateInput = {
    canAcceptMembers?: boolean
    canValidateRessources?: boolean
    canDeleteMessages?: boolean
    canEditGroupInfo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    groupMembers: groupMembersCreateNestedOneWithoutGroup_member_permissionInput
  }

  export type group_member_permissionUncheckedCreateInput = {
    id?: number
    groupMemberId: number
    canAcceptMembers?: boolean
    canValidateRessources?: boolean
    canDeleteMessages?: boolean
    canEditGroupInfo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type group_member_permissionUpdateInput = {
    canAcceptMembers?: BoolFieldUpdateOperationsInput | boolean
    canValidateRessources?: BoolFieldUpdateOperationsInput | boolean
    canDeleteMessages?: BoolFieldUpdateOperationsInput | boolean
    canEditGroupInfo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupMembers?: groupMembersUpdateOneRequiredWithoutGroup_member_permissionNestedInput
  }

  export type group_member_permissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupMemberId?: IntFieldUpdateOperationsInput | number
    canAcceptMembers?: BoolFieldUpdateOperationsInput | boolean
    canValidateRessources?: BoolFieldUpdateOperationsInput | boolean
    canDeleteMessages?: BoolFieldUpdateOperationsInput | boolean
    canEditGroupInfo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type group_member_permissionCreateManyInput = {
    id?: number
    groupMemberId: number
    canAcceptMembers?: boolean
    canValidateRessources?: boolean
    canDeleteMessages?: boolean
    canEditGroupInfo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type group_member_permissionUpdateManyMutationInput = {
    canAcceptMembers?: BoolFieldUpdateOperationsInput | boolean
    canValidateRessources?: BoolFieldUpdateOperationsInput | boolean
    canDeleteMessages?: BoolFieldUpdateOperationsInput | boolean
    canEditGroupInfo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type group_member_permissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupMemberId?: IntFieldUpdateOperationsInput | number
    canAcceptMembers?: BoolFieldUpdateOperationsInput | boolean
    canValidateRessources?: BoolFieldUpdateOperationsInput | boolean
    canDeleteMessages?: BoolFieldUpdateOperationsInput | boolean
    canEditGroupInfo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type system_group_permissionCreateInput = {
    maxMember?: number
    allowFileSharing?: boolean
    allowPublicVisibility?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    maxFileSizeMB?: number
    allowMessages?: boolean
    autoAccept?: boolean
    groups: groupsCreateNestedOneWithoutSystem_group_permissionInput
  }

  export type system_group_permissionUncheckedCreateInput = {
    id?: number
    groupId: number
    maxMember?: number
    allowFileSharing?: boolean
    allowPublicVisibility?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    maxFileSizeMB?: number
    allowMessages?: boolean
    autoAccept?: boolean
  }

  export type system_group_permissionUpdateInput = {
    maxMember?: IntFieldUpdateOperationsInput | number
    allowFileSharing?: BoolFieldUpdateOperationsInput | boolean
    allowPublicVisibility?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maxFileSizeMB?: IntFieldUpdateOperationsInput | number
    allowMessages?: BoolFieldUpdateOperationsInput | boolean
    autoAccept?: BoolFieldUpdateOperationsInput | boolean
    groups?: groupsUpdateOneRequiredWithoutSystem_group_permissionNestedInput
  }

  export type system_group_permissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    maxMember?: IntFieldUpdateOperationsInput | number
    allowFileSharing?: BoolFieldUpdateOperationsInput | boolean
    allowPublicVisibility?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maxFileSizeMB?: IntFieldUpdateOperationsInput | number
    allowMessages?: BoolFieldUpdateOperationsInput | boolean
    autoAccept?: BoolFieldUpdateOperationsInput | boolean
  }

  export type system_group_permissionCreateManyInput = {
    id?: number
    groupId: number
    maxMember?: number
    allowFileSharing?: boolean
    allowPublicVisibility?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    maxFileSizeMB?: number
    allowMessages?: boolean
    autoAccept?: boolean
  }

  export type system_group_permissionUpdateManyMutationInput = {
    maxMember?: IntFieldUpdateOperationsInput | number
    allowFileSharing?: BoolFieldUpdateOperationsInput | boolean
    allowPublicVisibility?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maxFileSizeMB?: IntFieldUpdateOperationsInput | number
    allowMessages?: BoolFieldUpdateOperationsInput | boolean
    autoAccept?: BoolFieldUpdateOperationsInput | boolean
  }

  export type system_group_permissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
    maxMember?: IntFieldUpdateOperationsInput | number
    allowFileSharing?: BoolFieldUpdateOperationsInput | boolean
    allowPublicVisibility?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maxFileSizeMB?: IntFieldUpdateOperationsInput | number
    allowMessages?: BoolFieldUpdateOperationsInput | boolean
    autoAccept?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Enumstudent_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.student_role | Enumstudent_roleFieldRefInput<$PrismaModel>
    in?: $Enums.student_role[]
    notIn?: $Enums.student_role[]
    not?: NestedEnumstudent_roleFilter<$PrismaModel> | $Enums.student_role
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type GroupMembersListRelationFilter = {
    every?: groupMembersWhereInput
    some?: groupMembersWhereInput
    none?: groupMembersWhereInput
  }

  export type MessageListRelationFilter = {
    every?: messageWhereInput
    some?: messageWhereInput
    none?: messageWhereInput
  }

  export type ProfileNullableScalarRelationFilter = {
    is?: profileWhereInput | null
    isNot?: profileWhereInput | null
  }

  export type ResourcesListRelationFilter = {
    every?: resourcesWhereInput
    some?: resourcesWhereInput
    none?: resourcesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type groupMembersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type messageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type resourcesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type studentOrderByRelevanceInput = {
    fields: studentOrderByRelevanceFieldEnum | studentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type studentCountOrderByAggregateInput = {
    Mat?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type studentAvgOrderByAggregateInput = {
    Mat?: SortOrder
  }

  export type studentMaxOrderByAggregateInput = {
    Mat?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type studentMinOrderByAggregateInput = {
    Mat?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type studentSumOrderByAggregateInput = {
    Mat?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type Enumstudent_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.student_role | Enumstudent_roleFieldRefInput<$PrismaModel>
    in?: $Enums.student_role[]
    notIn?: $Enums.student_role[]
    not?: NestedEnumstudent_roleWithAggregatesFilter<$PrismaModel> | $Enums.student_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstudent_roleFilter<$PrismaModel>
    _max?: NestedEnumstudent_roleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StudentScalarRelationFilter = {
    is?: studentWhereInput
    isNot?: studentWhereInput
  }

  export type profileOrderByRelevanceInput = {
    fields: profileOrderByRelevanceFieldEnum | profileOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type profileCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    image?: SortOrder
    bio?: SortOrder
  }

  export type profileAvgOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
  }

  export type profileMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    image?: SortOrder
    bio?: SortOrder
  }

  export type profileMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    image?: SortOrder
    bio?: SortOrder
  }

  export type profileSumOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type Enummessage_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.message_type | Enummessage_typeFieldRefInput<$PrismaModel>
    in?: $Enums.message_type[]
    notIn?: $Enums.message_type[]
    not?: NestedEnummessage_typeFilter<$PrismaModel> | $Enums.message_type
  }

  export type GroupsNullableScalarRelationFilter = {
    is?: groupsWhereInput | null
    isNot?: groupsWhereInput | null
  }

  export type StudentNullableScalarRelationFilter = {
    is?: studentWhereInput | null
    isNot?: studentWhereInput | null
  }

  export type ResourcesNullableScalarRelationFilter = {
    is?: resourcesWhereInput | null
    isNot?: resourcesWhereInput | null
  }

  export type messageOrderByRelevanceInput = {
    fields: messageOrderByRelevanceFieldEnum | messageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type messageCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    groupId?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    type?: SortOrder
    resourceId?: SortOrder
  }

  export type messageAvgOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    groupId?: SortOrder
    resourceId?: SortOrder
  }

  export type messageMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    groupId?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    type?: SortOrder
    resourceId?: SortOrder
  }

  export type messageMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    groupId?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    type?: SortOrder
    resourceId?: SortOrder
  }

  export type messageSumOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    groupId?: SortOrder
    resourceId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type Enummessage_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.message_type | Enummessage_typeFieldRefInput<$PrismaModel>
    in?: $Enums.message_type[]
    notIn?: $Enums.message_type[]
    not?: NestedEnummessage_typeWithAggregatesFilter<$PrismaModel> | $Enums.message_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnummessage_typeFilter<$PrismaModel>
    _max?: NestedEnummessage_typeFilter<$PrismaModel>
  }

  export type Enumgroups_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.groups_type | Enumgroups_typeFieldRefInput<$PrismaModel>
    in?: $Enums.groups_type[]
    notIn?: $Enums.groups_type[]
    not?: NestedEnumgroups_typeFilter<$PrismaModel> | $Enums.groups_type
  }

  export type Enumgroups_visibilityFilter<$PrismaModel = never> = {
    equals?: $Enums.groups_visibility | Enumgroups_visibilityFieldRefInput<$PrismaModel>
    in?: $Enums.groups_visibility[]
    notIn?: $Enums.groups_visibility[]
    not?: NestedEnumgroups_visibilityFilter<$PrismaModel> | $Enums.groups_visibility
  }

  export type Enumgroups_validationFilter<$PrismaModel = never> = {
    equals?: $Enums.groups_validation | Enumgroups_validationFieldRefInput<$PrismaModel>
    in?: $Enums.groups_validation[]
    notIn?: $Enums.groups_validation[]
    not?: NestedEnumgroups_validationFilter<$PrismaModel> | $Enums.groups_validation
  }

  export type NotificationListRelationFilter = {
    every?: notificationWhereInput
    some?: notificationWhereInput
    none?: notificationWhereInput
  }

  export type System_group_permissionNullableScalarRelationFilter = {
    is?: system_group_permissionWhereInput | null
    isNot?: system_group_permissionWhereInput | null
  }

  export type notificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type groupsOrderByRelevanceInput = {
    fields: groupsOrderByRelevanceFieldEnum | groupsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type groupsCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    visibility?: SortOrder
    name?: SortOrder
    description?: SortOrder
    validation?: SortOrder
    createdAt?: SortOrder
  }

  export type groupsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type groupsMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    visibility?: SortOrder
    name?: SortOrder
    description?: SortOrder
    validation?: SortOrder
    createdAt?: SortOrder
  }

  export type groupsMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    visibility?: SortOrder
    name?: SortOrder
    description?: SortOrder
    validation?: SortOrder
    createdAt?: SortOrder
  }

  export type groupsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Enumgroups_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.groups_type | Enumgroups_typeFieldRefInput<$PrismaModel>
    in?: $Enums.groups_type[]
    notIn?: $Enums.groups_type[]
    not?: NestedEnumgroups_typeWithAggregatesFilter<$PrismaModel> | $Enums.groups_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumgroups_typeFilter<$PrismaModel>
    _max?: NestedEnumgroups_typeFilter<$PrismaModel>
  }

  export type Enumgroups_visibilityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.groups_visibility | Enumgroups_visibilityFieldRefInput<$PrismaModel>
    in?: $Enums.groups_visibility[]
    notIn?: $Enums.groups_visibility[]
    not?: NestedEnumgroups_visibilityWithAggregatesFilter<$PrismaModel> | $Enums.groups_visibility
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumgroups_visibilityFilter<$PrismaModel>
    _max?: NestedEnumgroups_visibilityFilter<$PrismaModel>
  }

  export type Enumgroups_validationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.groups_validation | Enumgroups_validationFieldRefInput<$PrismaModel>
    in?: $Enums.groups_validation[]
    notIn?: $Enums.groups_validation[]
    not?: NestedEnumgroups_validationWithAggregatesFilter<$PrismaModel> | $Enums.groups_validation
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumgroups_validationFilter<$PrismaModel>
    _max?: NestedEnumgroups_validationFilter<$PrismaModel>
  }

  export type Enumnotification_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.notification_type | Enumnotification_typeFieldRefInput<$PrismaModel>
    in?: $Enums.notification_type[]
    notIn?: $Enums.notification_type[]
    not?: NestedEnumnotification_typeFilter<$PrismaModel> | $Enums.notification_type
  }

  export type notificationOrderByRelevanceInput = {
    fields: notificationOrderByRelevanceFieldEnum | notificationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type notificationCountOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    content?: SortOrder
    studentId?: SortOrder
    groupId?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    sentAt?: SortOrder
  }

  export type notificationAvgOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    groupId?: SortOrder
  }

  export type notificationMaxOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    content?: SortOrder
    studentId?: SortOrder
    groupId?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    sentAt?: SortOrder
  }

  export type notificationMinOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    content?: SortOrder
    studentId?: SortOrder
    groupId?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    sentAt?: SortOrder
  }

  export type notificationSumOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    groupId?: SortOrder
  }

  export type Enumnotification_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.notification_type | Enumnotification_typeFieldRefInput<$PrismaModel>
    in?: $Enums.notification_type[]
    notIn?: $Enums.notification_type[]
    not?: NestedEnumnotification_typeWithAggregatesFilter<$PrismaModel> | $Enums.notification_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumnotification_typeFilter<$PrismaModel>
    _max?: NestedEnumnotification_typeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type Enumresources_validationFilter<$PrismaModel = never> = {
    equals?: $Enums.resources_validation | Enumresources_validationFieldRefInput<$PrismaModel>
    in?: $Enums.resources_validation[]
    notIn?: $Enums.resources_validation[]
    not?: NestedEnumresources_validationFilter<$PrismaModel> | $Enums.resources_validation
  }

  export type resourcesOrderByRelevanceInput = {
    fields: resourcesOrderByRelevanceFieldEnum | resourcesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type resourcesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    filepath?: SortOrder
    size?: SortOrder
    studentId?: SortOrder
    validation?: SortOrder
    groupId?: SortOrder
    uploadedAt?: SortOrder
    fileType?: SortOrder
    mimeType?: SortOrder
  }

  export type resourcesAvgOrderByAggregateInput = {
    id?: SortOrder
    size?: SortOrder
    studentId?: SortOrder
    groupId?: SortOrder
  }

  export type resourcesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    filepath?: SortOrder
    size?: SortOrder
    studentId?: SortOrder
    validation?: SortOrder
    groupId?: SortOrder
    uploadedAt?: SortOrder
    fileType?: SortOrder
    mimeType?: SortOrder
  }

  export type resourcesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    filepath?: SortOrder
    size?: SortOrder
    studentId?: SortOrder
    validation?: SortOrder
    groupId?: SortOrder
    uploadedAt?: SortOrder
    fileType?: SortOrder
    mimeType?: SortOrder
  }

  export type resourcesSumOrderByAggregateInput = {
    id?: SortOrder
    size?: SortOrder
    studentId?: SortOrder
    groupId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type Enumresources_validationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.resources_validation | Enumresources_validationFieldRefInput<$PrismaModel>
    in?: $Enums.resources_validation[]
    notIn?: $Enums.resources_validation[]
    not?: NestedEnumresources_validationWithAggregatesFilter<$PrismaModel> | $Enums.resources_validation
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumresources_validationFilter<$PrismaModel>
    _max?: NestedEnumresources_validationFilter<$PrismaModel>
  }

  export type EnumgroupMembers_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.groupMembers_role | EnumgroupMembers_roleFieldRefInput<$PrismaModel>
    in?: $Enums.groupMembers_role[]
    notIn?: $Enums.groupMembers_role[]
    not?: NestedEnumgroupMembers_roleFilter<$PrismaModel> | $Enums.groupMembers_role
  }

  export type EnumgroupMembers_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.groupMembers_status | EnumgroupMembers_statusFieldRefInput<$PrismaModel>
    in?: $Enums.groupMembers_status[]
    notIn?: $Enums.groupMembers_status[]
    not?: NestedEnumgroupMembers_statusFilter<$PrismaModel> | $Enums.groupMembers_status
  }

  export type GroupsScalarRelationFilter = {
    is?: groupsWhereInput
    isNot?: groupsWhereInput
  }

  export type Group_member_permissionListRelationFilter = {
    every?: group_member_permissionWhereInput
    some?: group_member_permissionWhereInput
    none?: group_member_permissionWhereInput
  }

  export type group_member_permissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type groupMembersStudentIdGroupIdCompoundUniqueInput = {
    studentId: number
    groupId: number
  }

  export type groupMembersCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    status?: SortOrder
    date_adhesion?: SortOrder
    studentId?: SortOrder
    groupId?: SortOrder
  }

  export type groupMembersAvgOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    groupId?: SortOrder
  }

  export type groupMembersMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    status?: SortOrder
    date_adhesion?: SortOrder
    studentId?: SortOrder
    groupId?: SortOrder
  }

  export type groupMembersMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    status?: SortOrder
    date_adhesion?: SortOrder
    studentId?: SortOrder
    groupId?: SortOrder
  }

  export type groupMembersSumOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    groupId?: SortOrder
  }

  export type EnumgroupMembers_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.groupMembers_role | EnumgroupMembers_roleFieldRefInput<$PrismaModel>
    in?: $Enums.groupMembers_role[]
    notIn?: $Enums.groupMembers_role[]
    not?: NestedEnumgroupMembers_roleWithAggregatesFilter<$PrismaModel> | $Enums.groupMembers_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumgroupMembers_roleFilter<$PrismaModel>
    _max?: NestedEnumgroupMembers_roleFilter<$PrismaModel>
  }

  export type EnumgroupMembers_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.groupMembers_status | EnumgroupMembers_statusFieldRefInput<$PrismaModel>
    in?: $Enums.groupMembers_status[]
    notIn?: $Enums.groupMembers_status[]
    not?: NestedEnumgroupMembers_statusWithAggregatesFilter<$PrismaModel> | $Enums.groupMembers_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumgroupMembers_statusFilter<$PrismaModel>
    _max?: NestedEnumgroupMembers_statusFilter<$PrismaModel>
  }

  export type GroupMembersScalarRelationFilter = {
    is?: groupMembersWhereInput
    isNot?: groupMembersWhereInput
  }

  export type group_member_permissionCountOrderByAggregateInput = {
    id?: SortOrder
    groupMemberId?: SortOrder
    canAcceptMembers?: SortOrder
    canValidateRessources?: SortOrder
    canDeleteMessages?: SortOrder
    canEditGroupInfo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type group_member_permissionAvgOrderByAggregateInput = {
    id?: SortOrder
    groupMemberId?: SortOrder
  }

  export type group_member_permissionMaxOrderByAggregateInput = {
    id?: SortOrder
    groupMemberId?: SortOrder
    canAcceptMembers?: SortOrder
    canValidateRessources?: SortOrder
    canDeleteMessages?: SortOrder
    canEditGroupInfo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type group_member_permissionMinOrderByAggregateInput = {
    id?: SortOrder
    groupMemberId?: SortOrder
    canAcceptMembers?: SortOrder
    canValidateRessources?: SortOrder
    canDeleteMessages?: SortOrder
    canEditGroupInfo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type group_member_permissionSumOrderByAggregateInput = {
    id?: SortOrder
    groupMemberId?: SortOrder
  }

  export type system_group_permissionCountOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    maxMember?: SortOrder
    allowFileSharing?: SortOrder
    allowPublicVisibility?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    maxFileSizeMB?: SortOrder
    allowMessages?: SortOrder
    autoAccept?: SortOrder
  }

  export type system_group_permissionAvgOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    maxMember?: SortOrder
    maxFileSizeMB?: SortOrder
  }

  export type system_group_permissionMaxOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    maxMember?: SortOrder
    allowFileSharing?: SortOrder
    allowPublicVisibility?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    maxFileSizeMB?: SortOrder
    allowMessages?: SortOrder
    autoAccept?: SortOrder
  }

  export type system_group_permissionMinOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    maxMember?: SortOrder
    allowFileSharing?: SortOrder
    allowPublicVisibility?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    maxFileSizeMB?: SortOrder
    allowMessages?: SortOrder
    autoAccept?: SortOrder
  }

  export type system_group_permissionSumOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    maxMember?: SortOrder
    maxFileSizeMB?: SortOrder
  }

  export type groupMembersCreateNestedManyWithoutStudentInput = {
    create?: XOR<groupMembersCreateWithoutStudentInput, groupMembersUncheckedCreateWithoutStudentInput> | groupMembersCreateWithoutStudentInput[] | groupMembersUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: groupMembersCreateOrConnectWithoutStudentInput | groupMembersCreateOrConnectWithoutStudentInput[]
    createMany?: groupMembersCreateManyStudentInputEnvelope
    connect?: groupMembersWhereUniqueInput | groupMembersWhereUniqueInput[]
  }

  export type messageCreateNestedManyWithoutReceiverInput = {
    create?: XOR<messageCreateWithoutReceiverInput, messageUncheckedCreateWithoutReceiverInput> | messageCreateWithoutReceiverInput[] | messageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: messageCreateOrConnectWithoutReceiverInput | messageCreateOrConnectWithoutReceiverInput[]
    createMany?: messageCreateManyReceiverInputEnvelope
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
  }

  export type messageCreateNestedManyWithoutSenderInput = {
    create?: XOR<messageCreateWithoutSenderInput, messageUncheckedCreateWithoutSenderInput> | messageCreateWithoutSenderInput[] | messageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: messageCreateOrConnectWithoutSenderInput | messageCreateOrConnectWithoutSenderInput[]
    createMany?: messageCreateManySenderInputEnvelope
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
  }

  export type profileCreateNestedOneWithoutStudentInput = {
    create?: XOR<profileCreateWithoutStudentInput, profileUncheckedCreateWithoutStudentInput>
    connectOrCreate?: profileCreateOrConnectWithoutStudentInput
    connect?: profileWhereUniqueInput
  }

  export type resourcesCreateNestedManyWithoutStudentInput = {
    create?: XOR<resourcesCreateWithoutStudentInput, resourcesUncheckedCreateWithoutStudentInput> | resourcesCreateWithoutStudentInput[] | resourcesUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: resourcesCreateOrConnectWithoutStudentInput | resourcesCreateOrConnectWithoutStudentInput[]
    createMany?: resourcesCreateManyStudentInputEnvelope
    connect?: resourcesWhereUniqueInput | resourcesWhereUniqueInput[]
  }

  export type groupMembersUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<groupMembersCreateWithoutStudentInput, groupMembersUncheckedCreateWithoutStudentInput> | groupMembersCreateWithoutStudentInput[] | groupMembersUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: groupMembersCreateOrConnectWithoutStudentInput | groupMembersCreateOrConnectWithoutStudentInput[]
    createMany?: groupMembersCreateManyStudentInputEnvelope
    connect?: groupMembersWhereUniqueInput | groupMembersWhereUniqueInput[]
  }

  export type messageUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<messageCreateWithoutReceiverInput, messageUncheckedCreateWithoutReceiverInput> | messageCreateWithoutReceiverInput[] | messageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: messageCreateOrConnectWithoutReceiverInput | messageCreateOrConnectWithoutReceiverInput[]
    createMany?: messageCreateManyReceiverInputEnvelope
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
  }

  export type messageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<messageCreateWithoutSenderInput, messageUncheckedCreateWithoutSenderInput> | messageCreateWithoutSenderInput[] | messageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: messageCreateOrConnectWithoutSenderInput | messageCreateOrConnectWithoutSenderInput[]
    createMany?: messageCreateManySenderInputEnvelope
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
  }

  export type profileUncheckedCreateNestedOneWithoutStudentInput = {
    create?: XOR<profileCreateWithoutStudentInput, profileUncheckedCreateWithoutStudentInput>
    connectOrCreate?: profileCreateOrConnectWithoutStudentInput
    connect?: profileWhereUniqueInput
  }

  export type resourcesUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<resourcesCreateWithoutStudentInput, resourcesUncheckedCreateWithoutStudentInput> | resourcesCreateWithoutStudentInput[] | resourcesUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: resourcesCreateOrConnectWithoutStudentInput | resourcesCreateOrConnectWithoutStudentInput[]
    createMany?: resourcesCreateManyStudentInputEnvelope
    connect?: resourcesWhereUniqueInput | resourcesWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type Enumstudent_roleFieldUpdateOperationsInput = {
    set?: $Enums.student_role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type groupMembersUpdateManyWithoutStudentNestedInput = {
    create?: XOR<groupMembersCreateWithoutStudentInput, groupMembersUncheckedCreateWithoutStudentInput> | groupMembersCreateWithoutStudentInput[] | groupMembersUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: groupMembersCreateOrConnectWithoutStudentInput | groupMembersCreateOrConnectWithoutStudentInput[]
    upsert?: groupMembersUpsertWithWhereUniqueWithoutStudentInput | groupMembersUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: groupMembersCreateManyStudentInputEnvelope
    set?: groupMembersWhereUniqueInput | groupMembersWhereUniqueInput[]
    disconnect?: groupMembersWhereUniqueInput | groupMembersWhereUniqueInput[]
    delete?: groupMembersWhereUniqueInput | groupMembersWhereUniqueInput[]
    connect?: groupMembersWhereUniqueInput | groupMembersWhereUniqueInput[]
    update?: groupMembersUpdateWithWhereUniqueWithoutStudentInput | groupMembersUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: groupMembersUpdateManyWithWhereWithoutStudentInput | groupMembersUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: groupMembersScalarWhereInput | groupMembersScalarWhereInput[]
  }

  export type messageUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<messageCreateWithoutReceiverInput, messageUncheckedCreateWithoutReceiverInput> | messageCreateWithoutReceiverInput[] | messageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: messageCreateOrConnectWithoutReceiverInput | messageCreateOrConnectWithoutReceiverInput[]
    upsert?: messageUpsertWithWhereUniqueWithoutReceiverInput | messageUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: messageCreateManyReceiverInputEnvelope
    set?: messageWhereUniqueInput | messageWhereUniqueInput[]
    disconnect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    delete?: messageWhereUniqueInput | messageWhereUniqueInput[]
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    update?: messageUpdateWithWhereUniqueWithoutReceiverInput | messageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: messageUpdateManyWithWhereWithoutReceiverInput | messageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: messageScalarWhereInput | messageScalarWhereInput[]
  }

  export type messageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<messageCreateWithoutSenderInput, messageUncheckedCreateWithoutSenderInput> | messageCreateWithoutSenderInput[] | messageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: messageCreateOrConnectWithoutSenderInput | messageCreateOrConnectWithoutSenderInput[]
    upsert?: messageUpsertWithWhereUniqueWithoutSenderInput | messageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: messageCreateManySenderInputEnvelope
    set?: messageWhereUniqueInput | messageWhereUniqueInput[]
    disconnect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    delete?: messageWhereUniqueInput | messageWhereUniqueInput[]
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    update?: messageUpdateWithWhereUniqueWithoutSenderInput | messageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: messageUpdateManyWithWhereWithoutSenderInput | messageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: messageScalarWhereInput | messageScalarWhereInput[]
  }

  export type profileUpdateOneWithoutStudentNestedInput = {
    create?: XOR<profileCreateWithoutStudentInput, profileUncheckedCreateWithoutStudentInput>
    connectOrCreate?: profileCreateOrConnectWithoutStudentInput
    upsert?: profileUpsertWithoutStudentInput
    disconnect?: profileWhereInput | boolean
    delete?: profileWhereInput | boolean
    connect?: profileWhereUniqueInput
    update?: XOR<XOR<profileUpdateToOneWithWhereWithoutStudentInput, profileUpdateWithoutStudentInput>, profileUncheckedUpdateWithoutStudentInput>
  }

  export type resourcesUpdateManyWithoutStudentNestedInput = {
    create?: XOR<resourcesCreateWithoutStudentInput, resourcesUncheckedCreateWithoutStudentInput> | resourcesCreateWithoutStudentInput[] | resourcesUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: resourcesCreateOrConnectWithoutStudentInput | resourcesCreateOrConnectWithoutStudentInput[]
    upsert?: resourcesUpsertWithWhereUniqueWithoutStudentInput | resourcesUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: resourcesCreateManyStudentInputEnvelope
    set?: resourcesWhereUniqueInput | resourcesWhereUniqueInput[]
    disconnect?: resourcesWhereUniqueInput | resourcesWhereUniqueInput[]
    delete?: resourcesWhereUniqueInput | resourcesWhereUniqueInput[]
    connect?: resourcesWhereUniqueInput | resourcesWhereUniqueInput[]
    update?: resourcesUpdateWithWhereUniqueWithoutStudentInput | resourcesUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: resourcesUpdateManyWithWhereWithoutStudentInput | resourcesUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: resourcesScalarWhereInput | resourcesScalarWhereInput[]
  }

  export type groupMembersUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<groupMembersCreateWithoutStudentInput, groupMembersUncheckedCreateWithoutStudentInput> | groupMembersCreateWithoutStudentInput[] | groupMembersUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: groupMembersCreateOrConnectWithoutStudentInput | groupMembersCreateOrConnectWithoutStudentInput[]
    upsert?: groupMembersUpsertWithWhereUniqueWithoutStudentInput | groupMembersUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: groupMembersCreateManyStudentInputEnvelope
    set?: groupMembersWhereUniqueInput | groupMembersWhereUniqueInput[]
    disconnect?: groupMembersWhereUniqueInput | groupMembersWhereUniqueInput[]
    delete?: groupMembersWhereUniqueInput | groupMembersWhereUniqueInput[]
    connect?: groupMembersWhereUniqueInput | groupMembersWhereUniqueInput[]
    update?: groupMembersUpdateWithWhereUniqueWithoutStudentInput | groupMembersUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: groupMembersUpdateManyWithWhereWithoutStudentInput | groupMembersUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: groupMembersScalarWhereInput | groupMembersScalarWhereInput[]
  }

  export type messageUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<messageCreateWithoutReceiverInput, messageUncheckedCreateWithoutReceiverInput> | messageCreateWithoutReceiverInput[] | messageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: messageCreateOrConnectWithoutReceiverInput | messageCreateOrConnectWithoutReceiverInput[]
    upsert?: messageUpsertWithWhereUniqueWithoutReceiverInput | messageUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: messageCreateManyReceiverInputEnvelope
    set?: messageWhereUniqueInput | messageWhereUniqueInput[]
    disconnect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    delete?: messageWhereUniqueInput | messageWhereUniqueInput[]
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    update?: messageUpdateWithWhereUniqueWithoutReceiverInput | messageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: messageUpdateManyWithWhereWithoutReceiverInput | messageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: messageScalarWhereInput | messageScalarWhereInput[]
  }

  export type messageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<messageCreateWithoutSenderInput, messageUncheckedCreateWithoutSenderInput> | messageCreateWithoutSenderInput[] | messageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: messageCreateOrConnectWithoutSenderInput | messageCreateOrConnectWithoutSenderInput[]
    upsert?: messageUpsertWithWhereUniqueWithoutSenderInput | messageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: messageCreateManySenderInputEnvelope
    set?: messageWhereUniqueInput | messageWhereUniqueInput[]
    disconnect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    delete?: messageWhereUniqueInput | messageWhereUniqueInput[]
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    update?: messageUpdateWithWhereUniqueWithoutSenderInput | messageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: messageUpdateManyWithWhereWithoutSenderInput | messageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: messageScalarWhereInput | messageScalarWhereInput[]
  }

  export type profileUncheckedUpdateOneWithoutStudentNestedInput = {
    create?: XOR<profileCreateWithoutStudentInput, profileUncheckedCreateWithoutStudentInput>
    connectOrCreate?: profileCreateOrConnectWithoutStudentInput
    upsert?: profileUpsertWithoutStudentInput
    disconnect?: profileWhereInput | boolean
    delete?: profileWhereInput | boolean
    connect?: profileWhereUniqueInput
    update?: XOR<XOR<profileUpdateToOneWithWhereWithoutStudentInput, profileUpdateWithoutStudentInput>, profileUncheckedUpdateWithoutStudentInput>
  }

  export type resourcesUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<resourcesCreateWithoutStudentInput, resourcesUncheckedCreateWithoutStudentInput> | resourcesCreateWithoutStudentInput[] | resourcesUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: resourcesCreateOrConnectWithoutStudentInput | resourcesCreateOrConnectWithoutStudentInput[]
    upsert?: resourcesUpsertWithWhereUniqueWithoutStudentInput | resourcesUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: resourcesCreateManyStudentInputEnvelope
    set?: resourcesWhereUniqueInput | resourcesWhereUniqueInput[]
    disconnect?: resourcesWhereUniqueInput | resourcesWhereUniqueInput[]
    delete?: resourcesWhereUniqueInput | resourcesWhereUniqueInput[]
    connect?: resourcesWhereUniqueInput | resourcesWhereUniqueInput[]
    update?: resourcesUpdateWithWhereUniqueWithoutStudentInput | resourcesUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: resourcesUpdateManyWithWhereWithoutStudentInput | resourcesUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: resourcesScalarWhereInput | resourcesScalarWhereInput[]
  }

  export type studentCreateNestedOneWithoutProfileInput = {
    create?: XOR<studentCreateWithoutProfileInput, studentUncheckedCreateWithoutProfileInput>
    connectOrCreate?: studentCreateOrConnectWithoutProfileInput
    connect?: studentWhereUniqueInput
  }

  export type studentUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<studentCreateWithoutProfileInput, studentUncheckedCreateWithoutProfileInput>
    connectOrCreate?: studentCreateOrConnectWithoutProfileInput
    upsert?: studentUpsertWithoutProfileInput
    connect?: studentWhereUniqueInput
    update?: XOR<XOR<studentUpdateToOneWithWhereWithoutProfileInput, studentUpdateWithoutProfileInput>, studentUncheckedUpdateWithoutProfileInput>
  }

  export type groupsCreateNestedOneWithoutMessagesInput = {
    create?: XOR<groupsCreateWithoutMessagesInput, groupsUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: groupsCreateOrConnectWithoutMessagesInput
    connect?: groupsWhereUniqueInput
  }

  export type studentCreateNestedOneWithoutReceivedMessagesInput = {
    create?: XOR<studentCreateWithoutReceivedMessagesInput, studentUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: studentCreateOrConnectWithoutReceivedMessagesInput
    connect?: studentWhereUniqueInput
  }

  export type resourcesCreateNestedOneWithoutMessagesInput = {
    create?: XOR<resourcesCreateWithoutMessagesInput, resourcesUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: resourcesCreateOrConnectWithoutMessagesInput
    connect?: resourcesWhereUniqueInput
  }

  export type studentCreateNestedOneWithoutSentMessagesInput = {
    create?: XOR<studentCreateWithoutSentMessagesInput, studentUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: studentCreateOrConnectWithoutSentMessagesInput
    connect?: studentWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type Enummessage_typeFieldUpdateOperationsInput = {
    set?: $Enums.message_type
  }

  export type groupsUpdateOneWithoutMessagesNestedInput = {
    create?: XOR<groupsCreateWithoutMessagesInput, groupsUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: groupsCreateOrConnectWithoutMessagesInput
    upsert?: groupsUpsertWithoutMessagesInput
    disconnect?: groupsWhereInput | boolean
    delete?: groupsWhereInput | boolean
    connect?: groupsWhereUniqueInput
    update?: XOR<XOR<groupsUpdateToOneWithWhereWithoutMessagesInput, groupsUpdateWithoutMessagesInput>, groupsUncheckedUpdateWithoutMessagesInput>
  }

  export type studentUpdateOneWithoutReceivedMessagesNestedInput = {
    create?: XOR<studentCreateWithoutReceivedMessagesInput, studentUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: studentCreateOrConnectWithoutReceivedMessagesInput
    upsert?: studentUpsertWithoutReceivedMessagesInput
    disconnect?: studentWhereInput | boolean
    delete?: studentWhereInput | boolean
    connect?: studentWhereUniqueInput
    update?: XOR<XOR<studentUpdateToOneWithWhereWithoutReceivedMessagesInput, studentUpdateWithoutReceivedMessagesInput>, studentUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type resourcesUpdateOneWithoutMessagesNestedInput = {
    create?: XOR<resourcesCreateWithoutMessagesInput, resourcesUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: resourcesCreateOrConnectWithoutMessagesInput
    upsert?: resourcesUpsertWithoutMessagesInput
    disconnect?: resourcesWhereInput | boolean
    delete?: resourcesWhereInput | boolean
    connect?: resourcesWhereUniqueInput
    update?: XOR<XOR<resourcesUpdateToOneWithWhereWithoutMessagesInput, resourcesUpdateWithoutMessagesInput>, resourcesUncheckedUpdateWithoutMessagesInput>
  }

  export type studentUpdateOneRequiredWithoutSentMessagesNestedInput = {
    create?: XOR<studentCreateWithoutSentMessagesInput, studentUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: studentCreateOrConnectWithoutSentMessagesInput
    upsert?: studentUpsertWithoutSentMessagesInput
    connect?: studentWhereUniqueInput
    update?: XOR<XOR<studentUpdateToOneWithWhereWithoutSentMessagesInput, studentUpdateWithoutSentMessagesInput>, studentUncheckedUpdateWithoutSentMessagesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type groupMembersCreateNestedManyWithoutGroupsInput = {
    create?: XOR<groupMembersCreateWithoutGroupsInput, groupMembersUncheckedCreateWithoutGroupsInput> | groupMembersCreateWithoutGroupsInput[] | groupMembersUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: groupMembersCreateOrConnectWithoutGroupsInput | groupMembersCreateOrConnectWithoutGroupsInput[]
    createMany?: groupMembersCreateManyGroupsInputEnvelope
    connect?: groupMembersWhereUniqueInput | groupMembersWhereUniqueInput[]
  }

  export type messageCreateNestedManyWithoutGroupInput = {
    create?: XOR<messageCreateWithoutGroupInput, messageUncheckedCreateWithoutGroupInput> | messageCreateWithoutGroupInput[] | messageUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: messageCreateOrConnectWithoutGroupInput | messageCreateOrConnectWithoutGroupInput[]
    createMany?: messageCreateManyGroupInputEnvelope
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
  }

  export type notificationCreateNestedManyWithoutGroupInput = {
    create?: XOR<notificationCreateWithoutGroupInput, notificationUncheckedCreateWithoutGroupInput> | notificationCreateWithoutGroupInput[] | notificationUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: notificationCreateOrConnectWithoutGroupInput | notificationCreateOrConnectWithoutGroupInput[]
    createMany?: notificationCreateManyGroupInputEnvelope
    connect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
  }

  export type resourcesCreateNestedManyWithoutGroupInput = {
    create?: XOR<resourcesCreateWithoutGroupInput, resourcesUncheckedCreateWithoutGroupInput> | resourcesCreateWithoutGroupInput[] | resourcesUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: resourcesCreateOrConnectWithoutGroupInput | resourcesCreateOrConnectWithoutGroupInput[]
    createMany?: resourcesCreateManyGroupInputEnvelope
    connect?: resourcesWhereUniqueInput | resourcesWhereUniqueInput[]
  }

  export type system_group_permissionCreateNestedOneWithoutGroupsInput = {
    create?: XOR<system_group_permissionCreateWithoutGroupsInput, system_group_permissionUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: system_group_permissionCreateOrConnectWithoutGroupsInput
    connect?: system_group_permissionWhereUniqueInput
  }

  export type groupMembersUncheckedCreateNestedManyWithoutGroupsInput = {
    create?: XOR<groupMembersCreateWithoutGroupsInput, groupMembersUncheckedCreateWithoutGroupsInput> | groupMembersCreateWithoutGroupsInput[] | groupMembersUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: groupMembersCreateOrConnectWithoutGroupsInput | groupMembersCreateOrConnectWithoutGroupsInput[]
    createMany?: groupMembersCreateManyGroupsInputEnvelope
    connect?: groupMembersWhereUniqueInput | groupMembersWhereUniqueInput[]
  }

  export type messageUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<messageCreateWithoutGroupInput, messageUncheckedCreateWithoutGroupInput> | messageCreateWithoutGroupInput[] | messageUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: messageCreateOrConnectWithoutGroupInput | messageCreateOrConnectWithoutGroupInput[]
    createMany?: messageCreateManyGroupInputEnvelope
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
  }

  export type notificationUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<notificationCreateWithoutGroupInput, notificationUncheckedCreateWithoutGroupInput> | notificationCreateWithoutGroupInput[] | notificationUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: notificationCreateOrConnectWithoutGroupInput | notificationCreateOrConnectWithoutGroupInput[]
    createMany?: notificationCreateManyGroupInputEnvelope
    connect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
  }

  export type resourcesUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<resourcesCreateWithoutGroupInput, resourcesUncheckedCreateWithoutGroupInput> | resourcesCreateWithoutGroupInput[] | resourcesUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: resourcesCreateOrConnectWithoutGroupInput | resourcesCreateOrConnectWithoutGroupInput[]
    createMany?: resourcesCreateManyGroupInputEnvelope
    connect?: resourcesWhereUniqueInput | resourcesWhereUniqueInput[]
  }

  export type system_group_permissionUncheckedCreateNestedOneWithoutGroupsInput = {
    create?: XOR<system_group_permissionCreateWithoutGroupsInput, system_group_permissionUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: system_group_permissionCreateOrConnectWithoutGroupsInput
    connect?: system_group_permissionWhereUniqueInput
  }

  export type Enumgroups_typeFieldUpdateOperationsInput = {
    set?: $Enums.groups_type
  }

  export type Enumgroups_visibilityFieldUpdateOperationsInput = {
    set?: $Enums.groups_visibility
  }

  export type Enumgroups_validationFieldUpdateOperationsInput = {
    set?: $Enums.groups_validation
  }

  export type groupMembersUpdateManyWithoutGroupsNestedInput = {
    create?: XOR<groupMembersCreateWithoutGroupsInput, groupMembersUncheckedCreateWithoutGroupsInput> | groupMembersCreateWithoutGroupsInput[] | groupMembersUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: groupMembersCreateOrConnectWithoutGroupsInput | groupMembersCreateOrConnectWithoutGroupsInput[]
    upsert?: groupMembersUpsertWithWhereUniqueWithoutGroupsInput | groupMembersUpsertWithWhereUniqueWithoutGroupsInput[]
    createMany?: groupMembersCreateManyGroupsInputEnvelope
    set?: groupMembersWhereUniqueInput | groupMembersWhereUniqueInput[]
    disconnect?: groupMembersWhereUniqueInput | groupMembersWhereUniqueInput[]
    delete?: groupMembersWhereUniqueInput | groupMembersWhereUniqueInput[]
    connect?: groupMembersWhereUniqueInput | groupMembersWhereUniqueInput[]
    update?: groupMembersUpdateWithWhereUniqueWithoutGroupsInput | groupMembersUpdateWithWhereUniqueWithoutGroupsInput[]
    updateMany?: groupMembersUpdateManyWithWhereWithoutGroupsInput | groupMembersUpdateManyWithWhereWithoutGroupsInput[]
    deleteMany?: groupMembersScalarWhereInput | groupMembersScalarWhereInput[]
  }

  export type messageUpdateManyWithoutGroupNestedInput = {
    create?: XOR<messageCreateWithoutGroupInput, messageUncheckedCreateWithoutGroupInput> | messageCreateWithoutGroupInput[] | messageUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: messageCreateOrConnectWithoutGroupInput | messageCreateOrConnectWithoutGroupInput[]
    upsert?: messageUpsertWithWhereUniqueWithoutGroupInput | messageUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: messageCreateManyGroupInputEnvelope
    set?: messageWhereUniqueInput | messageWhereUniqueInput[]
    disconnect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    delete?: messageWhereUniqueInput | messageWhereUniqueInput[]
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    update?: messageUpdateWithWhereUniqueWithoutGroupInput | messageUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: messageUpdateManyWithWhereWithoutGroupInput | messageUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: messageScalarWhereInput | messageScalarWhereInput[]
  }

  export type notificationUpdateManyWithoutGroupNestedInput = {
    create?: XOR<notificationCreateWithoutGroupInput, notificationUncheckedCreateWithoutGroupInput> | notificationCreateWithoutGroupInput[] | notificationUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: notificationCreateOrConnectWithoutGroupInput | notificationCreateOrConnectWithoutGroupInput[]
    upsert?: notificationUpsertWithWhereUniqueWithoutGroupInput | notificationUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: notificationCreateManyGroupInputEnvelope
    set?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    disconnect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    delete?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    connect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    update?: notificationUpdateWithWhereUniqueWithoutGroupInput | notificationUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: notificationUpdateManyWithWhereWithoutGroupInput | notificationUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: notificationScalarWhereInput | notificationScalarWhereInput[]
  }

  export type resourcesUpdateManyWithoutGroupNestedInput = {
    create?: XOR<resourcesCreateWithoutGroupInput, resourcesUncheckedCreateWithoutGroupInput> | resourcesCreateWithoutGroupInput[] | resourcesUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: resourcesCreateOrConnectWithoutGroupInput | resourcesCreateOrConnectWithoutGroupInput[]
    upsert?: resourcesUpsertWithWhereUniqueWithoutGroupInput | resourcesUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: resourcesCreateManyGroupInputEnvelope
    set?: resourcesWhereUniqueInput | resourcesWhereUniqueInput[]
    disconnect?: resourcesWhereUniqueInput | resourcesWhereUniqueInput[]
    delete?: resourcesWhereUniqueInput | resourcesWhereUniqueInput[]
    connect?: resourcesWhereUniqueInput | resourcesWhereUniqueInput[]
    update?: resourcesUpdateWithWhereUniqueWithoutGroupInput | resourcesUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: resourcesUpdateManyWithWhereWithoutGroupInput | resourcesUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: resourcesScalarWhereInput | resourcesScalarWhereInput[]
  }

  export type system_group_permissionUpdateOneWithoutGroupsNestedInput = {
    create?: XOR<system_group_permissionCreateWithoutGroupsInput, system_group_permissionUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: system_group_permissionCreateOrConnectWithoutGroupsInput
    upsert?: system_group_permissionUpsertWithoutGroupsInput
    disconnect?: system_group_permissionWhereInput | boolean
    delete?: system_group_permissionWhereInput | boolean
    connect?: system_group_permissionWhereUniqueInput
    update?: XOR<XOR<system_group_permissionUpdateToOneWithWhereWithoutGroupsInput, system_group_permissionUpdateWithoutGroupsInput>, system_group_permissionUncheckedUpdateWithoutGroupsInput>
  }

  export type groupMembersUncheckedUpdateManyWithoutGroupsNestedInput = {
    create?: XOR<groupMembersCreateWithoutGroupsInput, groupMembersUncheckedCreateWithoutGroupsInput> | groupMembersCreateWithoutGroupsInput[] | groupMembersUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: groupMembersCreateOrConnectWithoutGroupsInput | groupMembersCreateOrConnectWithoutGroupsInput[]
    upsert?: groupMembersUpsertWithWhereUniqueWithoutGroupsInput | groupMembersUpsertWithWhereUniqueWithoutGroupsInput[]
    createMany?: groupMembersCreateManyGroupsInputEnvelope
    set?: groupMembersWhereUniqueInput | groupMembersWhereUniqueInput[]
    disconnect?: groupMembersWhereUniqueInput | groupMembersWhereUniqueInput[]
    delete?: groupMembersWhereUniqueInput | groupMembersWhereUniqueInput[]
    connect?: groupMembersWhereUniqueInput | groupMembersWhereUniqueInput[]
    update?: groupMembersUpdateWithWhereUniqueWithoutGroupsInput | groupMembersUpdateWithWhereUniqueWithoutGroupsInput[]
    updateMany?: groupMembersUpdateManyWithWhereWithoutGroupsInput | groupMembersUpdateManyWithWhereWithoutGroupsInput[]
    deleteMany?: groupMembersScalarWhereInput | groupMembersScalarWhereInput[]
  }

  export type messageUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<messageCreateWithoutGroupInput, messageUncheckedCreateWithoutGroupInput> | messageCreateWithoutGroupInput[] | messageUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: messageCreateOrConnectWithoutGroupInput | messageCreateOrConnectWithoutGroupInput[]
    upsert?: messageUpsertWithWhereUniqueWithoutGroupInput | messageUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: messageCreateManyGroupInputEnvelope
    set?: messageWhereUniqueInput | messageWhereUniqueInput[]
    disconnect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    delete?: messageWhereUniqueInput | messageWhereUniqueInput[]
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    update?: messageUpdateWithWhereUniqueWithoutGroupInput | messageUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: messageUpdateManyWithWhereWithoutGroupInput | messageUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: messageScalarWhereInput | messageScalarWhereInput[]
  }

  export type notificationUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<notificationCreateWithoutGroupInput, notificationUncheckedCreateWithoutGroupInput> | notificationCreateWithoutGroupInput[] | notificationUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: notificationCreateOrConnectWithoutGroupInput | notificationCreateOrConnectWithoutGroupInput[]
    upsert?: notificationUpsertWithWhereUniqueWithoutGroupInput | notificationUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: notificationCreateManyGroupInputEnvelope
    set?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    disconnect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    delete?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    connect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    update?: notificationUpdateWithWhereUniqueWithoutGroupInput | notificationUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: notificationUpdateManyWithWhereWithoutGroupInput | notificationUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: notificationScalarWhereInput | notificationScalarWhereInput[]
  }

  export type resourcesUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<resourcesCreateWithoutGroupInput, resourcesUncheckedCreateWithoutGroupInput> | resourcesCreateWithoutGroupInput[] | resourcesUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: resourcesCreateOrConnectWithoutGroupInput | resourcesCreateOrConnectWithoutGroupInput[]
    upsert?: resourcesUpsertWithWhereUniqueWithoutGroupInput | resourcesUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: resourcesCreateManyGroupInputEnvelope
    set?: resourcesWhereUniqueInput | resourcesWhereUniqueInput[]
    disconnect?: resourcesWhereUniqueInput | resourcesWhereUniqueInput[]
    delete?: resourcesWhereUniqueInput | resourcesWhereUniqueInput[]
    connect?: resourcesWhereUniqueInput | resourcesWhereUniqueInput[]
    update?: resourcesUpdateWithWhereUniqueWithoutGroupInput | resourcesUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: resourcesUpdateManyWithWhereWithoutGroupInput | resourcesUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: resourcesScalarWhereInput | resourcesScalarWhereInput[]
  }

  export type system_group_permissionUncheckedUpdateOneWithoutGroupsNestedInput = {
    create?: XOR<system_group_permissionCreateWithoutGroupsInput, system_group_permissionUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: system_group_permissionCreateOrConnectWithoutGroupsInput
    upsert?: system_group_permissionUpsertWithoutGroupsInput
    disconnect?: system_group_permissionWhereInput | boolean
    delete?: system_group_permissionWhereInput | boolean
    connect?: system_group_permissionWhereUniqueInput
    update?: XOR<XOR<system_group_permissionUpdateToOneWithWhereWithoutGroupsInput, system_group_permissionUpdateWithoutGroupsInput>, system_group_permissionUncheckedUpdateWithoutGroupsInput>
  }

  export type groupsCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<groupsCreateWithoutNotificationsInput, groupsUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: groupsCreateOrConnectWithoutNotificationsInput
    connect?: groupsWhereUniqueInput
  }

  export type Enumnotification_typeFieldUpdateOperationsInput = {
    set?: $Enums.notification_type
  }

  export type groupsUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<groupsCreateWithoutNotificationsInput, groupsUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: groupsCreateOrConnectWithoutNotificationsInput
    upsert?: groupsUpsertWithoutNotificationsInput
    disconnect?: groupsWhereInput | boolean
    delete?: groupsWhereInput | boolean
    connect?: groupsWhereUniqueInput
    update?: XOR<XOR<groupsUpdateToOneWithWhereWithoutNotificationsInput, groupsUpdateWithoutNotificationsInput>, groupsUncheckedUpdateWithoutNotificationsInput>
  }

  export type messageCreateNestedManyWithoutResourceInput = {
    create?: XOR<messageCreateWithoutResourceInput, messageUncheckedCreateWithoutResourceInput> | messageCreateWithoutResourceInput[] | messageUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: messageCreateOrConnectWithoutResourceInput | messageCreateOrConnectWithoutResourceInput[]
    createMany?: messageCreateManyResourceInputEnvelope
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
  }

  export type groupsCreateNestedOneWithoutResourcesInput = {
    create?: XOR<groupsCreateWithoutResourcesInput, groupsUncheckedCreateWithoutResourcesInput>
    connectOrCreate?: groupsCreateOrConnectWithoutResourcesInput
    connect?: groupsWhereUniqueInput
  }

  export type studentCreateNestedOneWithoutResourcesInput = {
    create?: XOR<studentCreateWithoutResourcesInput, studentUncheckedCreateWithoutResourcesInput>
    connectOrCreate?: studentCreateOrConnectWithoutResourcesInput
    connect?: studentWhereUniqueInput
  }

  export type messageUncheckedCreateNestedManyWithoutResourceInput = {
    create?: XOR<messageCreateWithoutResourceInput, messageUncheckedCreateWithoutResourceInput> | messageCreateWithoutResourceInput[] | messageUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: messageCreateOrConnectWithoutResourceInput | messageCreateOrConnectWithoutResourceInput[]
    createMany?: messageCreateManyResourceInputEnvelope
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Enumresources_validationFieldUpdateOperationsInput = {
    set?: $Enums.resources_validation
  }

  export type messageUpdateManyWithoutResourceNestedInput = {
    create?: XOR<messageCreateWithoutResourceInput, messageUncheckedCreateWithoutResourceInput> | messageCreateWithoutResourceInput[] | messageUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: messageCreateOrConnectWithoutResourceInput | messageCreateOrConnectWithoutResourceInput[]
    upsert?: messageUpsertWithWhereUniqueWithoutResourceInput | messageUpsertWithWhereUniqueWithoutResourceInput[]
    createMany?: messageCreateManyResourceInputEnvelope
    set?: messageWhereUniqueInput | messageWhereUniqueInput[]
    disconnect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    delete?: messageWhereUniqueInput | messageWhereUniqueInput[]
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    update?: messageUpdateWithWhereUniqueWithoutResourceInput | messageUpdateWithWhereUniqueWithoutResourceInput[]
    updateMany?: messageUpdateManyWithWhereWithoutResourceInput | messageUpdateManyWithWhereWithoutResourceInput[]
    deleteMany?: messageScalarWhereInput | messageScalarWhereInput[]
  }

  export type groupsUpdateOneWithoutResourcesNestedInput = {
    create?: XOR<groupsCreateWithoutResourcesInput, groupsUncheckedCreateWithoutResourcesInput>
    connectOrCreate?: groupsCreateOrConnectWithoutResourcesInput
    upsert?: groupsUpsertWithoutResourcesInput
    disconnect?: groupsWhereInput | boolean
    delete?: groupsWhereInput | boolean
    connect?: groupsWhereUniqueInput
    update?: XOR<XOR<groupsUpdateToOneWithWhereWithoutResourcesInput, groupsUpdateWithoutResourcesInput>, groupsUncheckedUpdateWithoutResourcesInput>
  }

  export type studentUpdateOneRequiredWithoutResourcesNestedInput = {
    create?: XOR<studentCreateWithoutResourcesInput, studentUncheckedCreateWithoutResourcesInput>
    connectOrCreate?: studentCreateOrConnectWithoutResourcesInput
    upsert?: studentUpsertWithoutResourcesInput
    connect?: studentWhereUniqueInput
    update?: XOR<XOR<studentUpdateToOneWithWhereWithoutResourcesInput, studentUpdateWithoutResourcesInput>, studentUncheckedUpdateWithoutResourcesInput>
  }

  export type messageUncheckedUpdateManyWithoutResourceNestedInput = {
    create?: XOR<messageCreateWithoutResourceInput, messageUncheckedCreateWithoutResourceInput> | messageCreateWithoutResourceInput[] | messageUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: messageCreateOrConnectWithoutResourceInput | messageCreateOrConnectWithoutResourceInput[]
    upsert?: messageUpsertWithWhereUniqueWithoutResourceInput | messageUpsertWithWhereUniqueWithoutResourceInput[]
    createMany?: messageCreateManyResourceInputEnvelope
    set?: messageWhereUniqueInput | messageWhereUniqueInput[]
    disconnect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    delete?: messageWhereUniqueInput | messageWhereUniqueInput[]
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    update?: messageUpdateWithWhereUniqueWithoutResourceInput | messageUpdateWithWhereUniqueWithoutResourceInput[]
    updateMany?: messageUpdateManyWithWhereWithoutResourceInput | messageUpdateManyWithWhereWithoutResourceInput[]
    deleteMany?: messageScalarWhereInput | messageScalarWhereInput[]
  }

  export type groupsCreateNestedOneWithoutGroupMembersInput = {
    create?: XOR<groupsCreateWithoutGroupMembersInput, groupsUncheckedCreateWithoutGroupMembersInput>
    connectOrCreate?: groupsCreateOrConnectWithoutGroupMembersInput
    connect?: groupsWhereUniqueInput
  }

  export type studentCreateNestedOneWithoutGroupMembersInput = {
    create?: XOR<studentCreateWithoutGroupMembersInput, studentUncheckedCreateWithoutGroupMembersInput>
    connectOrCreate?: studentCreateOrConnectWithoutGroupMembersInput
    connect?: studentWhereUniqueInput
  }

  export type group_member_permissionCreateNestedManyWithoutGroupMembersInput = {
    create?: XOR<group_member_permissionCreateWithoutGroupMembersInput, group_member_permissionUncheckedCreateWithoutGroupMembersInput> | group_member_permissionCreateWithoutGroupMembersInput[] | group_member_permissionUncheckedCreateWithoutGroupMembersInput[]
    connectOrCreate?: group_member_permissionCreateOrConnectWithoutGroupMembersInput | group_member_permissionCreateOrConnectWithoutGroupMembersInput[]
    createMany?: group_member_permissionCreateManyGroupMembersInputEnvelope
    connect?: group_member_permissionWhereUniqueInput | group_member_permissionWhereUniqueInput[]
  }

  export type group_member_permissionUncheckedCreateNestedManyWithoutGroupMembersInput = {
    create?: XOR<group_member_permissionCreateWithoutGroupMembersInput, group_member_permissionUncheckedCreateWithoutGroupMembersInput> | group_member_permissionCreateWithoutGroupMembersInput[] | group_member_permissionUncheckedCreateWithoutGroupMembersInput[]
    connectOrCreate?: group_member_permissionCreateOrConnectWithoutGroupMembersInput | group_member_permissionCreateOrConnectWithoutGroupMembersInput[]
    createMany?: group_member_permissionCreateManyGroupMembersInputEnvelope
    connect?: group_member_permissionWhereUniqueInput | group_member_permissionWhereUniqueInput[]
  }

  export type EnumgroupMembers_roleFieldUpdateOperationsInput = {
    set?: $Enums.groupMembers_role
  }

  export type EnumgroupMembers_statusFieldUpdateOperationsInput = {
    set?: $Enums.groupMembers_status
  }

  export type groupsUpdateOneRequiredWithoutGroupMembersNestedInput = {
    create?: XOR<groupsCreateWithoutGroupMembersInput, groupsUncheckedCreateWithoutGroupMembersInput>
    connectOrCreate?: groupsCreateOrConnectWithoutGroupMembersInput
    upsert?: groupsUpsertWithoutGroupMembersInput
    connect?: groupsWhereUniqueInput
    update?: XOR<XOR<groupsUpdateToOneWithWhereWithoutGroupMembersInput, groupsUpdateWithoutGroupMembersInput>, groupsUncheckedUpdateWithoutGroupMembersInput>
  }

  export type studentUpdateOneRequiredWithoutGroupMembersNestedInput = {
    create?: XOR<studentCreateWithoutGroupMembersInput, studentUncheckedCreateWithoutGroupMembersInput>
    connectOrCreate?: studentCreateOrConnectWithoutGroupMembersInput
    upsert?: studentUpsertWithoutGroupMembersInput
    connect?: studentWhereUniqueInput
    update?: XOR<XOR<studentUpdateToOneWithWhereWithoutGroupMembersInput, studentUpdateWithoutGroupMembersInput>, studentUncheckedUpdateWithoutGroupMembersInput>
  }

  export type group_member_permissionUpdateManyWithoutGroupMembersNestedInput = {
    create?: XOR<group_member_permissionCreateWithoutGroupMembersInput, group_member_permissionUncheckedCreateWithoutGroupMembersInput> | group_member_permissionCreateWithoutGroupMembersInput[] | group_member_permissionUncheckedCreateWithoutGroupMembersInput[]
    connectOrCreate?: group_member_permissionCreateOrConnectWithoutGroupMembersInput | group_member_permissionCreateOrConnectWithoutGroupMembersInput[]
    upsert?: group_member_permissionUpsertWithWhereUniqueWithoutGroupMembersInput | group_member_permissionUpsertWithWhereUniqueWithoutGroupMembersInput[]
    createMany?: group_member_permissionCreateManyGroupMembersInputEnvelope
    set?: group_member_permissionWhereUniqueInput | group_member_permissionWhereUniqueInput[]
    disconnect?: group_member_permissionWhereUniqueInput | group_member_permissionWhereUniqueInput[]
    delete?: group_member_permissionWhereUniqueInput | group_member_permissionWhereUniqueInput[]
    connect?: group_member_permissionWhereUniqueInput | group_member_permissionWhereUniqueInput[]
    update?: group_member_permissionUpdateWithWhereUniqueWithoutGroupMembersInput | group_member_permissionUpdateWithWhereUniqueWithoutGroupMembersInput[]
    updateMany?: group_member_permissionUpdateManyWithWhereWithoutGroupMembersInput | group_member_permissionUpdateManyWithWhereWithoutGroupMembersInput[]
    deleteMany?: group_member_permissionScalarWhereInput | group_member_permissionScalarWhereInput[]
  }

  export type group_member_permissionUncheckedUpdateManyWithoutGroupMembersNestedInput = {
    create?: XOR<group_member_permissionCreateWithoutGroupMembersInput, group_member_permissionUncheckedCreateWithoutGroupMembersInput> | group_member_permissionCreateWithoutGroupMembersInput[] | group_member_permissionUncheckedCreateWithoutGroupMembersInput[]
    connectOrCreate?: group_member_permissionCreateOrConnectWithoutGroupMembersInput | group_member_permissionCreateOrConnectWithoutGroupMembersInput[]
    upsert?: group_member_permissionUpsertWithWhereUniqueWithoutGroupMembersInput | group_member_permissionUpsertWithWhereUniqueWithoutGroupMembersInput[]
    createMany?: group_member_permissionCreateManyGroupMembersInputEnvelope
    set?: group_member_permissionWhereUniqueInput | group_member_permissionWhereUniqueInput[]
    disconnect?: group_member_permissionWhereUniqueInput | group_member_permissionWhereUniqueInput[]
    delete?: group_member_permissionWhereUniqueInput | group_member_permissionWhereUniqueInput[]
    connect?: group_member_permissionWhereUniqueInput | group_member_permissionWhereUniqueInput[]
    update?: group_member_permissionUpdateWithWhereUniqueWithoutGroupMembersInput | group_member_permissionUpdateWithWhereUniqueWithoutGroupMembersInput[]
    updateMany?: group_member_permissionUpdateManyWithWhereWithoutGroupMembersInput | group_member_permissionUpdateManyWithWhereWithoutGroupMembersInput[]
    deleteMany?: group_member_permissionScalarWhereInput | group_member_permissionScalarWhereInput[]
  }

  export type groupMembersCreateNestedOneWithoutGroup_member_permissionInput = {
    create?: XOR<groupMembersCreateWithoutGroup_member_permissionInput, groupMembersUncheckedCreateWithoutGroup_member_permissionInput>
    connectOrCreate?: groupMembersCreateOrConnectWithoutGroup_member_permissionInput
    connect?: groupMembersWhereUniqueInput
  }

  export type groupMembersUpdateOneRequiredWithoutGroup_member_permissionNestedInput = {
    create?: XOR<groupMembersCreateWithoutGroup_member_permissionInput, groupMembersUncheckedCreateWithoutGroup_member_permissionInput>
    connectOrCreate?: groupMembersCreateOrConnectWithoutGroup_member_permissionInput
    upsert?: groupMembersUpsertWithoutGroup_member_permissionInput
    connect?: groupMembersWhereUniqueInput
    update?: XOR<XOR<groupMembersUpdateToOneWithWhereWithoutGroup_member_permissionInput, groupMembersUpdateWithoutGroup_member_permissionInput>, groupMembersUncheckedUpdateWithoutGroup_member_permissionInput>
  }

  export type groupsCreateNestedOneWithoutSystem_group_permissionInput = {
    create?: XOR<groupsCreateWithoutSystem_group_permissionInput, groupsUncheckedCreateWithoutSystem_group_permissionInput>
    connectOrCreate?: groupsCreateOrConnectWithoutSystem_group_permissionInput
    connect?: groupsWhereUniqueInput
  }

  export type groupsUpdateOneRequiredWithoutSystem_group_permissionNestedInput = {
    create?: XOR<groupsCreateWithoutSystem_group_permissionInput, groupsUncheckedCreateWithoutSystem_group_permissionInput>
    connectOrCreate?: groupsCreateOrConnectWithoutSystem_group_permissionInput
    upsert?: groupsUpsertWithoutSystem_group_permissionInput
    connect?: groupsWhereUniqueInput
    update?: XOR<XOR<groupsUpdateToOneWithWhereWithoutSystem_group_permissionInput, groupsUpdateWithoutSystem_group_permissionInput>, groupsUncheckedUpdateWithoutSystem_group_permissionInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumstudent_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.student_role | Enumstudent_roleFieldRefInput<$PrismaModel>
    in?: $Enums.student_role[]
    notIn?: $Enums.student_role[]
    not?: NestedEnumstudent_roleFilter<$PrismaModel> | $Enums.student_role
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumstudent_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.student_role | Enumstudent_roleFieldRefInput<$PrismaModel>
    in?: $Enums.student_role[]
    notIn?: $Enums.student_role[]
    not?: NestedEnumstudent_roleWithAggregatesFilter<$PrismaModel> | $Enums.student_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstudent_roleFilter<$PrismaModel>
    _max?: NestedEnumstudent_roleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
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

  export type NestedEnummessage_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.message_type | Enummessage_typeFieldRefInput<$PrismaModel>
    in?: $Enums.message_type[]
    notIn?: $Enums.message_type[]
    not?: NestedEnummessage_typeFilter<$PrismaModel> | $Enums.message_type
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnummessage_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.message_type | Enummessage_typeFieldRefInput<$PrismaModel>
    in?: $Enums.message_type[]
    notIn?: $Enums.message_type[]
    not?: NestedEnummessage_typeWithAggregatesFilter<$PrismaModel> | $Enums.message_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnummessage_typeFilter<$PrismaModel>
    _max?: NestedEnummessage_typeFilter<$PrismaModel>
  }

  export type NestedEnumgroups_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.groups_type | Enumgroups_typeFieldRefInput<$PrismaModel>
    in?: $Enums.groups_type[]
    notIn?: $Enums.groups_type[]
    not?: NestedEnumgroups_typeFilter<$PrismaModel> | $Enums.groups_type
  }

  export type NestedEnumgroups_visibilityFilter<$PrismaModel = never> = {
    equals?: $Enums.groups_visibility | Enumgroups_visibilityFieldRefInput<$PrismaModel>
    in?: $Enums.groups_visibility[]
    notIn?: $Enums.groups_visibility[]
    not?: NestedEnumgroups_visibilityFilter<$PrismaModel> | $Enums.groups_visibility
  }

  export type NestedEnumgroups_validationFilter<$PrismaModel = never> = {
    equals?: $Enums.groups_validation | Enumgroups_validationFieldRefInput<$PrismaModel>
    in?: $Enums.groups_validation[]
    notIn?: $Enums.groups_validation[]
    not?: NestedEnumgroups_validationFilter<$PrismaModel> | $Enums.groups_validation
  }

  export type NestedEnumgroups_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.groups_type | Enumgroups_typeFieldRefInput<$PrismaModel>
    in?: $Enums.groups_type[]
    notIn?: $Enums.groups_type[]
    not?: NestedEnumgroups_typeWithAggregatesFilter<$PrismaModel> | $Enums.groups_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumgroups_typeFilter<$PrismaModel>
    _max?: NestedEnumgroups_typeFilter<$PrismaModel>
  }

  export type NestedEnumgroups_visibilityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.groups_visibility | Enumgroups_visibilityFieldRefInput<$PrismaModel>
    in?: $Enums.groups_visibility[]
    notIn?: $Enums.groups_visibility[]
    not?: NestedEnumgroups_visibilityWithAggregatesFilter<$PrismaModel> | $Enums.groups_visibility
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumgroups_visibilityFilter<$PrismaModel>
    _max?: NestedEnumgroups_visibilityFilter<$PrismaModel>
  }

  export type NestedEnumgroups_validationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.groups_validation | Enumgroups_validationFieldRefInput<$PrismaModel>
    in?: $Enums.groups_validation[]
    notIn?: $Enums.groups_validation[]
    not?: NestedEnumgroups_validationWithAggregatesFilter<$PrismaModel> | $Enums.groups_validation
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumgroups_validationFilter<$PrismaModel>
    _max?: NestedEnumgroups_validationFilter<$PrismaModel>
  }

  export type NestedEnumnotification_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.notification_type | Enumnotification_typeFieldRefInput<$PrismaModel>
    in?: $Enums.notification_type[]
    notIn?: $Enums.notification_type[]
    not?: NestedEnumnotification_typeFilter<$PrismaModel> | $Enums.notification_type
  }

  export type NestedEnumnotification_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.notification_type | Enumnotification_typeFieldRefInput<$PrismaModel>
    in?: $Enums.notification_type[]
    notIn?: $Enums.notification_type[]
    not?: NestedEnumnotification_typeWithAggregatesFilter<$PrismaModel> | $Enums.notification_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumnotification_typeFilter<$PrismaModel>
    _max?: NestedEnumnotification_typeFilter<$PrismaModel>
  }

  export type NestedEnumresources_validationFilter<$PrismaModel = never> = {
    equals?: $Enums.resources_validation | Enumresources_validationFieldRefInput<$PrismaModel>
    in?: $Enums.resources_validation[]
    notIn?: $Enums.resources_validation[]
    not?: NestedEnumresources_validationFilter<$PrismaModel> | $Enums.resources_validation
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumresources_validationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.resources_validation | Enumresources_validationFieldRefInput<$PrismaModel>
    in?: $Enums.resources_validation[]
    notIn?: $Enums.resources_validation[]
    not?: NestedEnumresources_validationWithAggregatesFilter<$PrismaModel> | $Enums.resources_validation
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumresources_validationFilter<$PrismaModel>
    _max?: NestedEnumresources_validationFilter<$PrismaModel>
  }

  export type NestedEnumgroupMembers_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.groupMembers_role | EnumgroupMembers_roleFieldRefInput<$PrismaModel>
    in?: $Enums.groupMembers_role[]
    notIn?: $Enums.groupMembers_role[]
    not?: NestedEnumgroupMembers_roleFilter<$PrismaModel> | $Enums.groupMembers_role
  }

  export type NestedEnumgroupMembers_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.groupMembers_status | EnumgroupMembers_statusFieldRefInput<$PrismaModel>
    in?: $Enums.groupMembers_status[]
    notIn?: $Enums.groupMembers_status[]
    not?: NestedEnumgroupMembers_statusFilter<$PrismaModel> | $Enums.groupMembers_status
  }

  export type NestedEnumgroupMembers_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.groupMembers_role | EnumgroupMembers_roleFieldRefInput<$PrismaModel>
    in?: $Enums.groupMembers_role[]
    notIn?: $Enums.groupMembers_role[]
    not?: NestedEnumgroupMembers_roleWithAggregatesFilter<$PrismaModel> | $Enums.groupMembers_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumgroupMembers_roleFilter<$PrismaModel>
    _max?: NestedEnumgroupMembers_roleFilter<$PrismaModel>
  }

  export type NestedEnumgroupMembers_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.groupMembers_status | EnumgroupMembers_statusFieldRefInput<$PrismaModel>
    in?: $Enums.groupMembers_status[]
    notIn?: $Enums.groupMembers_status[]
    not?: NestedEnumgroupMembers_statusWithAggregatesFilter<$PrismaModel> | $Enums.groupMembers_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumgroupMembers_statusFilter<$PrismaModel>
    _max?: NestedEnumgroupMembers_statusFilter<$PrismaModel>
  }

  export type groupMembersCreateWithoutStudentInput = {
    role?: $Enums.groupMembers_role
    status?: $Enums.groupMembers_status
    date_adhesion?: Date | string | null
    groups: groupsCreateNestedOneWithoutGroupMembersInput
    group_member_permission?: group_member_permissionCreateNestedManyWithoutGroupMembersInput
  }

  export type groupMembersUncheckedCreateWithoutStudentInput = {
    id?: number
    role?: $Enums.groupMembers_role
    status?: $Enums.groupMembers_status
    date_adhesion?: Date | string | null
    groupId: number
    group_member_permission?: group_member_permissionUncheckedCreateNestedManyWithoutGroupMembersInput
  }

  export type groupMembersCreateOrConnectWithoutStudentInput = {
    where: groupMembersWhereUniqueInput
    create: XOR<groupMembersCreateWithoutStudentInput, groupMembersUncheckedCreateWithoutStudentInput>
  }

  export type groupMembersCreateManyStudentInputEnvelope = {
    data: groupMembersCreateManyStudentInput | groupMembersCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type messageCreateWithoutReceiverInput = {
    content: string
    isRead?: boolean
    createdAt?: Date | string
    type: $Enums.message_type
    group?: groupsCreateNestedOneWithoutMessagesInput
    resource?: resourcesCreateNestedOneWithoutMessagesInput
    sender: studentCreateNestedOneWithoutSentMessagesInput
  }

  export type messageUncheckedCreateWithoutReceiverInput = {
    id?: number
    content: string
    senderId: number
    groupId?: number | null
    isRead?: boolean
    createdAt?: Date | string
    type: $Enums.message_type
    resourceId?: number | null
  }

  export type messageCreateOrConnectWithoutReceiverInput = {
    where: messageWhereUniqueInput
    create: XOR<messageCreateWithoutReceiverInput, messageUncheckedCreateWithoutReceiverInput>
  }

  export type messageCreateManyReceiverInputEnvelope = {
    data: messageCreateManyReceiverInput | messageCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type messageCreateWithoutSenderInput = {
    content: string
    isRead?: boolean
    createdAt?: Date | string
    type: $Enums.message_type
    group?: groupsCreateNestedOneWithoutMessagesInput
    receiver?: studentCreateNestedOneWithoutReceivedMessagesInput
    resource?: resourcesCreateNestedOneWithoutMessagesInput
  }

  export type messageUncheckedCreateWithoutSenderInput = {
    id?: number
    content: string
    receiverId?: number | null
    groupId?: number | null
    isRead?: boolean
    createdAt?: Date | string
    type: $Enums.message_type
    resourceId?: number | null
  }

  export type messageCreateOrConnectWithoutSenderInput = {
    where: messageWhereUniqueInput
    create: XOR<messageCreateWithoutSenderInput, messageUncheckedCreateWithoutSenderInput>
  }

  export type messageCreateManySenderInputEnvelope = {
    data: messageCreateManySenderInput | messageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type profileCreateWithoutStudentInput = {
    image?: string | null
    bio?: string | null
  }

  export type profileUncheckedCreateWithoutStudentInput = {
    id?: number
    image?: string | null
    bio?: string | null
  }

  export type profileCreateOrConnectWithoutStudentInput = {
    where: profileWhereUniqueInput
    create: XOR<profileCreateWithoutStudentInput, profileUncheckedCreateWithoutStudentInput>
  }

  export type resourcesCreateWithoutStudentInput = {
    name: string
    filepath: string
    size: number
    validation?: $Enums.resources_validation
    uploadedAt?: Date | string
    fileType?: string | null
    mimeType?: string | null
    messages?: messageCreateNestedManyWithoutResourceInput
    group?: groupsCreateNestedOneWithoutResourcesInput
  }

  export type resourcesUncheckedCreateWithoutStudentInput = {
    id?: number
    name: string
    filepath: string
    size: number
    validation?: $Enums.resources_validation
    groupId?: number | null
    uploadedAt?: Date | string
    fileType?: string | null
    mimeType?: string | null
    messages?: messageUncheckedCreateNestedManyWithoutResourceInput
  }

  export type resourcesCreateOrConnectWithoutStudentInput = {
    where: resourcesWhereUniqueInput
    create: XOR<resourcesCreateWithoutStudentInput, resourcesUncheckedCreateWithoutStudentInput>
  }

  export type resourcesCreateManyStudentInputEnvelope = {
    data: resourcesCreateManyStudentInput | resourcesCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type groupMembersUpsertWithWhereUniqueWithoutStudentInput = {
    where: groupMembersWhereUniqueInput
    update: XOR<groupMembersUpdateWithoutStudentInput, groupMembersUncheckedUpdateWithoutStudentInput>
    create: XOR<groupMembersCreateWithoutStudentInput, groupMembersUncheckedCreateWithoutStudentInput>
  }

  export type groupMembersUpdateWithWhereUniqueWithoutStudentInput = {
    where: groupMembersWhereUniqueInput
    data: XOR<groupMembersUpdateWithoutStudentInput, groupMembersUncheckedUpdateWithoutStudentInput>
  }

  export type groupMembersUpdateManyWithWhereWithoutStudentInput = {
    where: groupMembersScalarWhereInput
    data: XOR<groupMembersUpdateManyMutationInput, groupMembersUncheckedUpdateManyWithoutStudentInput>
  }

  export type groupMembersScalarWhereInput = {
    AND?: groupMembersScalarWhereInput | groupMembersScalarWhereInput[]
    OR?: groupMembersScalarWhereInput[]
    NOT?: groupMembersScalarWhereInput | groupMembersScalarWhereInput[]
    id?: IntFilter<"groupMembers"> | number
    role?: EnumgroupMembers_roleFilter<"groupMembers"> | $Enums.groupMembers_role
    status?: EnumgroupMembers_statusFilter<"groupMembers"> | $Enums.groupMembers_status
    date_adhesion?: DateTimeNullableFilter<"groupMembers"> | Date | string | null
    studentId?: IntFilter<"groupMembers"> | number
    groupId?: IntFilter<"groupMembers"> | number
  }

  export type messageUpsertWithWhereUniqueWithoutReceiverInput = {
    where: messageWhereUniqueInput
    update: XOR<messageUpdateWithoutReceiverInput, messageUncheckedUpdateWithoutReceiverInput>
    create: XOR<messageCreateWithoutReceiverInput, messageUncheckedCreateWithoutReceiverInput>
  }

  export type messageUpdateWithWhereUniqueWithoutReceiverInput = {
    where: messageWhereUniqueInput
    data: XOR<messageUpdateWithoutReceiverInput, messageUncheckedUpdateWithoutReceiverInput>
  }

  export type messageUpdateManyWithWhereWithoutReceiverInput = {
    where: messageScalarWhereInput
    data: XOR<messageUpdateManyMutationInput, messageUncheckedUpdateManyWithoutReceiverInput>
  }

  export type messageScalarWhereInput = {
    AND?: messageScalarWhereInput | messageScalarWhereInput[]
    OR?: messageScalarWhereInput[]
    NOT?: messageScalarWhereInput | messageScalarWhereInput[]
    id?: IntFilter<"message"> | number
    content?: StringFilter<"message"> | string
    senderId?: IntFilter<"message"> | number
    receiverId?: IntNullableFilter<"message"> | number | null
    groupId?: IntNullableFilter<"message"> | number | null
    isRead?: BoolFilter<"message"> | boolean
    createdAt?: DateTimeFilter<"message"> | Date | string
    type?: Enummessage_typeFilter<"message"> | $Enums.message_type
    resourceId?: IntNullableFilter<"message"> | number | null
  }

  export type messageUpsertWithWhereUniqueWithoutSenderInput = {
    where: messageWhereUniqueInput
    update: XOR<messageUpdateWithoutSenderInput, messageUncheckedUpdateWithoutSenderInput>
    create: XOR<messageCreateWithoutSenderInput, messageUncheckedCreateWithoutSenderInput>
  }

  export type messageUpdateWithWhereUniqueWithoutSenderInput = {
    where: messageWhereUniqueInput
    data: XOR<messageUpdateWithoutSenderInput, messageUncheckedUpdateWithoutSenderInput>
  }

  export type messageUpdateManyWithWhereWithoutSenderInput = {
    where: messageScalarWhereInput
    data: XOR<messageUpdateManyMutationInput, messageUncheckedUpdateManyWithoutSenderInput>
  }

  export type profileUpsertWithoutStudentInput = {
    update: XOR<profileUpdateWithoutStudentInput, profileUncheckedUpdateWithoutStudentInput>
    create: XOR<profileCreateWithoutStudentInput, profileUncheckedCreateWithoutStudentInput>
    where?: profileWhereInput
  }

  export type profileUpdateToOneWithWhereWithoutStudentInput = {
    where?: profileWhereInput
    data: XOR<profileUpdateWithoutStudentInput, profileUncheckedUpdateWithoutStudentInput>
  }

  export type profileUpdateWithoutStudentInput = {
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type profileUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type resourcesUpsertWithWhereUniqueWithoutStudentInput = {
    where: resourcesWhereUniqueInput
    update: XOR<resourcesUpdateWithoutStudentInput, resourcesUncheckedUpdateWithoutStudentInput>
    create: XOR<resourcesCreateWithoutStudentInput, resourcesUncheckedCreateWithoutStudentInput>
  }

  export type resourcesUpdateWithWhereUniqueWithoutStudentInput = {
    where: resourcesWhereUniqueInput
    data: XOR<resourcesUpdateWithoutStudentInput, resourcesUncheckedUpdateWithoutStudentInput>
  }

  export type resourcesUpdateManyWithWhereWithoutStudentInput = {
    where: resourcesScalarWhereInput
    data: XOR<resourcesUpdateManyMutationInput, resourcesUncheckedUpdateManyWithoutStudentInput>
  }

  export type resourcesScalarWhereInput = {
    AND?: resourcesScalarWhereInput | resourcesScalarWhereInput[]
    OR?: resourcesScalarWhereInput[]
    NOT?: resourcesScalarWhereInput | resourcesScalarWhereInput[]
    id?: IntFilter<"resources"> | number
    name?: StringFilter<"resources"> | string
    filepath?: StringFilter<"resources"> | string
    size?: FloatFilter<"resources"> | number
    studentId?: IntFilter<"resources"> | number
    validation?: Enumresources_validationFilter<"resources"> | $Enums.resources_validation
    groupId?: IntNullableFilter<"resources"> | number | null
    uploadedAt?: DateTimeFilter<"resources"> | Date | string
    fileType?: StringNullableFilter<"resources"> | string | null
    mimeType?: StringNullableFilter<"resources"> | string | null
  }

  export type studentCreateWithoutProfileInput = {
    Mat: number
    name: string
    email: string
    role?: $Enums.student_role
    password: string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groupMembers?: groupMembersCreateNestedManyWithoutStudentInput
    receivedMessages?: messageCreateNestedManyWithoutReceiverInput
    sentMessages?: messageCreateNestedManyWithoutSenderInput
    resources?: resourcesCreateNestedManyWithoutStudentInput
  }

  export type studentUncheckedCreateWithoutProfileInput = {
    Mat: number
    name: string
    email: string
    role?: $Enums.student_role
    password: string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groupMembers?: groupMembersUncheckedCreateNestedManyWithoutStudentInput
    receivedMessages?: messageUncheckedCreateNestedManyWithoutReceiverInput
    sentMessages?: messageUncheckedCreateNestedManyWithoutSenderInput
    resources?: resourcesUncheckedCreateNestedManyWithoutStudentInput
  }

  export type studentCreateOrConnectWithoutProfileInput = {
    where: studentWhereUniqueInput
    create: XOR<studentCreateWithoutProfileInput, studentUncheckedCreateWithoutProfileInput>
  }

  export type studentUpsertWithoutProfileInput = {
    update: XOR<studentUpdateWithoutProfileInput, studentUncheckedUpdateWithoutProfileInput>
    create: XOR<studentCreateWithoutProfileInput, studentUncheckedCreateWithoutProfileInput>
    where?: studentWhereInput
  }

  export type studentUpdateToOneWithWhereWithoutProfileInput = {
    where?: studentWhereInput
    data: XOR<studentUpdateWithoutProfileInput, studentUncheckedUpdateWithoutProfileInput>
  }

  export type studentUpdateWithoutProfileInput = {
    Mat?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumstudent_roleFieldUpdateOperationsInput | $Enums.student_role
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupMembers?: groupMembersUpdateManyWithoutStudentNestedInput
    receivedMessages?: messageUpdateManyWithoutReceiverNestedInput
    sentMessages?: messageUpdateManyWithoutSenderNestedInput
    resources?: resourcesUpdateManyWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateWithoutProfileInput = {
    Mat?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumstudent_roleFieldUpdateOperationsInput | $Enums.student_role
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupMembers?: groupMembersUncheckedUpdateManyWithoutStudentNestedInput
    receivedMessages?: messageUncheckedUpdateManyWithoutReceiverNestedInput
    sentMessages?: messageUncheckedUpdateManyWithoutSenderNestedInput
    resources?: resourcesUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type groupsCreateWithoutMessagesInput = {
    type: $Enums.groups_type
    visibility: $Enums.groups_visibility
    name: string
    description: string
    validation?: $Enums.groups_validation
    createdAt?: Date | string
    groupMembers?: groupMembersCreateNestedManyWithoutGroupsInput
    notifications?: notificationCreateNestedManyWithoutGroupInput
    resources?: resourcesCreateNestedManyWithoutGroupInput
    system_group_permission?: system_group_permissionCreateNestedOneWithoutGroupsInput
  }

  export type groupsUncheckedCreateWithoutMessagesInput = {
    id?: number
    type: $Enums.groups_type
    visibility: $Enums.groups_visibility
    name: string
    description: string
    validation?: $Enums.groups_validation
    createdAt?: Date | string
    groupMembers?: groupMembersUncheckedCreateNestedManyWithoutGroupsInput
    notifications?: notificationUncheckedCreateNestedManyWithoutGroupInput
    resources?: resourcesUncheckedCreateNestedManyWithoutGroupInput
    system_group_permission?: system_group_permissionUncheckedCreateNestedOneWithoutGroupsInput
  }

  export type groupsCreateOrConnectWithoutMessagesInput = {
    where: groupsWhereUniqueInput
    create: XOR<groupsCreateWithoutMessagesInput, groupsUncheckedCreateWithoutMessagesInput>
  }

  export type studentCreateWithoutReceivedMessagesInput = {
    Mat: number
    name: string
    email: string
    role?: $Enums.student_role
    password: string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groupMembers?: groupMembersCreateNestedManyWithoutStudentInput
    sentMessages?: messageCreateNestedManyWithoutSenderInput
    profile?: profileCreateNestedOneWithoutStudentInput
    resources?: resourcesCreateNestedManyWithoutStudentInput
  }

  export type studentUncheckedCreateWithoutReceivedMessagesInput = {
    Mat: number
    name: string
    email: string
    role?: $Enums.student_role
    password: string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groupMembers?: groupMembersUncheckedCreateNestedManyWithoutStudentInput
    sentMessages?: messageUncheckedCreateNestedManyWithoutSenderInput
    profile?: profileUncheckedCreateNestedOneWithoutStudentInput
    resources?: resourcesUncheckedCreateNestedManyWithoutStudentInput
  }

  export type studentCreateOrConnectWithoutReceivedMessagesInput = {
    where: studentWhereUniqueInput
    create: XOR<studentCreateWithoutReceivedMessagesInput, studentUncheckedCreateWithoutReceivedMessagesInput>
  }

  export type resourcesCreateWithoutMessagesInput = {
    name: string
    filepath: string
    size: number
    validation?: $Enums.resources_validation
    uploadedAt?: Date | string
    fileType?: string | null
    mimeType?: string | null
    group?: groupsCreateNestedOneWithoutResourcesInput
    student: studentCreateNestedOneWithoutResourcesInput
  }

  export type resourcesUncheckedCreateWithoutMessagesInput = {
    id?: number
    name: string
    filepath: string
    size: number
    studentId: number
    validation?: $Enums.resources_validation
    groupId?: number | null
    uploadedAt?: Date | string
    fileType?: string | null
    mimeType?: string | null
  }

  export type resourcesCreateOrConnectWithoutMessagesInput = {
    where: resourcesWhereUniqueInput
    create: XOR<resourcesCreateWithoutMessagesInput, resourcesUncheckedCreateWithoutMessagesInput>
  }

  export type studentCreateWithoutSentMessagesInput = {
    Mat: number
    name: string
    email: string
    role?: $Enums.student_role
    password: string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groupMembers?: groupMembersCreateNestedManyWithoutStudentInput
    receivedMessages?: messageCreateNestedManyWithoutReceiverInput
    profile?: profileCreateNestedOneWithoutStudentInput
    resources?: resourcesCreateNestedManyWithoutStudentInput
  }

  export type studentUncheckedCreateWithoutSentMessagesInput = {
    Mat: number
    name: string
    email: string
    role?: $Enums.student_role
    password: string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groupMembers?: groupMembersUncheckedCreateNestedManyWithoutStudentInput
    receivedMessages?: messageUncheckedCreateNestedManyWithoutReceiverInput
    profile?: profileUncheckedCreateNestedOneWithoutStudentInput
    resources?: resourcesUncheckedCreateNestedManyWithoutStudentInput
  }

  export type studentCreateOrConnectWithoutSentMessagesInput = {
    where: studentWhereUniqueInput
    create: XOR<studentCreateWithoutSentMessagesInput, studentUncheckedCreateWithoutSentMessagesInput>
  }

  export type groupsUpsertWithoutMessagesInput = {
    update: XOR<groupsUpdateWithoutMessagesInput, groupsUncheckedUpdateWithoutMessagesInput>
    create: XOR<groupsCreateWithoutMessagesInput, groupsUncheckedCreateWithoutMessagesInput>
    where?: groupsWhereInput
  }

  export type groupsUpdateToOneWithWhereWithoutMessagesInput = {
    where?: groupsWhereInput
    data: XOR<groupsUpdateWithoutMessagesInput, groupsUncheckedUpdateWithoutMessagesInput>
  }

  export type groupsUpdateWithoutMessagesInput = {
    type?: Enumgroups_typeFieldUpdateOperationsInput | $Enums.groups_type
    visibility?: Enumgroups_visibilityFieldUpdateOperationsInput | $Enums.groups_visibility
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    validation?: Enumgroups_validationFieldUpdateOperationsInput | $Enums.groups_validation
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupMembers?: groupMembersUpdateManyWithoutGroupsNestedInput
    notifications?: notificationUpdateManyWithoutGroupNestedInput
    resources?: resourcesUpdateManyWithoutGroupNestedInput
    system_group_permission?: system_group_permissionUpdateOneWithoutGroupsNestedInput
  }

  export type groupsUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: Enumgroups_typeFieldUpdateOperationsInput | $Enums.groups_type
    visibility?: Enumgroups_visibilityFieldUpdateOperationsInput | $Enums.groups_visibility
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    validation?: Enumgroups_validationFieldUpdateOperationsInput | $Enums.groups_validation
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupMembers?: groupMembersUncheckedUpdateManyWithoutGroupsNestedInput
    notifications?: notificationUncheckedUpdateManyWithoutGroupNestedInput
    resources?: resourcesUncheckedUpdateManyWithoutGroupNestedInput
    system_group_permission?: system_group_permissionUncheckedUpdateOneWithoutGroupsNestedInput
  }

  export type studentUpsertWithoutReceivedMessagesInput = {
    update: XOR<studentUpdateWithoutReceivedMessagesInput, studentUncheckedUpdateWithoutReceivedMessagesInput>
    create: XOR<studentCreateWithoutReceivedMessagesInput, studentUncheckedCreateWithoutReceivedMessagesInput>
    where?: studentWhereInput
  }

  export type studentUpdateToOneWithWhereWithoutReceivedMessagesInput = {
    where?: studentWhereInput
    data: XOR<studentUpdateWithoutReceivedMessagesInput, studentUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type studentUpdateWithoutReceivedMessagesInput = {
    Mat?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumstudent_roleFieldUpdateOperationsInput | $Enums.student_role
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupMembers?: groupMembersUpdateManyWithoutStudentNestedInput
    sentMessages?: messageUpdateManyWithoutSenderNestedInput
    profile?: profileUpdateOneWithoutStudentNestedInput
    resources?: resourcesUpdateManyWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateWithoutReceivedMessagesInput = {
    Mat?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumstudent_roleFieldUpdateOperationsInput | $Enums.student_role
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupMembers?: groupMembersUncheckedUpdateManyWithoutStudentNestedInput
    sentMessages?: messageUncheckedUpdateManyWithoutSenderNestedInput
    profile?: profileUncheckedUpdateOneWithoutStudentNestedInput
    resources?: resourcesUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type resourcesUpsertWithoutMessagesInput = {
    update: XOR<resourcesUpdateWithoutMessagesInput, resourcesUncheckedUpdateWithoutMessagesInput>
    create: XOR<resourcesCreateWithoutMessagesInput, resourcesUncheckedCreateWithoutMessagesInput>
    where?: resourcesWhereInput
  }

  export type resourcesUpdateToOneWithWhereWithoutMessagesInput = {
    where?: resourcesWhereInput
    data: XOR<resourcesUpdateWithoutMessagesInput, resourcesUncheckedUpdateWithoutMessagesInput>
  }

  export type resourcesUpdateWithoutMessagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    filepath?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    validation?: Enumresources_validationFieldUpdateOperationsInput | $Enums.resources_validation
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    group?: groupsUpdateOneWithoutResourcesNestedInput
    student?: studentUpdateOneRequiredWithoutResourcesNestedInput
  }

  export type resourcesUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    filepath?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    validation?: Enumresources_validationFieldUpdateOperationsInput | $Enums.resources_validation
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type studentUpsertWithoutSentMessagesInput = {
    update: XOR<studentUpdateWithoutSentMessagesInput, studentUncheckedUpdateWithoutSentMessagesInput>
    create: XOR<studentCreateWithoutSentMessagesInput, studentUncheckedCreateWithoutSentMessagesInput>
    where?: studentWhereInput
  }

  export type studentUpdateToOneWithWhereWithoutSentMessagesInput = {
    where?: studentWhereInput
    data: XOR<studentUpdateWithoutSentMessagesInput, studentUncheckedUpdateWithoutSentMessagesInput>
  }

  export type studentUpdateWithoutSentMessagesInput = {
    Mat?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumstudent_roleFieldUpdateOperationsInput | $Enums.student_role
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupMembers?: groupMembersUpdateManyWithoutStudentNestedInput
    receivedMessages?: messageUpdateManyWithoutReceiverNestedInput
    profile?: profileUpdateOneWithoutStudentNestedInput
    resources?: resourcesUpdateManyWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateWithoutSentMessagesInput = {
    Mat?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumstudent_roleFieldUpdateOperationsInput | $Enums.student_role
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupMembers?: groupMembersUncheckedUpdateManyWithoutStudentNestedInput
    receivedMessages?: messageUncheckedUpdateManyWithoutReceiverNestedInput
    profile?: profileUncheckedUpdateOneWithoutStudentNestedInput
    resources?: resourcesUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type groupMembersCreateWithoutGroupsInput = {
    role?: $Enums.groupMembers_role
    status?: $Enums.groupMembers_status
    date_adhesion?: Date | string | null
    student: studentCreateNestedOneWithoutGroupMembersInput
    group_member_permission?: group_member_permissionCreateNestedManyWithoutGroupMembersInput
  }

  export type groupMembersUncheckedCreateWithoutGroupsInput = {
    id?: number
    role?: $Enums.groupMembers_role
    status?: $Enums.groupMembers_status
    date_adhesion?: Date | string | null
    studentId: number
    group_member_permission?: group_member_permissionUncheckedCreateNestedManyWithoutGroupMembersInput
  }

  export type groupMembersCreateOrConnectWithoutGroupsInput = {
    where: groupMembersWhereUniqueInput
    create: XOR<groupMembersCreateWithoutGroupsInput, groupMembersUncheckedCreateWithoutGroupsInput>
  }

  export type groupMembersCreateManyGroupsInputEnvelope = {
    data: groupMembersCreateManyGroupsInput | groupMembersCreateManyGroupsInput[]
    skipDuplicates?: boolean
  }

  export type messageCreateWithoutGroupInput = {
    content: string
    isRead?: boolean
    createdAt?: Date | string
    type: $Enums.message_type
    receiver?: studentCreateNestedOneWithoutReceivedMessagesInput
    resource?: resourcesCreateNestedOneWithoutMessagesInput
    sender: studentCreateNestedOneWithoutSentMessagesInput
  }

  export type messageUncheckedCreateWithoutGroupInput = {
    id?: number
    content: string
    senderId: number
    receiverId?: number | null
    isRead?: boolean
    createdAt?: Date | string
    type: $Enums.message_type
    resourceId?: number | null
  }

  export type messageCreateOrConnectWithoutGroupInput = {
    where: messageWhereUniqueInput
    create: XOR<messageCreateWithoutGroupInput, messageUncheckedCreateWithoutGroupInput>
  }

  export type messageCreateManyGroupInputEnvelope = {
    data: messageCreateManyGroupInput | messageCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type notificationCreateWithoutGroupInput = {
    titre?: string
    content: string
    studentId: number
    type?: $Enums.notification_type
    isRead?: boolean
    sentAt?: Date | string
  }

  export type notificationUncheckedCreateWithoutGroupInput = {
    id?: number
    titre?: string
    content: string
    studentId: number
    type?: $Enums.notification_type
    isRead?: boolean
    sentAt?: Date | string
  }

  export type notificationCreateOrConnectWithoutGroupInput = {
    where: notificationWhereUniqueInput
    create: XOR<notificationCreateWithoutGroupInput, notificationUncheckedCreateWithoutGroupInput>
  }

  export type notificationCreateManyGroupInputEnvelope = {
    data: notificationCreateManyGroupInput | notificationCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type resourcesCreateWithoutGroupInput = {
    name: string
    filepath: string
    size: number
    validation?: $Enums.resources_validation
    uploadedAt?: Date | string
    fileType?: string | null
    mimeType?: string | null
    messages?: messageCreateNestedManyWithoutResourceInput
    student: studentCreateNestedOneWithoutResourcesInput
  }

  export type resourcesUncheckedCreateWithoutGroupInput = {
    id?: number
    name: string
    filepath: string
    size: number
    studentId: number
    validation?: $Enums.resources_validation
    uploadedAt?: Date | string
    fileType?: string | null
    mimeType?: string | null
    messages?: messageUncheckedCreateNestedManyWithoutResourceInput
  }

  export type resourcesCreateOrConnectWithoutGroupInput = {
    where: resourcesWhereUniqueInput
    create: XOR<resourcesCreateWithoutGroupInput, resourcesUncheckedCreateWithoutGroupInput>
  }

  export type resourcesCreateManyGroupInputEnvelope = {
    data: resourcesCreateManyGroupInput | resourcesCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type system_group_permissionCreateWithoutGroupsInput = {
    maxMember?: number
    allowFileSharing?: boolean
    allowPublicVisibility?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    maxFileSizeMB?: number
    allowMessages?: boolean
    autoAccept?: boolean
  }

  export type system_group_permissionUncheckedCreateWithoutGroupsInput = {
    id?: number
    maxMember?: number
    allowFileSharing?: boolean
    allowPublicVisibility?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    maxFileSizeMB?: number
    allowMessages?: boolean
    autoAccept?: boolean
  }

  export type system_group_permissionCreateOrConnectWithoutGroupsInput = {
    where: system_group_permissionWhereUniqueInput
    create: XOR<system_group_permissionCreateWithoutGroupsInput, system_group_permissionUncheckedCreateWithoutGroupsInput>
  }

  export type groupMembersUpsertWithWhereUniqueWithoutGroupsInput = {
    where: groupMembersWhereUniqueInput
    update: XOR<groupMembersUpdateWithoutGroupsInput, groupMembersUncheckedUpdateWithoutGroupsInput>
    create: XOR<groupMembersCreateWithoutGroupsInput, groupMembersUncheckedCreateWithoutGroupsInput>
  }

  export type groupMembersUpdateWithWhereUniqueWithoutGroupsInput = {
    where: groupMembersWhereUniqueInput
    data: XOR<groupMembersUpdateWithoutGroupsInput, groupMembersUncheckedUpdateWithoutGroupsInput>
  }

  export type groupMembersUpdateManyWithWhereWithoutGroupsInput = {
    where: groupMembersScalarWhereInput
    data: XOR<groupMembersUpdateManyMutationInput, groupMembersUncheckedUpdateManyWithoutGroupsInput>
  }

  export type messageUpsertWithWhereUniqueWithoutGroupInput = {
    where: messageWhereUniqueInput
    update: XOR<messageUpdateWithoutGroupInput, messageUncheckedUpdateWithoutGroupInput>
    create: XOR<messageCreateWithoutGroupInput, messageUncheckedCreateWithoutGroupInput>
  }

  export type messageUpdateWithWhereUniqueWithoutGroupInput = {
    where: messageWhereUniqueInput
    data: XOR<messageUpdateWithoutGroupInput, messageUncheckedUpdateWithoutGroupInput>
  }

  export type messageUpdateManyWithWhereWithoutGroupInput = {
    where: messageScalarWhereInput
    data: XOR<messageUpdateManyMutationInput, messageUncheckedUpdateManyWithoutGroupInput>
  }

  export type notificationUpsertWithWhereUniqueWithoutGroupInput = {
    where: notificationWhereUniqueInput
    update: XOR<notificationUpdateWithoutGroupInput, notificationUncheckedUpdateWithoutGroupInput>
    create: XOR<notificationCreateWithoutGroupInput, notificationUncheckedCreateWithoutGroupInput>
  }

  export type notificationUpdateWithWhereUniqueWithoutGroupInput = {
    where: notificationWhereUniqueInput
    data: XOR<notificationUpdateWithoutGroupInput, notificationUncheckedUpdateWithoutGroupInput>
  }

  export type notificationUpdateManyWithWhereWithoutGroupInput = {
    where: notificationScalarWhereInput
    data: XOR<notificationUpdateManyMutationInput, notificationUncheckedUpdateManyWithoutGroupInput>
  }

  export type notificationScalarWhereInput = {
    AND?: notificationScalarWhereInput | notificationScalarWhereInput[]
    OR?: notificationScalarWhereInput[]
    NOT?: notificationScalarWhereInput | notificationScalarWhereInput[]
    id?: IntFilter<"notification"> | number
    titre?: StringFilter<"notification"> | string
    content?: StringFilter<"notification"> | string
    studentId?: IntFilter<"notification"> | number
    groupId?: IntNullableFilter<"notification"> | number | null
    type?: Enumnotification_typeFilter<"notification"> | $Enums.notification_type
    isRead?: BoolFilter<"notification"> | boolean
    sentAt?: DateTimeFilter<"notification"> | Date | string
  }

  export type resourcesUpsertWithWhereUniqueWithoutGroupInput = {
    where: resourcesWhereUniqueInput
    update: XOR<resourcesUpdateWithoutGroupInput, resourcesUncheckedUpdateWithoutGroupInput>
    create: XOR<resourcesCreateWithoutGroupInput, resourcesUncheckedCreateWithoutGroupInput>
  }

  export type resourcesUpdateWithWhereUniqueWithoutGroupInput = {
    where: resourcesWhereUniqueInput
    data: XOR<resourcesUpdateWithoutGroupInput, resourcesUncheckedUpdateWithoutGroupInput>
  }

  export type resourcesUpdateManyWithWhereWithoutGroupInput = {
    where: resourcesScalarWhereInput
    data: XOR<resourcesUpdateManyMutationInput, resourcesUncheckedUpdateManyWithoutGroupInput>
  }

  export type system_group_permissionUpsertWithoutGroupsInput = {
    update: XOR<system_group_permissionUpdateWithoutGroupsInput, system_group_permissionUncheckedUpdateWithoutGroupsInput>
    create: XOR<system_group_permissionCreateWithoutGroupsInput, system_group_permissionUncheckedCreateWithoutGroupsInput>
    where?: system_group_permissionWhereInput
  }

  export type system_group_permissionUpdateToOneWithWhereWithoutGroupsInput = {
    where?: system_group_permissionWhereInput
    data: XOR<system_group_permissionUpdateWithoutGroupsInput, system_group_permissionUncheckedUpdateWithoutGroupsInput>
  }

  export type system_group_permissionUpdateWithoutGroupsInput = {
    maxMember?: IntFieldUpdateOperationsInput | number
    allowFileSharing?: BoolFieldUpdateOperationsInput | boolean
    allowPublicVisibility?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maxFileSizeMB?: IntFieldUpdateOperationsInput | number
    allowMessages?: BoolFieldUpdateOperationsInput | boolean
    autoAccept?: BoolFieldUpdateOperationsInput | boolean
  }

  export type system_group_permissionUncheckedUpdateWithoutGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    maxMember?: IntFieldUpdateOperationsInput | number
    allowFileSharing?: BoolFieldUpdateOperationsInput | boolean
    allowPublicVisibility?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maxFileSizeMB?: IntFieldUpdateOperationsInput | number
    allowMessages?: BoolFieldUpdateOperationsInput | boolean
    autoAccept?: BoolFieldUpdateOperationsInput | boolean
  }

  export type groupsCreateWithoutNotificationsInput = {
    type: $Enums.groups_type
    visibility: $Enums.groups_visibility
    name: string
    description: string
    validation?: $Enums.groups_validation
    createdAt?: Date | string
    groupMembers?: groupMembersCreateNestedManyWithoutGroupsInput
    messages?: messageCreateNestedManyWithoutGroupInput
    resources?: resourcesCreateNestedManyWithoutGroupInput
    system_group_permission?: system_group_permissionCreateNestedOneWithoutGroupsInput
  }

  export type groupsUncheckedCreateWithoutNotificationsInput = {
    id?: number
    type: $Enums.groups_type
    visibility: $Enums.groups_visibility
    name: string
    description: string
    validation?: $Enums.groups_validation
    createdAt?: Date | string
    groupMembers?: groupMembersUncheckedCreateNestedManyWithoutGroupsInput
    messages?: messageUncheckedCreateNestedManyWithoutGroupInput
    resources?: resourcesUncheckedCreateNestedManyWithoutGroupInput
    system_group_permission?: system_group_permissionUncheckedCreateNestedOneWithoutGroupsInput
  }

  export type groupsCreateOrConnectWithoutNotificationsInput = {
    where: groupsWhereUniqueInput
    create: XOR<groupsCreateWithoutNotificationsInput, groupsUncheckedCreateWithoutNotificationsInput>
  }

  export type groupsUpsertWithoutNotificationsInput = {
    update: XOR<groupsUpdateWithoutNotificationsInput, groupsUncheckedUpdateWithoutNotificationsInput>
    create: XOR<groupsCreateWithoutNotificationsInput, groupsUncheckedCreateWithoutNotificationsInput>
    where?: groupsWhereInput
  }

  export type groupsUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: groupsWhereInput
    data: XOR<groupsUpdateWithoutNotificationsInput, groupsUncheckedUpdateWithoutNotificationsInput>
  }

  export type groupsUpdateWithoutNotificationsInput = {
    type?: Enumgroups_typeFieldUpdateOperationsInput | $Enums.groups_type
    visibility?: Enumgroups_visibilityFieldUpdateOperationsInput | $Enums.groups_visibility
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    validation?: Enumgroups_validationFieldUpdateOperationsInput | $Enums.groups_validation
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupMembers?: groupMembersUpdateManyWithoutGroupsNestedInput
    messages?: messageUpdateManyWithoutGroupNestedInput
    resources?: resourcesUpdateManyWithoutGroupNestedInput
    system_group_permission?: system_group_permissionUpdateOneWithoutGroupsNestedInput
  }

  export type groupsUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: Enumgroups_typeFieldUpdateOperationsInput | $Enums.groups_type
    visibility?: Enumgroups_visibilityFieldUpdateOperationsInput | $Enums.groups_visibility
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    validation?: Enumgroups_validationFieldUpdateOperationsInput | $Enums.groups_validation
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupMembers?: groupMembersUncheckedUpdateManyWithoutGroupsNestedInput
    messages?: messageUncheckedUpdateManyWithoutGroupNestedInput
    resources?: resourcesUncheckedUpdateManyWithoutGroupNestedInput
    system_group_permission?: system_group_permissionUncheckedUpdateOneWithoutGroupsNestedInput
  }

  export type messageCreateWithoutResourceInput = {
    content: string
    isRead?: boolean
    createdAt?: Date | string
    type: $Enums.message_type
    group?: groupsCreateNestedOneWithoutMessagesInput
    receiver?: studentCreateNestedOneWithoutReceivedMessagesInput
    sender: studentCreateNestedOneWithoutSentMessagesInput
  }

  export type messageUncheckedCreateWithoutResourceInput = {
    id?: number
    content: string
    senderId: number
    receiverId?: number | null
    groupId?: number | null
    isRead?: boolean
    createdAt?: Date | string
    type: $Enums.message_type
  }

  export type messageCreateOrConnectWithoutResourceInput = {
    where: messageWhereUniqueInput
    create: XOR<messageCreateWithoutResourceInput, messageUncheckedCreateWithoutResourceInput>
  }

  export type messageCreateManyResourceInputEnvelope = {
    data: messageCreateManyResourceInput | messageCreateManyResourceInput[]
    skipDuplicates?: boolean
  }

  export type groupsCreateWithoutResourcesInput = {
    type: $Enums.groups_type
    visibility: $Enums.groups_visibility
    name: string
    description: string
    validation?: $Enums.groups_validation
    createdAt?: Date | string
    groupMembers?: groupMembersCreateNestedManyWithoutGroupsInput
    messages?: messageCreateNestedManyWithoutGroupInput
    notifications?: notificationCreateNestedManyWithoutGroupInput
    system_group_permission?: system_group_permissionCreateNestedOneWithoutGroupsInput
  }

  export type groupsUncheckedCreateWithoutResourcesInput = {
    id?: number
    type: $Enums.groups_type
    visibility: $Enums.groups_visibility
    name: string
    description: string
    validation?: $Enums.groups_validation
    createdAt?: Date | string
    groupMembers?: groupMembersUncheckedCreateNestedManyWithoutGroupsInput
    messages?: messageUncheckedCreateNestedManyWithoutGroupInput
    notifications?: notificationUncheckedCreateNestedManyWithoutGroupInput
    system_group_permission?: system_group_permissionUncheckedCreateNestedOneWithoutGroupsInput
  }

  export type groupsCreateOrConnectWithoutResourcesInput = {
    where: groupsWhereUniqueInput
    create: XOR<groupsCreateWithoutResourcesInput, groupsUncheckedCreateWithoutResourcesInput>
  }

  export type studentCreateWithoutResourcesInput = {
    Mat: number
    name: string
    email: string
    role?: $Enums.student_role
    password: string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groupMembers?: groupMembersCreateNestedManyWithoutStudentInput
    receivedMessages?: messageCreateNestedManyWithoutReceiverInput
    sentMessages?: messageCreateNestedManyWithoutSenderInput
    profile?: profileCreateNestedOneWithoutStudentInput
  }

  export type studentUncheckedCreateWithoutResourcesInput = {
    Mat: number
    name: string
    email: string
    role?: $Enums.student_role
    password: string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groupMembers?: groupMembersUncheckedCreateNestedManyWithoutStudentInput
    receivedMessages?: messageUncheckedCreateNestedManyWithoutReceiverInput
    sentMessages?: messageUncheckedCreateNestedManyWithoutSenderInput
    profile?: profileUncheckedCreateNestedOneWithoutStudentInput
  }

  export type studentCreateOrConnectWithoutResourcesInput = {
    where: studentWhereUniqueInput
    create: XOR<studentCreateWithoutResourcesInput, studentUncheckedCreateWithoutResourcesInput>
  }

  export type messageUpsertWithWhereUniqueWithoutResourceInput = {
    where: messageWhereUniqueInput
    update: XOR<messageUpdateWithoutResourceInput, messageUncheckedUpdateWithoutResourceInput>
    create: XOR<messageCreateWithoutResourceInput, messageUncheckedCreateWithoutResourceInput>
  }

  export type messageUpdateWithWhereUniqueWithoutResourceInput = {
    where: messageWhereUniqueInput
    data: XOR<messageUpdateWithoutResourceInput, messageUncheckedUpdateWithoutResourceInput>
  }

  export type messageUpdateManyWithWhereWithoutResourceInput = {
    where: messageScalarWhereInput
    data: XOR<messageUpdateManyMutationInput, messageUncheckedUpdateManyWithoutResourceInput>
  }

  export type groupsUpsertWithoutResourcesInput = {
    update: XOR<groupsUpdateWithoutResourcesInput, groupsUncheckedUpdateWithoutResourcesInput>
    create: XOR<groupsCreateWithoutResourcesInput, groupsUncheckedCreateWithoutResourcesInput>
    where?: groupsWhereInput
  }

  export type groupsUpdateToOneWithWhereWithoutResourcesInput = {
    where?: groupsWhereInput
    data: XOR<groupsUpdateWithoutResourcesInput, groupsUncheckedUpdateWithoutResourcesInput>
  }

  export type groupsUpdateWithoutResourcesInput = {
    type?: Enumgroups_typeFieldUpdateOperationsInput | $Enums.groups_type
    visibility?: Enumgroups_visibilityFieldUpdateOperationsInput | $Enums.groups_visibility
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    validation?: Enumgroups_validationFieldUpdateOperationsInput | $Enums.groups_validation
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupMembers?: groupMembersUpdateManyWithoutGroupsNestedInput
    messages?: messageUpdateManyWithoutGroupNestedInput
    notifications?: notificationUpdateManyWithoutGroupNestedInput
    system_group_permission?: system_group_permissionUpdateOneWithoutGroupsNestedInput
  }

  export type groupsUncheckedUpdateWithoutResourcesInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: Enumgroups_typeFieldUpdateOperationsInput | $Enums.groups_type
    visibility?: Enumgroups_visibilityFieldUpdateOperationsInput | $Enums.groups_visibility
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    validation?: Enumgroups_validationFieldUpdateOperationsInput | $Enums.groups_validation
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupMembers?: groupMembersUncheckedUpdateManyWithoutGroupsNestedInput
    messages?: messageUncheckedUpdateManyWithoutGroupNestedInput
    notifications?: notificationUncheckedUpdateManyWithoutGroupNestedInput
    system_group_permission?: system_group_permissionUncheckedUpdateOneWithoutGroupsNestedInput
  }

  export type studentUpsertWithoutResourcesInput = {
    update: XOR<studentUpdateWithoutResourcesInput, studentUncheckedUpdateWithoutResourcesInput>
    create: XOR<studentCreateWithoutResourcesInput, studentUncheckedCreateWithoutResourcesInput>
    where?: studentWhereInput
  }

  export type studentUpdateToOneWithWhereWithoutResourcesInput = {
    where?: studentWhereInput
    data: XOR<studentUpdateWithoutResourcesInput, studentUncheckedUpdateWithoutResourcesInput>
  }

  export type studentUpdateWithoutResourcesInput = {
    Mat?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumstudent_roleFieldUpdateOperationsInput | $Enums.student_role
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupMembers?: groupMembersUpdateManyWithoutStudentNestedInput
    receivedMessages?: messageUpdateManyWithoutReceiverNestedInput
    sentMessages?: messageUpdateManyWithoutSenderNestedInput
    profile?: profileUpdateOneWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateWithoutResourcesInput = {
    Mat?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumstudent_roleFieldUpdateOperationsInput | $Enums.student_role
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupMembers?: groupMembersUncheckedUpdateManyWithoutStudentNestedInput
    receivedMessages?: messageUncheckedUpdateManyWithoutReceiverNestedInput
    sentMessages?: messageUncheckedUpdateManyWithoutSenderNestedInput
    profile?: profileUncheckedUpdateOneWithoutStudentNestedInput
  }

  export type groupsCreateWithoutGroupMembersInput = {
    type: $Enums.groups_type
    visibility: $Enums.groups_visibility
    name: string
    description: string
    validation?: $Enums.groups_validation
    createdAt?: Date | string
    messages?: messageCreateNestedManyWithoutGroupInput
    notifications?: notificationCreateNestedManyWithoutGroupInput
    resources?: resourcesCreateNestedManyWithoutGroupInput
    system_group_permission?: system_group_permissionCreateNestedOneWithoutGroupsInput
  }

  export type groupsUncheckedCreateWithoutGroupMembersInput = {
    id?: number
    type: $Enums.groups_type
    visibility: $Enums.groups_visibility
    name: string
    description: string
    validation?: $Enums.groups_validation
    createdAt?: Date | string
    messages?: messageUncheckedCreateNestedManyWithoutGroupInput
    notifications?: notificationUncheckedCreateNestedManyWithoutGroupInput
    resources?: resourcesUncheckedCreateNestedManyWithoutGroupInput
    system_group_permission?: system_group_permissionUncheckedCreateNestedOneWithoutGroupsInput
  }

  export type groupsCreateOrConnectWithoutGroupMembersInput = {
    where: groupsWhereUniqueInput
    create: XOR<groupsCreateWithoutGroupMembersInput, groupsUncheckedCreateWithoutGroupMembersInput>
  }

  export type studentCreateWithoutGroupMembersInput = {
    Mat: number
    name: string
    email: string
    role?: $Enums.student_role
    password: string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    receivedMessages?: messageCreateNestedManyWithoutReceiverInput
    sentMessages?: messageCreateNestedManyWithoutSenderInput
    profile?: profileCreateNestedOneWithoutStudentInput
    resources?: resourcesCreateNestedManyWithoutStudentInput
  }

  export type studentUncheckedCreateWithoutGroupMembersInput = {
    Mat: number
    name: string
    email: string
    role?: $Enums.student_role
    password: string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    receivedMessages?: messageUncheckedCreateNestedManyWithoutReceiverInput
    sentMessages?: messageUncheckedCreateNestedManyWithoutSenderInput
    profile?: profileUncheckedCreateNestedOneWithoutStudentInput
    resources?: resourcesUncheckedCreateNestedManyWithoutStudentInput
  }

  export type studentCreateOrConnectWithoutGroupMembersInput = {
    where: studentWhereUniqueInput
    create: XOR<studentCreateWithoutGroupMembersInput, studentUncheckedCreateWithoutGroupMembersInput>
  }

  export type group_member_permissionCreateWithoutGroupMembersInput = {
    canAcceptMembers?: boolean
    canValidateRessources?: boolean
    canDeleteMessages?: boolean
    canEditGroupInfo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type group_member_permissionUncheckedCreateWithoutGroupMembersInput = {
    id?: number
    canAcceptMembers?: boolean
    canValidateRessources?: boolean
    canDeleteMessages?: boolean
    canEditGroupInfo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type group_member_permissionCreateOrConnectWithoutGroupMembersInput = {
    where: group_member_permissionWhereUniqueInput
    create: XOR<group_member_permissionCreateWithoutGroupMembersInput, group_member_permissionUncheckedCreateWithoutGroupMembersInput>
  }

  export type group_member_permissionCreateManyGroupMembersInputEnvelope = {
    data: group_member_permissionCreateManyGroupMembersInput | group_member_permissionCreateManyGroupMembersInput[]
    skipDuplicates?: boolean
  }

  export type groupsUpsertWithoutGroupMembersInput = {
    update: XOR<groupsUpdateWithoutGroupMembersInput, groupsUncheckedUpdateWithoutGroupMembersInput>
    create: XOR<groupsCreateWithoutGroupMembersInput, groupsUncheckedCreateWithoutGroupMembersInput>
    where?: groupsWhereInput
  }

  export type groupsUpdateToOneWithWhereWithoutGroupMembersInput = {
    where?: groupsWhereInput
    data: XOR<groupsUpdateWithoutGroupMembersInput, groupsUncheckedUpdateWithoutGroupMembersInput>
  }

  export type groupsUpdateWithoutGroupMembersInput = {
    type?: Enumgroups_typeFieldUpdateOperationsInput | $Enums.groups_type
    visibility?: Enumgroups_visibilityFieldUpdateOperationsInput | $Enums.groups_visibility
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    validation?: Enumgroups_validationFieldUpdateOperationsInput | $Enums.groups_validation
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: messageUpdateManyWithoutGroupNestedInput
    notifications?: notificationUpdateManyWithoutGroupNestedInput
    resources?: resourcesUpdateManyWithoutGroupNestedInput
    system_group_permission?: system_group_permissionUpdateOneWithoutGroupsNestedInput
  }

  export type groupsUncheckedUpdateWithoutGroupMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: Enumgroups_typeFieldUpdateOperationsInput | $Enums.groups_type
    visibility?: Enumgroups_visibilityFieldUpdateOperationsInput | $Enums.groups_visibility
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    validation?: Enumgroups_validationFieldUpdateOperationsInput | $Enums.groups_validation
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: messageUncheckedUpdateManyWithoutGroupNestedInput
    notifications?: notificationUncheckedUpdateManyWithoutGroupNestedInput
    resources?: resourcesUncheckedUpdateManyWithoutGroupNestedInput
    system_group_permission?: system_group_permissionUncheckedUpdateOneWithoutGroupsNestedInput
  }

  export type studentUpsertWithoutGroupMembersInput = {
    update: XOR<studentUpdateWithoutGroupMembersInput, studentUncheckedUpdateWithoutGroupMembersInput>
    create: XOR<studentCreateWithoutGroupMembersInput, studentUncheckedCreateWithoutGroupMembersInput>
    where?: studentWhereInput
  }

  export type studentUpdateToOneWithWhereWithoutGroupMembersInput = {
    where?: studentWhereInput
    data: XOR<studentUpdateWithoutGroupMembersInput, studentUncheckedUpdateWithoutGroupMembersInput>
  }

  export type studentUpdateWithoutGroupMembersInput = {
    Mat?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumstudent_roleFieldUpdateOperationsInput | $Enums.student_role
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedMessages?: messageUpdateManyWithoutReceiverNestedInput
    sentMessages?: messageUpdateManyWithoutSenderNestedInput
    profile?: profileUpdateOneWithoutStudentNestedInput
    resources?: resourcesUpdateManyWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateWithoutGroupMembersInput = {
    Mat?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: Enumstudent_roleFieldUpdateOperationsInput | $Enums.student_role
    password?: StringFieldUpdateOperationsInput | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedMessages?: messageUncheckedUpdateManyWithoutReceiverNestedInput
    sentMessages?: messageUncheckedUpdateManyWithoutSenderNestedInput
    profile?: profileUncheckedUpdateOneWithoutStudentNestedInput
    resources?: resourcesUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type group_member_permissionUpsertWithWhereUniqueWithoutGroupMembersInput = {
    where: group_member_permissionWhereUniqueInput
    update: XOR<group_member_permissionUpdateWithoutGroupMembersInput, group_member_permissionUncheckedUpdateWithoutGroupMembersInput>
    create: XOR<group_member_permissionCreateWithoutGroupMembersInput, group_member_permissionUncheckedCreateWithoutGroupMembersInput>
  }

  export type group_member_permissionUpdateWithWhereUniqueWithoutGroupMembersInput = {
    where: group_member_permissionWhereUniqueInput
    data: XOR<group_member_permissionUpdateWithoutGroupMembersInput, group_member_permissionUncheckedUpdateWithoutGroupMembersInput>
  }

  export type group_member_permissionUpdateManyWithWhereWithoutGroupMembersInput = {
    where: group_member_permissionScalarWhereInput
    data: XOR<group_member_permissionUpdateManyMutationInput, group_member_permissionUncheckedUpdateManyWithoutGroupMembersInput>
  }

  export type group_member_permissionScalarWhereInput = {
    AND?: group_member_permissionScalarWhereInput | group_member_permissionScalarWhereInput[]
    OR?: group_member_permissionScalarWhereInput[]
    NOT?: group_member_permissionScalarWhereInput | group_member_permissionScalarWhereInput[]
    id?: IntFilter<"group_member_permission"> | number
    groupMemberId?: IntFilter<"group_member_permission"> | number
    canAcceptMembers?: BoolFilter<"group_member_permission"> | boolean
    canValidateRessources?: BoolFilter<"group_member_permission"> | boolean
    canDeleteMessages?: BoolFilter<"group_member_permission"> | boolean
    canEditGroupInfo?: BoolFilter<"group_member_permission"> | boolean
    createdAt?: DateTimeFilter<"group_member_permission"> | Date | string
    updatedAt?: DateTimeFilter<"group_member_permission"> | Date | string
  }

  export type groupMembersCreateWithoutGroup_member_permissionInput = {
    role?: $Enums.groupMembers_role
    status?: $Enums.groupMembers_status
    date_adhesion?: Date | string | null
    groups: groupsCreateNestedOneWithoutGroupMembersInput
    student: studentCreateNestedOneWithoutGroupMembersInput
  }

  export type groupMembersUncheckedCreateWithoutGroup_member_permissionInput = {
    id?: number
    role?: $Enums.groupMembers_role
    status?: $Enums.groupMembers_status
    date_adhesion?: Date | string | null
    studentId: number
    groupId: number
  }

  export type groupMembersCreateOrConnectWithoutGroup_member_permissionInput = {
    where: groupMembersWhereUniqueInput
    create: XOR<groupMembersCreateWithoutGroup_member_permissionInput, groupMembersUncheckedCreateWithoutGroup_member_permissionInput>
  }

  export type groupMembersUpsertWithoutGroup_member_permissionInput = {
    update: XOR<groupMembersUpdateWithoutGroup_member_permissionInput, groupMembersUncheckedUpdateWithoutGroup_member_permissionInput>
    create: XOR<groupMembersCreateWithoutGroup_member_permissionInput, groupMembersUncheckedCreateWithoutGroup_member_permissionInput>
    where?: groupMembersWhereInput
  }

  export type groupMembersUpdateToOneWithWhereWithoutGroup_member_permissionInput = {
    where?: groupMembersWhereInput
    data: XOR<groupMembersUpdateWithoutGroup_member_permissionInput, groupMembersUncheckedUpdateWithoutGroup_member_permissionInput>
  }

  export type groupMembersUpdateWithoutGroup_member_permissionInput = {
    role?: EnumgroupMembers_roleFieldUpdateOperationsInput | $Enums.groupMembers_role
    status?: EnumgroupMembers_statusFieldUpdateOperationsInput | $Enums.groupMembers_status
    date_adhesion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    groups?: groupsUpdateOneRequiredWithoutGroupMembersNestedInput
    student?: studentUpdateOneRequiredWithoutGroupMembersNestedInput
  }

  export type groupMembersUncheckedUpdateWithoutGroup_member_permissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumgroupMembers_roleFieldUpdateOperationsInput | $Enums.groupMembers_role
    status?: EnumgroupMembers_statusFieldUpdateOperationsInput | $Enums.groupMembers_status
    date_adhesion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentId?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
  }

  export type groupsCreateWithoutSystem_group_permissionInput = {
    type: $Enums.groups_type
    visibility: $Enums.groups_visibility
    name: string
    description: string
    validation?: $Enums.groups_validation
    createdAt?: Date | string
    groupMembers?: groupMembersCreateNestedManyWithoutGroupsInput
    messages?: messageCreateNestedManyWithoutGroupInput
    notifications?: notificationCreateNestedManyWithoutGroupInput
    resources?: resourcesCreateNestedManyWithoutGroupInput
  }

  export type groupsUncheckedCreateWithoutSystem_group_permissionInput = {
    id?: number
    type: $Enums.groups_type
    visibility: $Enums.groups_visibility
    name: string
    description: string
    validation?: $Enums.groups_validation
    createdAt?: Date | string
    groupMembers?: groupMembersUncheckedCreateNestedManyWithoutGroupsInput
    messages?: messageUncheckedCreateNestedManyWithoutGroupInput
    notifications?: notificationUncheckedCreateNestedManyWithoutGroupInput
    resources?: resourcesUncheckedCreateNestedManyWithoutGroupInput
  }

  export type groupsCreateOrConnectWithoutSystem_group_permissionInput = {
    where: groupsWhereUniqueInput
    create: XOR<groupsCreateWithoutSystem_group_permissionInput, groupsUncheckedCreateWithoutSystem_group_permissionInput>
  }

  export type groupsUpsertWithoutSystem_group_permissionInput = {
    update: XOR<groupsUpdateWithoutSystem_group_permissionInput, groupsUncheckedUpdateWithoutSystem_group_permissionInput>
    create: XOR<groupsCreateWithoutSystem_group_permissionInput, groupsUncheckedCreateWithoutSystem_group_permissionInput>
    where?: groupsWhereInput
  }

  export type groupsUpdateToOneWithWhereWithoutSystem_group_permissionInput = {
    where?: groupsWhereInput
    data: XOR<groupsUpdateWithoutSystem_group_permissionInput, groupsUncheckedUpdateWithoutSystem_group_permissionInput>
  }

  export type groupsUpdateWithoutSystem_group_permissionInput = {
    type?: Enumgroups_typeFieldUpdateOperationsInput | $Enums.groups_type
    visibility?: Enumgroups_visibilityFieldUpdateOperationsInput | $Enums.groups_visibility
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    validation?: Enumgroups_validationFieldUpdateOperationsInput | $Enums.groups_validation
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupMembers?: groupMembersUpdateManyWithoutGroupsNestedInput
    messages?: messageUpdateManyWithoutGroupNestedInput
    notifications?: notificationUpdateManyWithoutGroupNestedInput
    resources?: resourcesUpdateManyWithoutGroupNestedInput
  }

  export type groupsUncheckedUpdateWithoutSystem_group_permissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: Enumgroups_typeFieldUpdateOperationsInput | $Enums.groups_type
    visibility?: Enumgroups_visibilityFieldUpdateOperationsInput | $Enums.groups_visibility
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    validation?: Enumgroups_validationFieldUpdateOperationsInput | $Enums.groups_validation
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupMembers?: groupMembersUncheckedUpdateManyWithoutGroupsNestedInput
    messages?: messageUncheckedUpdateManyWithoutGroupNestedInput
    notifications?: notificationUncheckedUpdateManyWithoutGroupNestedInput
    resources?: resourcesUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type groupMembersCreateManyStudentInput = {
    id?: number
    role?: $Enums.groupMembers_role
    status?: $Enums.groupMembers_status
    date_adhesion?: Date | string | null
    groupId: number
  }

  export type messageCreateManyReceiverInput = {
    id?: number
    content: string
    senderId: number
    groupId?: number | null
    isRead?: boolean
    createdAt?: Date | string
    type: $Enums.message_type
    resourceId?: number | null
  }

  export type messageCreateManySenderInput = {
    id?: number
    content: string
    receiverId?: number | null
    groupId?: number | null
    isRead?: boolean
    createdAt?: Date | string
    type: $Enums.message_type
    resourceId?: number | null
  }

  export type resourcesCreateManyStudentInput = {
    id?: number
    name: string
    filepath: string
    size: number
    validation?: $Enums.resources_validation
    groupId?: number | null
    uploadedAt?: Date | string
    fileType?: string | null
    mimeType?: string | null
  }

  export type groupMembersUpdateWithoutStudentInput = {
    role?: EnumgroupMembers_roleFieldUpdateOperationsInput | $Enums.groupMembers_role
    status?: EnumgroupMembers_statusFieldUpdateOperationsInput | $Enums.groupMembers_status
    date_adhesion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    groups?: groupsUpdateOneRequiredWithoutGroupMembersNestedInput
    group_member_permission?: group_member_permissionUpdateManyWithoutGroupMembersNestedInput
  }

  export type groupMembersUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumgroupMembers_roleFieldUpdateOperationsInput | $Enums.groupMembers_role
    status?: EnumgroupMembers_statusFieldUpdateOperationsInput | $Enums.groupMembers_status
    date_adhesion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    groupId?: IntFieldUpdateOperationsInput | number
    group_member_permission?: group_member_permissionUncheckedUpdateManyWithoutGroupMembersNestedInput
  }

  export type groupMembersUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumgroupMembers_roleFieldUpdateOperationsInput | $Enums.groupMembers_role
    status?: EnumgroupMembers_statusFieldUpdateOperationsInput | $Enums.groupMembers_status
    date_adhesion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    groupId?: IntFieldUpdateOperationsInput | number
  }

  export type messageUpdateWithoutReceiverInput = {
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: Enummessage_typeFieldUpdateOperationsInput | $Enums.message_type
    group?: groupsUpdateOneWithoutMessagesNestedInput
    resource?: resourcesUpdateOneWithoutMessagesNestedInput
    sender?: studentUpdateOneRequiredWithoutSentMessagesNestedInput
  }

  export type messageUncheckedUpdateWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    senderId?: IntFieldUpdateOperationsInput | number
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: Enummessage_typeFieldUpdateOperationsInput | $Enums.message_type
    resourceId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type messageUncheckedUpdateManyWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    senderId?: IntFieldUpdateOperationsInput | number
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: Enummessage_typeFieldUpdateOperationsInput | $Enums.message_type
    resourceId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type messageUpdateWithoutSenderInput = {
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: Enummessage_typeFieldUpdateOperationsInput | $Enums.message_type
    group?: groupsUpdateOneWithoutMessagesNestedInput
    receiver?: studentUpdateOneWithoutReceivedMessagesNestedInput
    resource?: resourcesUpdateOneWithoutMessagesNestedInput
  }

  export type messageUncheckedUpdateWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    receiverId?: NullableIntFieldUpdateOperationsInput | number | null
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: Enummessage_typeFieldUpdateOperationsInput | $Enums.message_type
    resourceId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type messageUncheckedUpdateManyWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    receiverId?: NullableIntFieldUpdateOperationsInput | number | null
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: Enummessage_typeFieldUpdateOperationsInput | $Enums.message_type
    resourceId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type resourcesUpdateWithoutStudentInput = {
    name?: StringFieldUpdateOperationsInput | string
    filepath?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    validation?: Enumresources_validationFieldUpdateOperationsInput | $Enums.resources_validation
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: messageUpdateManyWithoutResourceNestedInput
    group?: groupsUpdateOneWithoutResourcesNestedInput
  }

  export type resourcesUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    filepath?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    validation?: Enumresources_validationFieldUpdateOperationsInput | $Enums.resources_validation
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: messageUncheckedUpdateManyWithoutResourceNestedInput
  }

  export type resourcesUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    filepath?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    validation?: Enumresources_validationFieldUpdateOperationsInput | $Enums.resources_validation
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type groupMembersCreateManyGroupsInput = {
    id?: number
    role?: $Enums.groupMembers_role
    status?: $Enums.groupMembers_status
    date_adhesion?: Date | string | null
    studentId: number
  }

  export type messageCreateManyGroupInput = {
    id?: number
    content: string
    senderId: number
    receiverId?: number | null
    isRead?: boolean
    createdAt?: Date | string
    type: $Enums.message_type
    resourceId?: number | null
  }

  export type notificationCreateManyGroupInput = {
    id?: number
    titre?: string
    content: string
    studentId: number
    type?: $Enums.notification_type
    isRead?: boolean
    sentAt?: Date | string
  }

  export type resourcesCreateManyGroupInput = {
    id?: number
    name: string
    filepath: string
    size: number
    studentId: number
    validation?: $Enums.resources_validation
    uploadedAt?: Date | string
    fileType?: string | null
    mimeType?: string | null
  }

  export type groupMembersUpdateWithoutGroupsInput = {
    role?: EnumgroupMembers_roleFieldUpdateOperationsInput | $Enums.groupMembers_role
    status?: EnumgroupMembers_statusFieldUpdateOperationsInput | $Enums.groupMembers_status
    date_adhesion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student?: studentUpdateOneRequiredWithoutGroupMembersNestedInput
    group_member_permission?: group_member_permissionUpdateManyWithoutGroupMembersNestedInput
  }

  export type groupMembersUncheckedUpdateWithoutGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumgroupMembers_roleFieldUpdateOperationsInput | $Enums.groupMembers_role
    status?: EnumgroupMembers_statusFieldUpdateOperationsInput | $Enums.groupMembers_status
    date_adhesion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentId?: IntFieldUpdateOperationsInput | number
    group_member_permission?: group_member_permissionUncheckedUpdateManyWithoutGroupMembersNestedInput
  }

  export type groupMembersUncheckedUpdateManyWithoutGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumgroupMembers_roleFieldUpdateOperationsInput | $Enums.groupMembers_role
    status?: EnumgroupMembers_statusFieldUpdateOperationsInput | $Enums.groupMembers_status
    date_adhesion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studentId?: IntFieldUpdateOperationsInput | number
  }

  export type messageUpdateWithoutGroupInput = {
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: Enummessage_typeFieldUpdateOperationsInput | $Enums.message_type
    receiver?: studentUpdateOneWithoutReceivedMessagesNestedInput
    resource?: resourcesUpdateOneWithoutMessagesNestedInput
    sender?: studentUpdateOneRequiredWithoutSentMessagesNestedInput
  }

  export type messageUncheckedUpdateWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: NullableIntFieldUpdateOperationsInput | number | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: Enummessage_typeFieldUpdateOperationsInput | $Enums.message_type
    resourceId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type messageUncheckedUpdateManyWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: NullableIntFieldUpdateOperationsInput | number | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: Enummessage_typeFieldUpdateOperationsInput | $Enums.message_type
    resourceId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type notificationUpdateWithoutGroupInput = {
    titre?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    studentId?: IntFieldUpdateOperationsInput | number
    type?: Enumnotification_typeFieldUpdateOperationsInput | $Enums.notification_type
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificationUncheckedUpdateWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    studentId?: IntFieldUpdateOperationsInput | number
    type?: Enumnotification_typeFieldUpdateOperationsInput | $Enums.notification_type
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificationUncheckedUpdateManyWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    studentId?: IntFieldUpdateOperationsInput | number
    type?: Enumnotification_typeFieldUpdateOperationsInput | $Enums.notification_type
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type resourcesUpdateWithoutGroupInput = {
    name?: StringFieldUpdateOperationsInput | string
    filepath?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    validation?: Enumresources_validationFieldUpdateOperationsInput | $Enums.resources_validation
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: messageUpdateManyWithoutResourceNestedInput
    student?: studentUpdateOneRequiredWithoutResourcesNestedInput
  }

  export type resourcesUncheckedUpdateWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    filepath?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    validation?: Enumresources_validationFieldUpdateOperationsInput | $Enums.resources_validation
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: messageUncheckedUpdateManyWithoutResourceNestedInput
  }

  export type resourcesUncheckedUpdateManyWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    filepath?: StringFieldUpdateOperationsInput | string
    size?: FloatFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    validation?: Enumresources_validationFieldUpdateOperationsInput | $Enums.resources_validation
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type messageCreateManyResourceInput = {
    id?: number
    content: string
    senderId: number
    receiverId?: number | null
    groupId?: number | null
    isRead?: boolean
    createdAt?: Date | string
    type: $Enums.message_type
  }

  export type messageUpdateWithoutResourceInput = {
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: Enummessage_typeFieldUpdateOperationsInput | $Enums.message_type
    group?: groupsUpdateOneWithoutMessagesNestedInput
    receiver?: studentUpdateOneWithoutReceivedMessagesNestedInput
    sender?: studentUpdateOneRequiredWithoutSentMessagesNestedInput
  }

  export type messageUncheckedUpdateWithoutResourceInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: NullableIntFieldUpdateOperationsInput | number | null
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: Enummessage_typeFieldUpdateOperationsInput | $Enums.message_type
  }

  export type messageUncheckedUpdateManyWithoutResourceInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: NullableIntFieldUpdateOperationsInput | number | null
    groupId?: NullableIntFieldUpdateOperationsInput | number | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: Enummessage_typeFieldUpdateOperationsInput | $Enums.message_type
  }

  export type group_member_permissionCreateManyGroupMembersInput = {
    id?: number
    canAcceptMembers?: boolean
    canValidateRessources?: boolean
    canDeleteMessages?: boolean
    canEditGroupInfo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type group_member_permissionUpdateWithoutGroupMembersInput = {
    canAcceptMembers?: BoolFieldUpdateOperationsInput | boolean
    canValidateRessources?: BoolFieldUpdateOperationsInput | boolean
    canDeleteMessages?: BoolFieldUpdateOperationsInput | boolean
    canEditGroupInfo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type group_member_permissionUncheckedUpdateWithoutGroupMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    canAcceptMembers?: BoolFieldUpdateOperationsInput | boolean
    canValidateRessources?: BoolFieldUpdateOperationsInput | boolean
    canDeleteMessages?: BoolFieldUpdateOperationsInput | boolean
    canEditGroupInfo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type group_member_permissionUncheckedUpdateManyWithoutGroupMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    canAcceptMembers?: BoolFieldUpdateOperationsInput | boolean
    canValidateRessources?: BoolFieldUpdateOperationsInput | boolean
    canDeleteMessages?: BoolFieldUpdateOperationsInput | boolean
    canEditGroupInfo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
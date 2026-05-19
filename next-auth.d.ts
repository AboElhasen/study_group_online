// types/next-auth.d.ts
import "next-auth";

declare module "next-auth" {
  interface User {
      id: string;
     name: string;
    email: string;
    image?:string|null;
    role: string;
  }

  interface Session {
    user: {
      id: number;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
        id: number;
     name: string;
    email: string;
    image?:string|null;
    role: string;

  }
}

/*import "next-auth"

declare module "next-auth" {
 
  interface Session {
    user: {
      id: number;
      name:string;
      email:string;
      image?:string|null;
    }
  }


  interface User {
    id: string;
    name: string;
    email: string;
    image?:string|null;
  }
}

declare module "next-auth/jwt" {
  
  interface JWT {
     id: number;
    name: string;
    email: string;
    image?:string|null;
  }
}*/
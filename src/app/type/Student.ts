import { groupMembers_status } from "@/generated/client";

export interface Student1 {
    Mat: number;
    name:string;
   group:number;
        profile:{
            image:string;
        };
   _count: {
        sentMessage: number;
    };
}
export interface Student2 {
    Mat: number;
    name:string;
    email:string;
   role:string;
   createdAt:Date;
   group?:number;
        profile:{
            image:string;
        };
}
interface GroupMember{
  id:number;
  role:'admin'|'member';
  status:'accept'|'waiting';
  date_adhesion?:Date;
  groupId:number;
  studentId:number;
}
export interface Student3 {
    Mat: number;
    name:string;
    email:string;
   role:string;
   createdAt:Date;
   group?:number;
        profile:{
            image:string |null;
        } | null;
            groupId:number;
             groupName:string;
             status:groupMembers_status;
}
import "express-session"; 

declare module 'express-session' {
  export interface SessionData {
    logged?: boolean;
    userId?: number;
  }
}


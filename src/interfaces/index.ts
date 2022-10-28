import firebase from "firebase/auth";

export interface AuthProps {
  currentUser: firebase.User | null;
  login: (email: string, password: string) => Promise<firebase.UserCredential>;
  signup: (email: string, password: string) => Promise<firebase.UserCredential>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  verifyEmail: (user: firebase.User) => Promise<void>;
  loginWithGoogle: () => Promise<firebase.UserCredential>;
}

export interface APIResponse {
  data: any;
  success: boolean;
  message: string;
}
export interface JobInterface {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  salary: number;
  remoteStatus: string;
  description: string;
  yearsOfExperience: number;
  companyId: number;
  location: string;
  status: string;
  category: string;
  featured: boolean;
}
export interface CompanyInterface {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  email: string;
  image: string;
}

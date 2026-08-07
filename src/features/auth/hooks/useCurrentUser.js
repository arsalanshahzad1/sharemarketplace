import { useAuth } from "@/context/AuthContext";

export default function useCurrentUser() {
  return useAuth().user;
}

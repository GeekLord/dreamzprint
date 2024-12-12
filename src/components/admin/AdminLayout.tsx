import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Sidebar } from "./Sidebar";
import { useQuery } from "@tanstack/react-query";

const AdminLayout = () => {
  const navigate = useNavigate();

  // Check if user is admin
  const { data: profile, isLoading } = useQuery({
    queryKey: ['adminProfile'],
    queryFn: async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        throw new Error('Not authenticated');
      }

      const { data: profile, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single();

      if (error) throw error;
      if (!profile?.is_admin) throw new Error('Not authorized');
      
      return profile;
    }
  });

  useEffect(() => {
    if (!isLoading && !profile) {
      navigate('/login');
    }
  }, [isLoading, profile, navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
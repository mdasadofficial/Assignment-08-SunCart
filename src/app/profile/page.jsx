"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import { UpdateUserModal } from "../../../UpdateUserModal";

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData?.data?.user;

  return (
    <div>
      <Card className="border max-w-96 mx-auto flex flex-col items-center mt-5  ">
        <Avatar className="w-32 h-32 mb-4">
          <Avatar.Image
            alt={user?.name}
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
        </Avatar>
        <h2 className="text-2xl font-bold mb-4">{user?.name}</h2>
        <p className="text-gray-600 mb-2">Email: {user?.email}</p>
        <UpdateUserModal />
      </Card>
    </div>
  );
};

export default ProfilePage;

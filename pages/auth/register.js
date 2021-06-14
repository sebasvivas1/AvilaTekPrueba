import { useRouter } from "next/router";
import NewUserForm from "../../components/register/register-form";

function NewUserPage() {
  const router = useRouter();
  async function addUserHandler(enteredUserData) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify(enteredUserData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    router.replace("/");
  }

  return <NewUserForm onAddUser={addUserHandler} />;
}

export default NewUserPage;

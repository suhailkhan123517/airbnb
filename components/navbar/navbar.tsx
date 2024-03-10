import Container from "@/components/container";
import Logo from "./logo";
import { Search } from "./search";
import { UserMenu } from "./user-menu";
import { User } from "@prisma/client";
import { SafeUser } from "@/types";
import { Categories } from "./categories";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

export const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <>
      <div className="fixed w-full bg-white z-10 shadow-sm">
        <div className="py-4 border-b">
          <Container>
            <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
              <Logo />
              <Search />
              <UserMenu currentUser={currentUser} />
            </div>
          </Container>
        </div>
        <Categories />
      </div>
    </>
  );
};

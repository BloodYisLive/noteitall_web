import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/MenuRounded";
import CssBaseline from "@mui/material/CssBaseline";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ElevationScroll from "./components/elevation-scroll";
import Image from "next/image";
import Button from "../button-component";
import Dropdown from "./components/dropdown-component";

interface HeaderProps {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

const Header: React.FC<HeaderProps> = (props) => {
  const { children } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar sx={{ padding: "0 0" }} className="bg-navy">
            <Container>
              <div className=" w-[100%] flex justify-between items-center lg:px-8">
                <div>
                  <Image
                    src={
                      "https://genz-nextjs-v2.vercel.app/assets/imgs/template/logo.svg"
                    }
                    alt="logo"
                    width={120}
                    height={100}
                  />
                </div>
                <div className="hidden lg:flex">
                  <Dropdown />
                </div>
                <div className="flex justify-center items-center">
                  <div className="px-1 cursor-pointer">
                    <SearchIcon className="w-[28px] h-[28px] text-textPrimary" />
                  </div>
                  <div className="hidden sm:block mx-2">
                    <Button
                      title="Login"
                      onClick={() => console.log("I Pressed")}
                      width={"100px"}
                    />
                  </div>
                  <div className="px-1 cursor-pointer lg:hidden">
                    <MenuIcon className="w-[28px] h-[28px] text-textPrimary " />
                  </div>
                </div>
              </div>
            </Container>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container className="my-[20px]">{children}</Container>
    </React.Fragment>
  );
};

export default Header;

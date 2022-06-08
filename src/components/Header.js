import { AppBar, Box } from "@mui/material";

import logo from "../assets/svg/logo.svg";

function Header() {
    return (
        <AppBar
            position="static"
            color="transparent"
            elevation={0}
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 0,
                height: 60,
                backgroundColor: "white",
            }}
        >
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                    component="img"
                    sx={{ ml: 5 }}
                    src={logo}
                    alt="main-logo"
                />
            </Box>
        </AppBar>

    );
}

export default Header;
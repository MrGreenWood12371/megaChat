import { Box } from "@mui/material";
import { MainContainerStyle } from "./style";

const MainContainer = ({children}: { children: React.ReactNode }) => {
    return (
        <Box sx={MainContainerStyle}>
            {children}
        </Box>
    );
}

export default MainContainer;

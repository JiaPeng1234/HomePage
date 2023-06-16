'use client'
import TopBar from "@/components/TopBar";
import NavigationList from "../components/NavigationList";
import Box from "@mui/material/Box";

export default function HomePage() {


    return (
        <main>
            <TopBar />
            <Box className="flex">
                <Box className="w-1/5 bg-gray-100 justify-center">
                    left
                </Box>
                <Box className="w-3/5 bg-gray-200 justify-center">
                    middle
                </Box>
                <Box className="w-1/5 bg-gray-300 justify-center">
                    <NavigationList />
                </Box>
            </Box>
        </main>
    );
}
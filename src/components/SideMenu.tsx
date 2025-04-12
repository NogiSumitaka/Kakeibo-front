import React, { useState } from 'react';
import Box from '@mui/material/Box';
import DrawerList from '@/components/DrawerList';
import { Drawer } from '@mui/material';


export default function SideMenu() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  return (
    <>
      <div>
        <Drawer variant="permanent" open={open} onClose={toggleDrawer(false)}>
          <Box sx={{ width: 200 }} role="presentation" onClick={toggleDrawer(false)}>
            <DrawerList />
          </Box>
        </Drawer>
      </div >
    </>
  )
}

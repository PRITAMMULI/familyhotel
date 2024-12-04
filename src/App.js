import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuCard from "./menu/MenuCard";
import Contact from "./Contact/Contact";
import Cart from "./menu/Cart";
import DummyMenu from "./menu/DummyMenu";
import CartItems from "./menu/CartItems";
import HotelState from "./hotelcontext/HotelState";
import YourOrder from "./menu/YourOrder";
import Errorpage from "./Errorpage";
import ItemsDetails from "./menu/ItemsDetails";
import Favourite from "./menu/Favourite";
import DummyUpdate from "./DummyUpdate";
import UserTicket from "./UserRaisedTicket/UserTicket";
import TotalMenu from "./menu/overallMenu/TotalMenu";
import DishDetails from "./menu/DishDetails";
import MyRaisedTickets from "./Contact/MyRaisedTickets";
import UserList from "./profile/UserList";
import UserProfile from "./profile/UserProfile";
import CreateProfile from "./profile/CreateProfile";
 import ReactGA from "react-ga";
import Dummy from "./Dummy";
import RepeatUserInfo from "./dummy/RepeatUserInfo";
import NewHome from "./Home/NewHome";
import NewMenu from "./menu/overallMenu/NewMenu";
import NewLogin from "./Authentication/NewAuthentication/NewLogin";
import NewSignup from "./Authentication/NewAuthentication/NewSignup";
import ButtonNavigation from "./Authentication/NewAuthentication/ButtonNavigation";

let tracking_id = "6446317445";
ReactGA.initialize(tracking_id);
function App() {
  return (
    <>
      <BrowserRouter>
        <HotelState>
          <Routes>
            <Route exact path="/repeatuserinfo" element={<RepeatUserInfo />} />
            <Route exact path="/dummy2" element={<Dummy />} />
            <Route exact path="/dummy" element={<DummyUpdate />} />
            <Route exact path="/createprofile" element={<CreateProfile />} />
            <Route exact path="/yourprofile" element={<UserProfile />} />
            <Route exact path="/userlist" element={<UserList />} />
            <Route exact path="/login" element={<ButtonNavigation />} />
             <Route path="/" element={<NewHome />} />
            <Route path="*" element={<Errorpage />} />
            <Route exact path="/menucard" element={<MenuCard />} />
            <Route exact path="/totalmenu" element={<NewMenu />} />
            <Route exact path="/dishdetails" element={<DishDetails />} />
            <Route exact path="/yourcart" element={<CartItems />} />
            <Route exact path="/yourorder" element={<YourOrder />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/myraisedticket" element={<MyRaisedTickets />} />
          </Routes>
        </HotelState>
      </BrowserRouter>
    </>
  );
}

export default App;

import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";

function Profile({ handleCardClick }) {
    return(
        <div className="profile">
            <SideBar></SideBar>
            <ClothesSection handleCardClick={handleCardClick}></ClothesSection>
        </div>
    );
}

export default Profile;
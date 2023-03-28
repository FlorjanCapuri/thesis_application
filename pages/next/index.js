import SideNavbarNextJS from "@/components/SideNavbar's/SideNavbarNextJS";

const index = () => {
    return (
        <div>
            <ul className="flex flex-row">
                <li>
                    <SideNavbarNextJS />
                </li>
                <li>
                    Content
                </li>
            </ul>
        </div>
    );
}

export default index;
import SideNavbarReactJS from "@/components/SideNavbar's/SideNavbarReactJS";

const index = () => {
    return (
        <div>
            <ul className="flex flex-row">
                <li>
                    <SideNavbarReactJS />
                </li>
                <li>
                    Content 2
                </li>
            </ul>
        </div>
    );
}

export default index;
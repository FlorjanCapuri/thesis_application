import SideNavbarJS from "@/components/SideNavbar's/SideNavbarJS";

const index = () => {
    return (
        <div>
            <ul className="flex flex-row">
                <li>
                    <SideNavbarJS />
                </li>
                <li>
                    Content 2
                </li>
            </ul>
        </div>
    );
}

export default index;
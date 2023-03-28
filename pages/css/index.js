import SideNavbarCss from "@/components/SideNavbar's/SideNavbarCss";

const index = () => {
    return (
        <div>
            <ul className="flex flex-row">
                <li>
                    <SideNavbarCss />
                </li>
                <li>
                    Content
                </li>
            </ul>
        </div>
    );
}

export default index;
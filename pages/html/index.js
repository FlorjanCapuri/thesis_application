import SideNavbarHtml from "@/components/SideNavbar's/SideNavbarHtml";

const index = () => {
    return (
        <div>
            <ul className="flex flex-row">
                <li>
                    <SideNavbarHtml />
                </li>
                <li>
                    Content
                </li>
            </ul>
        </div>
    );
}

export default index;
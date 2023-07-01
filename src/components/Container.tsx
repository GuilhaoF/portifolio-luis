import { FooterComponent } from "./Footer";



export function ContainerComponent(){
    return (
        <div className="flex flex-col items-center justify-center  bg-neutral-50 mt-4  gap-16 pt-20 pb-8 px-8 rounded-t-[60px]  md:justify-between md:pt-32 md:rounded-t-[120px] ">
            <FooterComponent/>
        </div>
    )
}
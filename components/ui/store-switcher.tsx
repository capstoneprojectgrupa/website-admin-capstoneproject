'use client'

import { Store } from "@prisma/client"
import { Popover, PopoverTrigger } from "./popover"
import { useStoreModal } from "@/hooks/use-store-modal";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "./button";

type PopOverTriggerProps = React.ComponentPropsWithRef<typeof PopoverTrigger>

interface StoreSwitcherProps extends PopOverTriggerProps{
    items: Store[];
}
const StoreSwitcher = ({
    className,
    items =[]
}: StoreSwitcherProps) => {
    const storeModal = useStoreModal();
    const params = useParams();
    const router = useRouter();


    const formattedItems = items.map((item) => ({
        label: item.name,
        value: item.id,
    }))

    const currentStore = formattedItems.find((item) => item.value === params.storeId)

    const [open, setOpen] = useState(false)

    const onsStoreSelect = (store: {value: string, label: string}) => {
        setOpen(false);
        router.push(`/${store.value}`)
    }

    return(
        <div>
           <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                <Button>

                </Button>
                </PopoverTrigger>

           </Popover>
        </div>
    )
}

export default StoreSwitcher
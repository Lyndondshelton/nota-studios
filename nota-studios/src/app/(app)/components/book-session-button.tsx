import Link from "next/link";
import { BOOKING_BTN } from "../constants/constants";

export default function SessionButton(){
    return <Link href="/scheduling">{BOOKING_BTN}</Link>
}
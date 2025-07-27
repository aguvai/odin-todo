import { format, isTomorrow, isToday } from "date-fns";

const formatDate = (date) => {
    if (isTomorrow(date)) {
        return "Tomorrow";
    } else if (isToday(date)) {
        return "Today";
    }
    else {
        return format(date, 'E, LLL do, yyyy');
    }
};

export default formatDate;
import { format, isTomorrow } from "date-fns";

const formatDate = (date) => {
    if (isTomorrow(date)) {
        return "Tomorrow";
    } else {
        return format(date, 'E, LLL do, yyyy');
    }
};

export default formatDate;
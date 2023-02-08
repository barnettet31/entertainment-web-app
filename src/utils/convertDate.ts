export const convertDate = (date: Date | null) => {
    if (!date) {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1;
        const day = currentDate.getDate();

        return `${year}-${month}-${day}`;
    }
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${day}-${month}-${year}`;
}
export function getOrderStatus(status) {
    switch (status) {
        case 'PLACED':
            return (
                <span className="capitalize py-1 px-2 rounded-sm text-xs text-sky-600 bg-sky-100">
                    {status.replaceAll('_','').toLowerCase()}     
                </span>
            )
        case 'CONFIRMED':
            return (
                <span className="capitalize py-1 px-2 rounded-sm text-xs text-orange-600 bg-orange-100">
                    {status.replaceAll('_','').toLowerCase()}     
                </span>
            )
        case 'SHIPPED':
            return (
                <span className="capitalize py-1 px-2 rounded-sm text-xs text-teal-400 bg-teal-100">
                    {status.replaceAll('_','').toLowerCase()}     
                </span>
            )
        case 'OUT_FOR_DELIVERY':
            return (
                <span className="capitalize py-1 px-2 rounded-sm text-xs text-yellow-600 bg-yellow-100">
                    {status.replaceAll('_','').toLowerCase()}     
                </span>
            )
        case 'DELIVERED':
            return (
                <span className="capitalize py-1 px-2 rounded-sm text-xs text-green-600 bg-green-100">
                    {status.replaceAll('_','').toLowerCase()}     
                </span>
            )
        default:
            return (
                <span className="capitalize py-1 px-2 rounded-sm text-xs text-gray-400 bg-gray-100">
                    {status.replaceAll('_','').toLowerCase()}     
                </span>
            )

    }
}
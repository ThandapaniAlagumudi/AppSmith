export default {
	
	idConverter: (num) => {
		let str = num.toString();
		let leadingZeros = "00000".substring(0, 5 - str.length);
		return 'C' + leadingZeros + str;
	},
	
	getCustomers: async () => {
		const customers = await getCustomers.run();

		return customers.map(c => {
			return {
				ID: this.idConverter(c.id),
				CustomerID: c.id,
				Name: c.first_name + ' ' + c.last_name,
				Phone: c.phone,
				Email: c.email,
				BillingAddress: `${c.address1}${ c.city || ''}${ c.country || ''}`,
				ShippingAddress: `${c.address1}${ c.city || ''}${ c.country || ''}`,
			}
		})
	},
	
	getCustomerOrders: async () => {
		const customerOrders = await getCustomerOrders.run();

		const data = customerOrders.map(o => {
			return {
				OrderId: o.id,
				OrderDate: new Date(o.created).toDateString(),
				Items: o.order_line_count,
				Amount: o.total.toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
				Status: o.label
			}
		})
		
		return data;
	}
}
import React from 'react'

const Card = ({ products }) => {

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 gap-5">
                    {
                        products.map(product => {
                            return <div className="group relative border rounded-md" key={product.id}>
                                <div className="w-full overflow-hidden rounded-t-md bg-gray-200 pt-3">
                                    <img src={product.img} className="h-full mx-auto mix-blend-multiply" />
                                </div>
                                <div className="py-4 flex justify-between px-3">
                                    <div>
                                        <h3 className="text-sm text-gray-700">{product.name}</h3>
                                        <h2 className="text-lg text-gray-700 font-bold">{product.brand}</h2>
                                        <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">₹{product.price}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>

    )
}

export default Card
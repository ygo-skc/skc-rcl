import React, { FC, SyntheticEvent, useCallback } from 'react'

export type ProductImageProps = {
	productID: string
	variant: 'original' | 'lg' | 'md' | 'sm' | 'x-sm' | 'tn'
	loading?: 'lazy' | 'eager'
}

const ProductImage: FC<ProductImageProps> = ({ productID, variant, loading = 'eager' }) => {
	const onErrorCB = useCallback(
		(e: SyntheticEvent<HTMLImageElement, Event>) => {
			e.currentTarget.src = 'https://images.thesupremekingscastle.com/products/tn/RA01.png' // TODO: update me
		},
		[productID, variant]
	)

	return (
		<div>
			<img
				loading={loading}
				src={`https://images.thesupremekingscastle.com/products/${variant}/${productID}.png`}
				onError={onErrorCB}
				width='100%'
				height='auto'
				alt={`${productID} Image`}
			/>
		</div>
	)
}

export default ProductImage

import React, { FC, SyntheticEvent, useCallback } from 'react'

export type ProductImageProps = {
	productID: string
	variant: 'original' | 'lg' | 'md' | 'sm' | 'x-sm' | 'tn'
	loading?: 'lazy' | 'eager'
	className?: string
}

const ProductImage: FC<ProductImageProps> = ({ productID, variant, className, loading = 'eager' }) => {
	const onErrorCB = useCallback(
		(e: SyntheticEvent<HTMLImageElement, Event>) => {
			e.currentTarget.src = `https://images.thesupremekingscastle.com/products/${variant}/default-product-image.png`
		},
		[productID, variant]
	)

	return (
		<img
			className={className}
			role='presentation'
			loading={loading}
			src={`https://images.thesupremekingscastle.com/products/${variant}/${productID}.png`}
			onError={onErrorCB}
			width='100%'
			height='auto'
			alt={`Product - ${productID}`}
		/>
	)
}

export default ProductImage

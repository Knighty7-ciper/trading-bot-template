type TBrandLogoProps = {
    width?: number;
    height?: number;
    fill?: string;
    className?: string;
};

export const BrandLogo = ({ width = 120, height = 32, className = '' }: TBrandLogoProps) => {
    return (
        <img
            src='/assets/brand/levisfx-logo.webp'
            alt='LevisFX'
            width={width}
            height={height}
            className={className}
            style={{ objectFit: 'contain' }}
        />
    );
};

import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { Product } from "@/types/Product";
import { Variant } from "@/types/Product";

interface ProductContextType {
  productDetails: any;
  loading: boolean;
  selectedVariant: Variant | null;
  setSelectedVariant: (variant: Variant) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({
  children,
}: {
  children: React.JSX.Element;
}) => {
  const [productDetails, setProductDetails] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(null);

  useEffect(() => {
    if (productDetails?.variants) {
      setSelectedVariant(productDetails.variants[0]);
    }
  }, [productDetails]);

  const fetchProductDetails = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://s8hemrsz5o.to.intercept.rest/productDetails"
      );
      setProductDetails(response.data.product);
    } catch (error: Error | unknown) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        productDetails,
        loading,
        selectedVariant,
        setSelectedVariant,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return context;
};

import Grid from "@fb-components/common/Grid";
import MarketplaceCard from "@fb-components/globals/MarketplaceCard";
import { useGetProducts } from "@fb-features-recoil/marketplace";

const ContainerGetListProducts = () => {
  const { data } = useGetProducts();
  return (
    <Grid repeatColumns={3} gap="15px">
      {data.map((e, i) => (
        <MarketplaceCard
          key={i}
          image={e.image}
          price={`S/.${e.price}`}
          description={`${e.description.substring(0, 60)}...`}
          location={e.location}
        />
      ))}
    </Grid>
  );
};

export default ContainerGetListProducts;

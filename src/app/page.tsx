import { Container } from "@/components/Container";
import HomeBis from "@/components/Home";
import LogoCloud from "@/components/LogoCloud";

export default async function Home() {
  return (
    <div>
      <Container>
        <HomeBis />

        <LogoCloud />
      </Container>
    </div>
  );
}

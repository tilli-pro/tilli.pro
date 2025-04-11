import { cn } from "@/lib/utils";

import "server-only";

export type NextPage<P = {}, SP = {}> = React.FC<{
  params: Promise<P>;
  searchParams: Promise<SP>;
}>;

interface PageProps {
  as?: "div" | "section" | "article" | "main";
  className?: string;
  layout?: `grid:${number}x${number}` | `flex:${"row" | "column"}`;
}
const Page: React.FC<React.PropsWithChildren<PageProps>> = ({
  as = "main",
  children,
  className,
}) => {
  const Wrapper = as;

  return (
    <Wrapper className={cn("-mt-20", "mx-auto max-w-4xl p-4 pt-32", className)}>
      {children}
    </Wrapper>
  );
};

export default Page;

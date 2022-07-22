import {
  GridLayout,
  IconButton,
  IconFilledChevronLeft,
  IconFilledChevronRight,
  Scroll,
  TextBlock,
} from "newskit";
import React from "react";
import { SectionProps } from "./types";

export const Section = ({ title, children }: SectionProps) => {
  const [canScrollStart, setCanScrollStart] = React.useState(false);
  const [canScrollEnd, setCanScrollEnd] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scrollPrev = () => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.scrollLeft -= 320;
    }
  };

  const scrollNext = () => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.scrollLeft += 320;
    }
  };

  const checkForScrollPosition = () => {
    /* istanbul ignore if */
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollStart(scrollLeft > 0);
    setCanScrollEnd(scrollWidth - clientWidth - scrollLeft > 0);
  };

  React.useLayoutEffect(checkForScrollPosition);

  React.useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", checkForScrollPosition);
    }
    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener("scroll", checkForScrollPosition);
      }
    };
  });

  const showScrollArrows = canScrollStart || canScrollEnd;

  return (
    <GridLayout
      rowGap="space040"
      overrides={{
        paddingInline: { xs: "space050", md: "space080" },
        maxWidth: "1480px",
        width: "100%",
        marginInline: "auto",
      }}
    >
      <GridLayout columns="1fr auto auto" columnGap="space020">
        <TextBlock
          typographyPreset="editorialHeadline070"
          stylePreset="inkBase"
        >
          {title}
        </TextBlock>
        {showScrollArrows && (
          <>
            <IconButton
              onClick={scrollPrev}
              disabled={!canScrollStart}
              overrides={{ stylePreset: "iconButtonOutlinedPrimary" }}
            >
              <IconFilledChevronLeft />
            </IconButton>
            <IconButton
              onClick={scrollNext}
              disabled={!canScrollEnd}
              overrides={{ stylePreset: "iconButtonOutlinedPrimary" }}
            >
              <IconFilledChevronRight />
            </IconButton>
          </>
        )}
      </GridLayout>

      <GridLayout>
        <Scroll ref={scrollRef}>{children}</Scroll>
      </GridLayout>
    </GridLayout>
  );
};

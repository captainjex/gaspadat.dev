<template>
  <h1 class="text-6xl tracking-widest font-extrabold text-primary italic" :class="$style.shadowTitle">
    g<span :class="$style.shadowUnderline">as</span>padat
  </h1>
</template>

<style module>
.shadowTitle {
  text-shadow: -2px -2px 0px theme('colors.gray.100'),
    2px 2px 0px theme('colors.gray.100'),
    6px 6px 0px theme('colors.accent');
}

.shadowUnderline {
  position: relative;
}
.shadowUnderline::after {
  position: absolute;
  content: "";
  bottom: 2px;
  left: 0;
  right: 4px;
  width: calc(100% - 8px);
  height: 4px;
  background: theme('colors.accent');
  transform: skewX(-16deg);
}
</style>

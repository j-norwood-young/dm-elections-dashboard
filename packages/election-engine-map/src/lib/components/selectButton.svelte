<div class="electionengine-selectbutton-component-wrapper">
  <slot />
</div>

<style>
  .electionengine-selectbutton-component-wrapper {
    border: 1px solid #cbcbcb;
    border-radius: 9px;
    font-size: 14px;
    color: #cbcbcb;
    width: max-content;
    margin-bottom: 1rem;
  }

  @media (width < 420px) {
    .electionengine-selectbutton-component-wrapper {
      font-size: 11px;
      border: 0.76px solid #cbcbcb;
      border-radius: 6.85px;
    }
  }
</style>

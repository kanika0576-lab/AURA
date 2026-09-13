// OpenStreetMap prototype settings. Public endpoints are suitable for a hackathon demo.
window.AURA_MAP_PROVIDER = 'openstreetmap';

const auraMapStyles = document.createElement('style');
auraMapStyles.textContent = `
  #mapCanvas { position:absolute; inset:0; z-index:0; }
  .osm-ready .roads, .osm-ready .zone, .osm-ready > svg,
  .osm-ready .place, .osm-ready .pin { display:none; }
  .osm-ready .live, .osm-ready .next { z-index:3; }
  .mapbox-notice { position:absolute; z-index:5; left:50%; top:50%; transform:translate(-50%,-50%); width:min(320px,82%); padding:17px; border-radius:10px; background:#fffdf9ed; box-shadow:0 10px 26px #24254524; text-align:center; color:#29284a; font-size:12px; line-height:1.5; }
  .mapbox-notice b,.mapbox-notice span { display:block; }.mapbox-notice b { margin-bottom:4px; }
  .detail-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:12px; margin-top:18px; }
  .detail-grid > div { background:var(--surface); border:1px solid var(--line); border-radius:11px; padding:16px; }
  .detail-grid b,.detail-grid small { display:block; }.detail-grid b { font-size:12px; margin:8px 0 4px; }.detail-grid small { color:var(--muted); font-size:10px; line-height:1.45; }
  .detail-icon { color:var(--violet); font-size:18px; }.location-button { margin-top:13px; border:1px solid var(--line); background:var(--surface); color:var(--violet); border-radius:6px; padding:9px 12px; font:600 11px inherit; cursor:pointer; }
  .nearby-title { display:flex; align-items:end; justify-content:space-between; gap:12px; }.nearby-title p { margin:0; color:var(--muted); font-size:11px; }
  body.dark .mapbox-notice { background:#28283fed; color:#f0effb; }
  @media(max-width:700px){.detail-grid{grid-template-columns:1fr}.nearby-title{align-items:start;flex-direction:column}}
`;
document.head.appendChild(auraMapStyles);

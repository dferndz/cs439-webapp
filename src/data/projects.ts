type Project = {
  name: string;
  description?: string;
  info_site_name?: string;
  active?: boolean;
};

const projects: Project[] = [
  {
    name: "P1",
    description: "Initial project",
    info_site_name: "cs439_f21_p1",
  },
  {
    name: "P2",
    info_site_name: "cs439_f21_p2",
  },
  {
    name: "P3",
    info_site_name: "cs439_f21_p3",
  },
  {
    name: "P4",
    info_site_name: "cs439_f21_p4",
  },
  {
    name: "P5",
    info_site_name: "cs439_f21_p5",
  },
  {
    name: "P6",
    info_site_name: "cs439_f21_p6",
  },
  {
    name: "P7",
    info_site_name: "cs439_f21_p7",
  },
  {
    name: "P8",
    info_site_name: "cs439_f21_p8",
  },
  {
    name: "P9",
    info_site_name: "cs439_f21_p9",
  },
  {
    name: "PA",
    info_site_name: "cs439_f21_pa",
  },
  {
    name: "PB",
    info_site_name: "cs439_f21_pb",
    active: true,
    description: "Final project",
  },
];

export default projects;
export { projects };
export type { Project };

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
    description: "Cooperative multithreading",
  },
  {
    name: "P3",
    info_site_name: "cs439_f21_p3",
    description: "Premptive multithreading",
  },
  {
    name: "P4",
    info_site_name: "cs439_f21_p4",
    description: "Synchronization primitives",
  },
  {
    name: "P5",
    info_site_name: "cs439_f21_p5",
    description: "File systems",
  },
  {
    name: "P6",
    info_site_name: "cs439_f21_p6",
    description: "Cache",
  },
  {
    name: "P7",
    info_site_name: "cs439_f21_p7",
    description: "Virtual memory",
  },
  {
    name: "P8",
    info_site_name: "cs439_f21_p8",
    description: "System calls",
  },
  {
    name: "P9",
    info_site_name: "cs439_f21_p9",
    description: "Fork and exec",
    active: true,
  },
  {
    name: "PA",
    info_site_name: "cs439_f21_pa",
    description: "Final project",
  },
  {
    name: "PB",
    info_site_name: "cs439_f21_pb",
    description: "Final project",
  },
];

export default projects;
export { projects };
export type { Project };

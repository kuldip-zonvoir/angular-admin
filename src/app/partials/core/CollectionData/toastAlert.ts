export var toasts = [
  {
    id: "1",
    title: "Success",
    toast: {
      severity: "success",
      summary: "Success",
      detail: "Message Content",
    },
  },
  {
    id: "2",
    title: "Infomation",
    toast: {
      severity: "info",
      summary: "Info",
      detail: "Message Content",
    },
  },
  {
    id: "3",
    title: "Warning",
    toast: {
      severity: "warn",
      summary: "Warn",
      detail: "Message Content",
    },
  },
  {
    id: "4",
    title: "Error",
    toast: {
      severity: "error",
      summary: "Error",
      detail: "Message Content",
    },
  },
  {
    id: "5",
    title: "Top Left",
    toast: {
      key: "tl",
      severity: "info",
      summary: "Info",
      detail: "Message Content",
    },
  },
  {
    id: "6",
    title: "Top Center",
    toast: {
      key: "tc",
      severity: "info",
      summary: "Info",
      detail: "Message Content",
    },
  },
  {
    id: "7",
    title: "Multiple",
    toast: [
      { severity: "info", summary: "Message 1", detail: "Message Content" },
      { severity: "info", summary: "Message 2", detail: "Message Content" },
      { severity: "info", summary: "Message 3", detail: "Message Content" },
    ],
  },
  {
    id: "8",
    title: "Sticky",
    toast: {
      severity: "info",
      summary: "Sticky",
      detail: "Message Content",
      sticky: true,
    },
  },
  {
    id: "9",
    title: "Bottom Center",
    toast: {
      key: "bc",
      severity: "info",
      summary: "Info",
      detail: "Message Content",
    },
  },
  {
    id: "10",
    title: "Confirm",
    toast: {
      key: "c",
      sticky: true,
      severity: "warn",
      summary: "Are you sure?",
      detail: "Confirm to proceed",
    },
  },
];

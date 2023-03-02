describe("App", () => {
  it("window is available", () => {
    expect(window).toBeDefined();
  });
});

// error TS1208: 'App.spec.ts' cannot be compiled under '--isolatedModules'
// because it is considered a global script file.
// Add an import, export, or an empty 'export {}' statement to make it a module.
export {};

/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => StatusBarOrganizer
});
module.exports = __toCommonJS(main_exports);
var import_obsidian3 = require("obsidian");

// src/spooler.ts
var Spooler = class {
  constructor(plugin, callback) {
    this.plugin = plugin;
    this.mutex = false;
    this.spooler = 0;
    this.callback = callback;
    this.observer = new MutationObserver((list, _) => {
      if (!this.mutex && list.some(
        (mutation) => mutation.type == "childList" && mutation.addedNodes.length > 0
      )) {
        this.spoolFix(0);
      }
    });
    this.spoolFix(5e3);
  }
  /**
   * Disable automatic spooling.
   */
  disableObserver() {
    this.observer.disconnect();
  }
  /**
   * Enable automatic spooling.
   */
  enableObserver() {
    this.observer.observe(this.plugin.statusBar, { childList: true });
  }
  /**
   * Schedule status bar elements to be reordered.
   * 
   * @param timeout 
   */
  spoolFix(timeout = 1e3) {
    clearTimeout(this.spooler);
    this.spooler = window.setTimeout(() => {
      if (this.mutex) {
        this.spoolFix();
      } else {
        this.mutex = true;
        this.disableObserver();
        this.callback(this.plugin);
        this.enableObserver();
        this.mutex = false;
      }
    }, timeout);
  }
};

// src/parser.ts
var ignoredClasses = [
  "mod-clickable",
  "status-bar-item",
  "statusbar-organizer-hidden"
];
function getStatusBarElements(statusBar) {
  const elements = [];
  const pluginElementCount = {};
  Array.from(statusBar.children).forEach((element) => {
    let id = element.getAttribute("data-statusbar-organizer-id");
    let name, index;
    if (id == null) {
      name = Array.from(element.classList).filter((x) => !ignoredClasses.contains(x)).join("-");
      index = name in pluginElementCount ? pluginElementCount[name] + 1 : 1;
      id = generateElementId(name, index);
      element.setAttribute("data-statusbar-organizer-id", id);
    } else {
      const parsed = parseElementId(id);
      name = parsed.name;
      index = parsed.index;
    }
    pluginElementCount[name] = Math.max(
      index,
      name in pluginElementCount ? pluginElementCount[name] : 0
    );
    elements.push({
      name,
      index,
      id,
      element
    });
  });
  return elements;
}
function generateElementId(name, index) {
  return `${name};${index}`;
}
function parseElementId(id) {
  const parts = id.split(";");
  const index = Number.parseInt(parts.pop());
  const name = parts.join(";");
  return {
    name,
    index
  };
}
function generatePresetId(preset) {
  return preset.replace(/-/g, "\\-").replace(/\s/g, "-");
}

// src/presets.ts
var import_obsidian2 = require("obsidian");

// src/rows.ts
var import_obsidian = require("obsidian");
var dragging;
async function initializeRows(plugin, settingsContainer) {
  settingsContainer.empty();
  dragging = false;
  const { rows, barStatus } = await consolidateSettingsAndElements(plugin);
  const rowsContainer = document.createElement("div");
  rowsContainer.addClass("statusbar-organizer-rows-container");
  settingsContainer.appendChild(rowsContainer);
  const nameCollisions = {};
  for (const element of rows) {
    if (element.name in nameCollisions)
      nameCollisions[element.name]++;
    else
      nameCollisions[element.name] = 0;
  }
  for (const row of rows) {
    const currentStatus = barStatus[row.id];
    const entry = document.createElement("div");
    entry.addClass("statusbar-organizer-row");
    if (!currentStatus.exists)
      entry.addClass("statusbar-organizer-row-disabled");
    if (!currentStatus.visible)
      entry.addClass("statusbar-organizer-row-hidden");
    entry.setAttribute("data-statusbar-organizer-id", row.id);
    row.entry = entry;
    rowsContainer.appendChild(entry);
    const handle = document.createElement("span");
    handle.addClass("statusbar-organizer-row-handle");
    handle.addEventListener(
      "mousedown",
      (event) => handleMouseDown(event, plugin, barStatus, settingsContainer, rowsContainer, rows, row)
    );
    entry.appendChild(handle);
    const formattedName = row.name.replace(/^plugin-(obsidian-)?/, "").split("-").map((x) => x.charAt(0).toUpperCase() + x.slice(1)).join(" ") + (nameCollisions[row.name] ? ` (${row.index})` : "");
    const titleSpan = document.createElement("span");
    titleSpan.textContent = formattedName;
    entry.appendChild(titleSpan);
    const previewSpan = document.createElement("span");
    previewSpan.addClass("statusbar-organizer-row-preview");
    if (currentStatus.exists) {
      previewSpan.innerHTML = row.element.innerHTML;
    }
    entry.appendChild(previewSpan);
    const visibilitySpan = document.createElement("span");
    visibilitySpan.addClass("statusbar-organizer-row-visibility");
    visibilitySpan.onclick = () => {
      if (currentStatus.exists)
        toggleVisibility(plugin, barStatus, row);
      else
        removeOrphan(plugin, rowsContainer, barStatus, row);
    };
    (0, import_obsidian.setIcon)(visibilitySpan, currentStatus.exists ? currentStatus.visible ? "eye" : "eye-off" : "trash-2");
    entry.appendChild(visibilitySpan);
  }
  return {
    rows,
    barStatus,
    rowsContainer
  };
}
async function toggleVisibility(plugin, barStatus, row) {
  var _a, _b, _c, _d;
  const status = barStatus[row.id];
  if (status.visible = !status.visible) {
    (_a = row.element) == null ? void 0 : _a.removeClass("statusbar-organizer-element-hidden");
    (_b = row.entry) == null ? void 0 : _b.removeClass("statusbar-organizer-row-hidden");
    (0, import_obsidian.setIcon)(row.entry.children[3], "eye");
  } else {
    (_c = row.element) == null ? void 0 : _c.addClass("statusbar-organizer-element-hidden");
    (_d = row.entry) == null ? void 0 : _d.addClass("statusbar-organizer-row-hidden");
    (0, import_obsidian.setIcon)(row.entry.children[3], "eye-off");
  }
  savePreset(plugin, barStatus);
}
async function removeOrphan(plugin, rowsContainer, barStatus, row) {
  rowsContainer.removeChild(row.entry);
  delete barStatus[row.id];
  for (const [entryIndex, entry] of Array.from(rowsContainer.children).entries())
    barStatus[entry.getAttribute("data-statusbar-organizer-id")].position = entryIndex;
  savePreset(plugin, barStatus);
}
function cloneRow(settingsContainer, barStatus, rowsContainer, event, row) {
  const realEntry = row.entry;
  realEntry.addClass("statusbar-organizer-row-clone");
  const fauxEntry = document.createElement("div");
  fauxEntry.addClass("statusbar-organizer-row");
  fauxEntry.addClass("statusbar-organizer-row-drag");
  if (!barStatus[row.id].exists)
    fauxEntry.addClass("statusbar-organizer-row-disabled");
  if (!barStatus[row.id].visible)
    fauxEntry.addClass("statusbar-organizer-row-hidden");
  settingsContainer.appendChild(fauxEntry);
  fauxEntry.style.left = realEntry.getBoundingClientRect().left + "px";
  fauxEntry.style.top = realEntry.getBoundingClientRect().top + "px";
  fauxEntry.style.width = realEntry.offsetWidth + "px";
  for (const child of Array.from(realEntry.children)) {
    const fauxSpan = document.createElement("span");
    fauxSpan.className = child.className;
    fauxSpan.innerHTML = child.innerHTML;
    fauxEntry.appendChild(fauxSpan);
  }
  let offsetX = event.clientX - fauxEntry.getBoundingClientRect().left;
  let offsetY = event.clientY - fauxEntry.getBoundingClientRect().top;
  let index = Array.from(rowsContainer.children).indexOf(realEntry);
  return {
    stationaryRow: realEntry,
    movableRow: fauxEntry,
    offsetX,
    offsetY,
    index
  };
}
function deleteRowClone(settingsContainer, stationaryRow, movableRow) {
  stationaryRow.removeClass("statusbar-organizer-row-clone");
  settingsContainer.removeChild(movableRow);
}
function calculateRowIndex(event, rowsContainer, movableRow, stationaryRow, offsetX, offsetY, index) {
  movableRow.style.left = event.clientX - offsetX + "px";
  movableRow.style.top = event.clientY - offsetY + "px";
  const dist = movableRow.getBoundingClientRect().top - stationaryRow.getBoundingClientRect().top;
  if (Math.abs(dist) > stationaryRow.offsetHeight * 0.75) {
    const dir = dist / Math.abs(dist);
    const newIndex = Math.max(0, Math.min(index + dir, rowsContainer.children.length - 1));
    return newIndex;
  }
  return index;
}
function handlePositionChange(barStatus, rowsContainer, rows, row, stationaryRow, newIndex) {
  const passedEntry = rowsContainer.children[newIndex];
  const passedId = passedEntry.getAttribute("data-statusbar-organizer-id");
  const statusBarChangeRequired = barStatus[row.id].exists && barStatus[passedId].exists;
  if (statusBarChangeRequired && row.element) {
    const passedElement = rows.filter((x) => x.id == passedId)[0].element;
    const temp = passedElement.style.order;
    passedElement.style.order = row.element.style.order;
    row.element.style.order = temp;
  }
  rowsContainer.removeChild(stationaryRow);
  if (newIndex != rowsContainer.children.length)
    rowsContainer.insertBefore(stationaryRow, rowsContainer.children[newIndex]);
  else
    rowsContainer.appendChild(stationaryRow);
  for (const [entryIndex, entry] of Array.from(rowsContainer.children).entries())
    barStatus[entry.getAttribute("data-statusbar-organizer-id")].position = entryIndex;
}
function handleMouseDown(event, plugin, barStatus, settingsContainer, rowsContainer, rows, row) {
  if (dragging)
    return;
  dragging = true;
  let { stationaryRow, movableRow, offsetX, offsetY, index } = cloneRow(settingsContainer, barStatus, rowsContainer, event, row);
  function handleMouseMove(event2) {
    plugin.spooler.disableObserver();
    const newIndex = calculateRowIndex(event2, rowsContainer, movableRow, stationaryRow, offsetX, offsetY, index);
    if (newIndex != index) {
      handlePositionChange(barStatus, rowsContainer, rows, row, stationaryRow, newIndex);
      index = newIndex;
    }
    plugin.spooler.enableObserver();
  }
  window.addEventListener("mousemove", handleMouseMove);
  async function handleMouseUp() {
    deleteRowClone(settingsContainer, stationaryRow, movableRow);
    dragging = false;
    window.removeEventListener("mouseup", handleMouseUp);
    window.removeEventListener("mousemove", handleMouseMove);
    savePreset(plugin, barStatus);
  }
  window.addEventListener("mouseup", handleMouseUp);
}

// src/presets.ts
async function initializePresets(plugin, presetsContainer, settingsContainer) {
  presetsContainer.empty();
  if (plugin.settings.presetsOrder.length == 0) {
    plugin.settings.presetsOrder.push("Default");
    plugin.settings.presets["Default"] = {};
    plugin.settings.activePreset = "Default";
    await plugin.saveSettings();
  }
  if (!(plugin.settings.activePreset in plugin.settings.presets)) {
    plugin.settings.activePreset = plugin.settings.presetsOrder[0];
    await plugin.saveSettings();
  }
  for (let presetName of plugin.settings.presetsOrder) {
    const presetEntry = document.createElement("div");
    presetEntry.addClass("statusbar-organizer-preset");
    presetEntry.id = getPresetId(presetName);
    if (presetName == plugin.settings.activePreset)
      presetEntry.addClass("statusbar-organizer-preset-active");
    presetsContainer.appendChild(presetEntry);
    const nameField = document.createElement("input");
    nameField.addClass("statusbar-organizer-preset-name");
    nameField.value = presetName;
    nameField.setAttribute("size", nameField.value.length.toString());
    nameField.maxLength = 25;
    presetEntry.appendChild(nameField);
    const renameButton = document.createElement("span");
    renameButton.addClass("statusbar-organizer-preset-delete");
    (0, import_obsidian2.setIcon)(renameButton, "pencil");
    renameButton.addEventListener("click", async (event) => {
      event.stopPropagation();
      select();
      nameField.focus();
    });
    const rename = async () => {
      presetName = await renamePreset(plugin, presetEntry, nameField, presetName);
    };
    nameField.addEventListener("change", async () => rename());
    nameField.addEventListener("focusout", async () => rename());
    nameField.addEventListener("input", () => {
      nameField.setAttribute("size", Math.max(nameField.value.length, 1).toString());
    });
    presetEntry.appendChild(renameButton);
    const deleteButton = document.createElement("span");
    deleteButton.addClass("statusbar-organizer-preset-delete");
    (0, import_obsidian2.setIcon)(deleteButton, "x");
    deleteButton.addEventListener("click", async (event) => {
      event.stopPropagation();
      await deletePreset(plugin, presetsContainer, settingsContainer, presetName);
    });
    presetEntry.appendChild(deleteButton);
    const select = async () => {
      await switchPreset(plugin, presetEntry, presetName, settingsContainer);
    };
    presetEntry.addEventListener("click", async () => select());
  }
  const newPresetEntry = document.createElement("div");
  newPresetEntry.addClass("statusbar-organizer-preset");
  (0, import_obsidian2.setIcon)(newPresetEntry, "plus");
  newPresetEntry.addEventListener("click", () => addPreset(plugin, presetsContainer, settingsContainer));
  presetsContainer.appendChild(newPresetEntry);
}
async function addPreset(plugin, presetsContainer, settingsContainer) {
  const presetName = disambiguate("New Preset", plugin.settings.presetsOrder);
  plugin.settings.presets[presetName] = JSON.parse(JSON.stringify(plugin.settings.presets[plugin.settings.activePreset]));
  plugin.settings.presetsOrder.push(presetName);
  plugin.settings.activePreset = presetName;
  await plugin.saveSettings();
  await initializePresets(plugin, presetsContainer, settingsContainer);
}
async function deletePreset(plugin, presetsContainer, settingsContainer, presetName) {
  const currentIndex = plugin.settings.presetsOrder.indexOf(presetName);
  if (currentIndex > 0)
    plugin.settings.activePreset = plugin.settings.presetsOrder[currentIndex - 1];
  else if (currentIndex < plugin.settings.presetsOrder.length - 1)
    plugin.settings.activePreset = plugin.settings.presetsOrder[currentIndex + 1];
  else
    plugin.settings.activePreset = "Default";
  delete plugin.settings.presets[presetName];
  plugin.settings.presetsOrder = plugin.settings.presetsOrder.filter((x) => x != presetName);
  await plugin.saveSettings();
  await initializePresets(plugin, presetsContainer, settingsContainer);
  await initializeRows(plugin, settingsContainer);
}
async function renamePreset(plugin, presetEntry, nameField, presetName) {
  let newName = nameField.value.substring(0, 25).trim();
  const otherPresets = plugin.settings.presetsOrder.filter((x) => x != presetName);
  newName = newName == "" ? disambiguate("New Preset", otherPresets) : disambiguate(newName, otherPresets, 2, true);
  nameField.value = newName;
  nameField.setAttribute("size", newName.length.toString());
  if (newName == presetName)
    return presetName;
  if (presetName == plugin.settings.activePreset)
    plugin.settings.activePreset = newName;
  presetEntry.id = getPresetId(newName);
  plugin.settings.presets[newName] = plugin.settings.presets[presetName];
  delete plugin.settings.presets[presetName];
  plugin.settings.presetsOrder = plugin.settings.presetsOrder.map((x) => x == presetName ? newName : x);
  plugin.settings.activePreset = newName;
  await plugin.saveSettings();
  return newName;
}
async function switchPreset(plugin, presetEntry, presetName, settingsContainer) {
  var _a;
  (_a = document.getElementById(getPresetId(plugin.settings.activePreset))) == null ? void 0 : _a.removeClass("statusbar-organizer-preset-active");
  presetEntry.addClass("statusbar-organizer-preset-active");
  plugin.settings.activePreset = presetName;
  await plugin.saveSettings();
  await initializeRows(plugin, settingsContainer);
}
function disambiguate(presetName, presets, start = 1, allowNoNumber = false) {
  if (allowNoNumber && !presets.includes(presetName))
    return presetName;
  while (presets.includes(`${presetName} ${start}`))
    start++;
  return `${presetName} ${start}`;
}
function getPresetId(presetName) {
  return `statusbar-organizer-preset-${generatePresetId(presetName)}`;
}

// src/menu.ts
async function showSettings(plugin, topContainer) {
  topContainer.empty();
  const presetsContainer = document.createElement("div");
  presetsContainer.addClass("statusbar-organizer-presets-container");
  topContainer.appendChild(presetsContainer);
  const settingsContainer = document.createElement("div");
  settingsContainer.addClass("statusbar-organizer-rows-container-wrapper");
  topContainer.appendChild(settingsContainer);
  await initializePresets(plugin, presetsContainer, settingsContainer);
  await initializeRows(plugin, settingsContainer);
}
async function savePreset(plugin, currentBarStatus) {
  plugin.settings.presets[plugin.settings.activePreset] = currentBarStatus;
  await plugin.saveSettings();
}
async function consolidateSettingsAndElements(plugin) {
  const loadedElementStatus = plugin.settings.presets[plugin.settings.activePreset] || {};
  const unorderedStatusBarElements = getStatusBarElements(plugin.statusBar);
  const defaultElementStatus = {};
  for (const [index, statusBarElement] of unorderedStatusBarElements.entries()) {
    defaultElementStatus[statusBarElement.id] = {
      position: index,
      visible: true,
      exists: true
    };
  }
  const barStatus = {};
  for (const [index, status] of Object.entries(loadedElementStatus)) {
    status.exists = index in defaultElementStatus;
    barStatus[index] = status;
  }
  let insertPosition = Object.keys(barStatus).length + 1;
  for (const element of unorderedStatusBarElements) {
    if (element.id in barStatus)
      continue;
    const status = defaultElementStatus[element.id];
    status.position = insertPosition++;
    barStatus[element.id] = status;
  }
  const disabledStatusBarElements = Object.keys(loadedElementStatus).filter((x) => !barStatus[x].exists).map((x) => {
    const parsed = parseElementId(x);
    return {
      name: parsed.name,
      index: parsed.index,
      id: x
    };
  });
  const rows = unorderedStatusBarElements.concat(disabledStatusBarElements).map((x) => [x, barStatus[x.id].position]).sort((a, b) => a[1] - b[1]).map((x) => x[0]);
  savePreset(plugin, barStatus);
  plugin.spooler.spoolFix(0);
  return {
    rows,
    barStatus
  };
}

// src/organizer.ts
function fixOrder(plugin) {
  const elements = getStatusBarElements(plugin.statusBar);
  const status = plugin.settings.presets[plugin.settings.activePreset];
  const known = [];
  const orphans = [];
  for (const element of elements) {
    if (element.id in status) {
      const myStatus = status[element.id];
      known.push([element, myStatus.position]);
      if (myStatus.visible)
        element.element.removeClass("statusbar-organizer-element-hidden");
      else
        element.element.addClass("statusbar-organizer-element-hidden");
    } else {
      orphans.push(element.element);
    }
  }
  const orderedElements = known.sort((a, b) => a[1] - b[1]).map((x) => x[0].element);
  const allElements = orderedElements.concat(orphans);
  for (const [i, element] of allElements.entries())
    element.style.order = (i + 1).toString();
}

// main.ts
var DEFAULT_SETTINGS = {
  activePreset: "Default",
  presets: {
    "Default": {}
  },
  presetsOrder: ["Default"]
};
var StatusBarOrganizer = class extends import_obsidian3.Plugin {
  async onload() {
    await this.loadSettings();
    this.addSettingTab(new StatusBarSettingTab(this.app, this));
    this.statusBar = document.getElementsByClassName("status-bar")[0];
    this.spooler = new Spooler(this, fixOrder);
  }
  onunload() {
    this.spooler.disableObserver();
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
    const oldSettings = this.settings;
    if ("status" in oldSettings) {
      oldSettings.presets.default = oldSettings.status;
      delete oldSettings.status;
      this.settings = oldSettings;
      await this.saveSettings();
    }
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
};
var StatusBarSettingTab = class extends import_obsidian3.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  async display() {
    const { containerEl } = this;
    return showSettings(this.plugin, containerEl);
  }
};

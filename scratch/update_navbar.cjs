const fs = require('fs');

const path = 'src/components/Navbar.jsx';
let content = fs.readFileSync(path, 'utf8');

const oldColumns = `                      {/* RIGHT 3 COLUMNS: E-COMMERCE, ACCOUNTING, HR */}
                      <div className="nav-connectors-mega__columns">
                        {/* Column 1: E-COMMERCE */}
                        <div className="nav-connectors-col">
                          <div className="nav-connectors-col__header">
                            <span className="nav-connectors-col__title">E-COMMERCE</span>
                            <span className="nav-connectors-col__line" />
                          </div>
                          <div className="nav-connectors-col__list">
                            {connectorsData.ecommerce.map((c) => (
                              <ConnectorCardItem
                                key={c.id}
                                item={c}
                                hoveredId={hoveredConnector}
                                onHover={setHoveredConnector}
                                onClose={() => setOpenDropdown(null)}
                              />
                            ))}
                          </div>
                        </div>

                        {/* Column 2: ACCOUNTING */}
                        <div className="nav-connectors-col">
                          <div className="nav-connectors-col__header">
                            <span className="nav-connectors-col__title">ACCOUNTING</span>
                            <span className="nav-connectors-col__line" />
                          </div>
                          <div className="nav-connectors-col__list">
                            {connectorsData.accounting.map((c) => (
                              <ConnectorCardItem
                                key={c.id}
                                item={c}
                                hoveredId={hoveredConnector}
                                onHover={setHoveredConnector}
                                onClose={() => setOpenDropdown(null)}
                              />
                            ))}
                          </div>
                        </div>

                        {/* Column 3: HR */}
                        <div className="nav-connectors-col">
                          <div className="nav-connectors-col__header">
                            <span className="nav-connectors-col__title">HR</span>
                            <span className="nav-connectors-col__line" />
                          </div>
                          <div className="nav-connectors-col__list">
                            {connectorsData.hr.map((c) => (
                              <ConnectorCardItem
                                key={c.id}
                                item={c}
                                hoveredId={hoveredConnector}
                                onHover={setHoveredConnector}
                                onClose={() => setOpenDropdown(null)}
                              />
                            ))}
                          </div>
                        </div>
                      </div>`;

const newColumns = `                      {/* RIGHT 3 COLUMNS: E-COMMERCE, ACCOUNTING, HR + 4 NEW CATEGORIES */}
                      <div className="nav-connectors-mega__columns">
                        {/* Column 1: E-COMMERCE & PAYMENT */}
                        <div className="nav-connectors-col">
                          <div className="nav-connectors-col__group">
                            <div className="nav-connectors-col__header">
                              <span className="nav-connectors-col__title">E-COMMERCE</span>
                              <span className="nav-connectors-col__line" />
                            </div>
                            <div className="nav-connectors-col__list">
                              {connectorsData.ecommerce.map((c) => (
                                <ConnectorCardItem
                                  key={c.id}
                                  item={c}
                                  hoveredId={hoveredConnector}
                                  onHover={setHoveredConnector}
                                  onClose={() => setOpenDropdown(null)}
                                />
                              ))}
                            </div>
                          </div>

                          <div className="nav-connectors-col__group">
                            <div className="nav-connectors-col__header">
                              <span className="nav-connectors-col__title">PAYMENT</span>
                              <span className="nav-connectors-col__line" />
                            </div>
                            <div className="nav-connectors-col__list">
                              {connectorsData.payment.map((c) => (
                                <ConnectorCardItem
                                  key={c.id}
                                  item={c}
                                  hoveredId={hoveredConnector}
                                  onHover={setHoveredConnector}
                                  onClose={() => setOpenDropdown(null)}
                                />
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Column 2: ACCOUNTING & INVENTORY */}
                        <div className="nav-connectors-col">
                          <div className="nav-connectors-col__group">
                            <div className="nav-connectors-col__header">
                              <span className="nav-connectors-col__title">ACCOUNTING</span>
                              <span className="nav-connectors-col__line" />
                            </div>
                            <div className="nav-connectors-col__list">
                              {connectorsData.accounting.map((c) => (
                                <ConnectorCardItem
                                  key={c.id}
                                  item={c}
                                  hoveredId={hoveredConnector}
                                  onHover={setHoveredConnector}
                                  onClose={() => setOpenDropdown(null)}
                                />
                              ))}
                            </div>
                          </div>

                          <div className="nav-connectors-col__group">
                            <div className="nav-connectors-col__header">
                              <span className="nav-connectors-col__title">INVENTORY</span>
                              <span className="nav-connectors-col__line" />
                            </div>
                            <div className="nav-connectors-col__list">
                              {connectorsData.inventory.map((c) => (
                                <ConnectorCardItem
                                  key={c.id}
                                  item={c}
                                  hoveredId={hoveredConnector}
                                  onHover={setHoveredConnector}
                                  onClose={() => setOpenDropdown(null)}
                                />
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Column 3: HR, CRM & COMMUNICATION */}
                        <div className="nav-connectors-col">
                          <div className="nav-connectors-col__group">
                            <div className="nav-connectors-col__header">
                              <span className="nav-connectors-col__title">HR</span>
                              <span className="nav-connectors-col__line" />
                            </div>
                            <div className="nav-connectors-col__list">
                              {connectorsData.hr.map((c) => (
                                <ConnectorCardItem
                                  key={c.id}
                                  item={c}
                                  hoveredId={hoveredConnector}
                                  onHover={setHoveredConnector}
                                  onClose={() => setOpenDropdown(null)}
                                />
                              ))}
                            </div>
                          </div>

                          <div className="nav-connectors-col__group">
                            <div className="nav-connectors-col__header">
                              <span className="nav-connectors-col__title">CRM</span>
                              <span className="nav-connectors-col__line" />
                            </div>
                            <div className="nav-connectors-col__list">
                              {connectorsData.crm.map((c) => (
                                <ConnectorCardItem
                                  key={c.id}
                                  item={c}
                                  hoveredId={hoveredConnector}
                                  onHover={setHoveredConnector}
                                  onClose={() => setOpenDropdown(null)}
                                />
                              ))}
                            </div>
                          </div>

                          <div className="nav-connectors-col__group">
                            <div className="nav-connectors-col__header">
                              <span className="nav-connectors-col__title">COMMUNICATION</span>
                              <span className="nav-connectors-col__line" />
                            </div>
                            <div className="nav-connectors-col__list">
                              {connectorsData.communication.map((c) => (
                                <ConnectorCardItem
                                  key={c.id}
                                  item={c}
                                  hoveredId={hoveredConnector}
                                  onHover={setHoveredConnector}
                                  onClose={() => setOpenDropdown(null)}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>`;

// Normalize newlines for search & replace
const normalize = (str) => str.replace(/\r\n/g, '\n');
const normalizedContent = normalize(content);
const normalizedOld = normalize(oldColumns);
const normalizedNew = normalize(newColumns);

if (normalizedContent.includes(normalizedOld)) {
  const updated = normalizedContent.replace(normalizedOld, normalizedNew);
  fs.writeFileSync(path, updated, 'utf8');
  console.log('Successfully updated Navbar.jsx columns!');
} else {
  console.log('Could not find exact match in Navbar.jsx');
}

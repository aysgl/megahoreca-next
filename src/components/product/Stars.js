
export default function Stars({ stars }) {
    return (
        <p className="text-secondary">
            {stars === 1 &&
                <small>
                    <i className="icon-surface1-51 text-warning" />
                    <i className="icon-surface1-51 text-light" />
                    <i className="icon-surface1-51 text-light" />
                    <i className="icon-surface1-51 text-light" />
                    <i className="icon-surface1-51 text-light pe-2" />{stars}
                </small>
            }
            {stars === 2 &&
                <small>
                    <i className="icon-surface1-51 text-warning" />
                    <i className="icon-surface1-51 text-warning" />
                    <i className="icon-surface1-51 text-light" />
                    <i className="icon-surface1-51 text-light" />
                    <i className="icon-surface1-51 text-light pe-2" />{stars}
                </small>
            }
            {stars === 3 &&
                <small>
                    <i className="icon-surface1-51 text-warning" />
                    <i className="icon-surface1-51 text-warning" />
                    <i className="icon-surface1-51 text-warning" />
                    <i className="icon-surface1-51 text-light" />
                    <i className="icon-surface1-51 text-light pe-2" />{stars}
                </small>
            }
            {stars === 4 &&
                <small>
                    <i className="icon-surface1-51 text-warning" />
                    <i className="icon-surface1-51 text-warning" />
                    <i className="icon-surface1-51 text-warning" />
                    <i className="icon-surface1-51 text-warning" />
                    <i className="icon-surface1-51 text-light pe-2" />{stars}
                </small>
            }
            {stars === 5 &&
                <small>
                    <i className="icon-surface1-51 text-warning" />
                    <i className="icon-surface1-51 text-warning" />
                    <i className="icon-surface1-51 text-warning" />
                    <i className="icon-surface1-51 text-warning" />
                    <i className="icon-surface1-51 text-warning pe-2" />{stars}
                </small>
            }
        </p>
    )
}

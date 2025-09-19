"use client";
import React, { useState } from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import Images from "../../assets/Images";

// ---- Input Styles ----
const inputBase =
    "p-2 h-10 rounded-lg bg-neutral-100/80 border border-neutral-200 w-full text-sm text-neutral-800 placeholder:text-neutral-400 focus-visible:ring-1 focus-visible:ring-neutral-300 focus-visible:outline-none";

const textAreaBase =
    "p-2 min-h-24 rounded-lg bg-neutral-100/80 border border-neutral-200 w-full text-sm text-neutral-800 placeholder:text-neutral-400 focus-visible:ring-1 focus-visible:ring-neutral-300 focus-visible:outline-none";

// ---- Field Wrapper ----
function FieldWrapper({ label, children }) {
    return (
        <div className="space-y-2 ">
            <label className="text-sm font-medium text-gray-700 ">{label}</label>
            {children}
        </div>
    );
}

export default function MilestoneForm() {
    const [isPreview, setIsPreview] = useState(false);

    const initialValues = {
        // General project details
        projectTitle: "",
        gig: "",
        techStack: [],
        description: "",
        files: null,

        // Milestones (array)
        milestones: [
            {
                milestoneTitle: "",
                description: "",
                amount: "",
                timeline: "",
                startDate: "",
                endDate: "",
                deliverables: "",
                dependencies: "",
                paymentType: "",
                files: null,
            },
        ],

        // Offer & Discount
        offer: {
            description: "",
            validDay: "1 day",
            discount: "3%",
        },
    };

    return (
        <div className="w-full min-h-screen bg-gray-50 p-8">
            <div className=" mx-auto bg-white shadow rounded-xl p-8">
                <h1 className="text-2xl text-center">{isPreview ? "Project Milestone Preview" : "Create Project Milestone"}</h1>
                <p className="text-gray-500 text-center mb-4">
                    {isPreview ? "Milestones that map your mission to success." : "Structure your success — one milestone at a time."}
                </p>

                <Formik
                    initialValues={initialValues}
                    onSubmit={(values) => {
                        console.log("Final Data:", values);
                    }}
                >
                    {({ values, setFieldValue }) => (
                        <Form className="space-y-10">
                            {/* ---------------- General Project Details ---------------- */}
                            <section className="space-y-6">
                                <h2 className="text-lg text-center font-semibold mb-4">
                                    General Project Details
                                </h2>

                                <FieldWrapper label="Project Title">
                                    <Field
                                        name="projectTitle"
                                        type="text"
                                        placeholder="Enter your project title"
                                        className={inputBase}
                                        readOnly={isPreview}
                                    />
                                </FieldWrapper>

                                <FieldWrapper label="Select Gig">
                                    <Field
                                        as="select"
                                        name="gig"
                                        className={inputBase}
                                        disabled={isPreview}
                                    >
                                        <option value="">Select gig</option>
                                        <option value="frontend">Frontend Development</option>
                                        <option value="backend">Backend Development</option>
                                        <option value="fullstack">Fullstack Project</option>
                                    </Field>
                                </FieldWrapper>

                                {/* <FieldWrapper label="Technology Stack">
                  <div className="flex flex-wrap gap-2 border border-gray-300 rounded-md p-2">
                    {values.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-purple-500 text-white px-2 py-1 rounded-md flex items-center gap-1 text-sm"
                      >
                        {tech}
                        {!isPreview && (
                          <button
                            type="button"
                            onClick={() =>
                              setFieldValue(
                                "techStack",
                                values.techStack.filter((t) => t !== tech)
                              )
                            }
                            className="ml-1 text-white hover:text-gray-200"
                          >
                            ✕
                          </button>
                        )}
                      </span>
                    ))}
                    {!isPreview && (
                      <select
                        onChange={(e) => {
                          const value = e.target.value;
                          if (value && !values.techStack.includes(value)) {
                            setFieldValue("techStack", [
                              ...values.techStack,
                              value,
                            ]);
                          }
                          e.target.value = "";
                        }}
                        className="flex-1 bg-transparent focus:outline-none text-sm"
                      >
                        <option value="">+ Add Technology</option>
                        {["React.js", "Node.js", "Express", "Next.js", "MongoDB"].map(
                          (tech) =>
                            !values.techStack.includes(tech) && (
                              <option key={tech} value={tech}>
                                {tech}
                              </option>
                            )
                        )}
                      </select>
                    )}
                  </div>
                </FieldWrapper> */}

                                <FieldWrapper label="Technology Stack">
                                    <div className="flex flex-wrap gap-2 border border-gray-300 rounded-md p-2">
                                        {values.techStack.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="bg-purple-500 text-white px-2 py-1 rounded-md flex items-center gap-1 text-sm"
                                            >
                                                {tech}
                                                {!isPreview && (
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            setFieldValue(
                                                                "techStack",
                                                                values.techStack.filter((t) => t !== tech)
                                                            )
                                                        }
                                                        className="ml-1 text-white hover:text-gray-200"
                                                    >
                                                        ✕
                                                    </button>
                                                )}
                                            </span>
                                        ))}

                                        {!isPreview && (
                                            <div className="flex items-center gap-2 flex-1">
                                                <input
                                                    type="text"
                                                    value={values.techStackInput || ""}
                                                    onChange={(e) => setFieldValue("techStackInput", e.target.value)}
                                                    placeholder="Enter technology"
                                                    className="flex-1 bg-transparent focus:outline-none text-sm"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        if (
                                                            values.techStackInput &&
                                                            !values.techStack.includes(values.techStackInput)
                                                        ) {
                                                            setFieldValue("techStack", [
                                                                ...values.techStack,
                                                                values.techStackInput,
                                                            ]);
                                                            setFieldValue("techStackInput", ""); // clear input
                                                        }
                                                    }}
                                                    className="text-sm bg-purple-500 text-white px-2 py-1 rounded-md"
                                                >
                                                    Add
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </FieldWrapper>


                                <FieldWrapper label="Project Description">
                                    <Field
                                        as="textarea"
                                        name="description"
                                        placeholder="Write project description..."
                                        rows={4}
                                        className={textAreaBase}
                                        readOnly={isPreview}
                                    />
                                </FieldWrapper>

                                <FieldWrapper label="Attach Files">
                                    <input
                                        type="file"
                                        onChange={(e) =>
                                            setFieldValue("files", e.currentTarget.files[0] || null)
                                        }
                                        className={inputBase}
                                        disabled={isPreview}
                                    />
                                </FieldWrapper>
                            </section>

                            {/* ---------------- Milestones Section ---------------- */}
                            <section>
                                <h2 className="text-lg text-center font-semibold mb-4">Milestones Section</h2>

                                <FieldArray name="milestones">
                                    {({ push, remove }) => (
                                        <div className="space-y-6">
                                            {values.milestones.map((m, idx) => (
                                                <div
                                                    key={idx}
                                                    className=" space-y-4"
                                                >
                                                    <FieldWrapper label="Milestone Title">
                                                        <Field
                                                            name={`milestones[${idx}].milestoneTitle`}
                                                            placeholder="Eg., UI Design Phase"
                                                            className={inputBase}
                                                            readOnly={isPreview}
                                                        />
                                                    </FieldWrapper>

                                                    <FieldWrapper label="Description">
                                                        <Field
                                                            as="textarea"
                                                            name={`milestones[${idx}].description`}
                                                            placeholder="Describe scope"
                                                            className={textAreaBase}
                                                            readOnly={isPreview}
                                                        />
                                                    </FieldWrapper>

                                                    <FieldWrapper label="Amount (₹/$)">
                                                        <Field
                                                            name={`milestones[${idx}].amount`}
                                                            placeholder="Enter Amount"
                                                            className={inputBase}
                                                            readOnly={isPreview}
                                                        />
                                                    </FieldWrapper>

                                                    <FieldWrapper label="Timeline (Days)">
                                                        <Field
                                                            name={`milestones[${idx}].timeline`}
                                                            placeholder="Eg. 5 days"
                                                            className={inputBase}
                                                            readOnly={isPreview}
                                                        />
                                                    </FieldWrapper>

                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        <FieldWrapper label="Start Date">
                                                            <Field
                                                                type="date"
                                                                name={`milestones[${idx}].startDate`}
                                                                className={inputBase}
                                                                readOnly={isPreview}
                                                            />
                                                        </FieldWrapper>
                                                        <FieldWrapper label="End Date">
                                                            <Field
                                                                type="date"
                                                                name={`milestones[${idx}].endDate`}
                                                                className={inputBase}
                                                                readOnly={isPreview}
                                                            />
                                                        </FieldWrapper>
                                                    </div>

                                                    <FieldWrapper label="Deliverables">
                                                        <Field
                                                            as="textarea"
                                                            name={`milestones[${idx}].deliverables`}
                                                            placeholder="Write deliverables..."
                                                            className={textAreaBase}
                                                            readOnly={isPreview}
                                                        />
                                                    </FieldWrapper>

                                                    <FieldWrapper label="Dependencies/Notes (On clients)">
                                                        <Field
                                                            as="textarea"
                                                            name={`milestones[${idx}].dependencies`}
                                                            placeholder="Write dependencies..."
                                                            className={textAreaBase}
                                                            readOnly={isPreview}
                                                        />
                                                    </FieldWrapper>

                                                    <FieldWrapper label="Payment Type">
                                                        <Field
                                                            as="select"
                                                            name={`milestones[${idx}].paymentType`}
                                                            className={inputBase}
                                                            disabled={isPreview}
                                                        >
                                                            <option value="">Select payment type</option>
                                                            <option value="fixed">Fixed Price</option>
                                                            <option value="hourly">Hourly</option>
                                                        </Field>
                                                    </FieldWrapper>

                                                    <FieldWrapper label="Attach Files">
                                                        <input
                                                            type="file"
                                                            onChange={(e) =>
                                                                setFieldValue(
                                                                    `milestones[${idx}].files`,
                                                                    e.currentTarget.files[0] || null
                                                                )
                                                            }
                                                            className={inputBase}
                                                            disabled={isPreview}
                                                        />
                                                    </FieldWrapper>

                                                    {!isPreview && values.milestones.length > 1 && (
                                                        <button
                                                            type="button"
                                                            onClick={() => remove(idx)}
                                                            className="text-red-500 text-sm"
                                                        >
                                                            Remove Milestone
                                                        </button>
                                                    )}
                                                </div>
                                            ))}

                                            {!isPreview && (
                                                <div className="flex justify-center items-center gap-2">
                                                    <img src={Images.Plus} alt="plus" className="w-4 h-4 mt-2" />
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            push({
                                                                milestoneTitle: "",
                                                                description: "",
                                                                amount: "",
                                                                timeline: "",
                                                                startDate: "",
                                                                endDate: "",
                                                                deliverables: "",
                                                                dependencies: "",
                                                                paymentType: "",
                                                                files: null,
                                                            })
                                                        }
                                                        className="mt-2 text-purple-600 text-sm "
                                                    >
                                                        Add Milestone
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </FieldArray>
                            </section>

                            {/* ---------------- Offer & Discount ---------------- */}
                            <section>
                                <h2 className="text-lg font-semibold mb-4 text-center">Offer & Discount</h2>

                                <FieldWrapper label="Offer Description">
                                    <Field
                                        as="textarea"
                                        name="offer.description"
                                        placeholder="Write description..."
                                        className={textAreaBase}
                                        readOnly={isPreview}
                                    />
                                </FieldWrapper>

                                <FieldWrapper label="Valid Day">
                                    <Field
                                        name="offer.validDay"
                                        className={inputBase}
                                        readOnly={isPreview}
                                    />
                                </FieldWrapper>

                                <FieldWrapper label="Discount %">
                                    <Field
                                        name="offer.discount"
                                        className={inputBase}
                                        readOnly={isPreview}
                                    />
                                </FieldWrapper>
                            </section>

                            {/* ---------------- Buttons ---------------- */}
                            <div className="flex flex-col gap-2 justify-between pt-6">
                                <button
                                    type="button"
                                    onClick={() => setIsPreview(!isPreview)}
                                    className={`w-full px-6 py-2 rounded-lg ${isPreview ? "bg-white border border-[#8E59E2] text-[#8E59E2] hover:text-white hover:bg-[#8E59E2] " : "text-white bg-[#8E59E2] hover:bg-purple-700"} `}
                                >
                                    {isPreview ? "Edit" : "Preview"}
                                </button>

                                {isPreview && (
                                    <button
                                        type="submit"
                                        className="w-full px-6 py-2 rounded-lg text-white bg-[#8E59E2] hover:bg-purple-700"
                                    >
                                        Send Proposal to Client
                                    </button>
                                )}
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

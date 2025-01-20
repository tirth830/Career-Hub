import React from "react";
import { useFormContext } from "react-hook-form";

const CustomForm = ({ fields, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useFormContext();

  return (
    <>
      <div className="py-5 bg-[#060C23] text-white">
        <h2 className="text-4xl text-center">Post a New Job</h2>
        <p className="text-lg mt-3 text-center">Fill out the form below to post a new job opening.</p>
      </div>
      <form className="grid gap-6 lg:px-28 px-6 py-5" onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field) => (
          <div key={field.name} className="space-y-2">
            <label
              htmlFor={field.name}
              className="block text-sm font-medium text-gray-700"
            >
              {field.label}
            </label>
            {field.input === "input" && (
              <input
                id={field.name}
                type={field.type || "text"}
                placeholder={field.placeholder}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                {...register(field.name)}
              />
            )}
            {field.input === "textarea" && (
              <textarea
                id={field.name}
                placeholder={field.placeholder}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                {...register(field.name)}
              />
            )}
            {field.input === "select" && (
              <select
                id={field.name}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                {...register(field.name)}
              >
                <option value="" disabled>
                  {field.placeholder}
                </option>
                {field.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.text}
                  </option>
                ))}
              </select>
            )}
            {errors[field.name] && (
              <p className="text-red-500 text-sm">
                {errors[field.name]?.message}
              </p>
            )}
          </div>
        ))}
        <div className="flex justify-end gap-4">
          <button
            type="button"
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-blue-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
            disabled={Object.values(getValues()).some((value) => !value)} // Disable if any field is empty
          >
            Post Job
          </button>
        </div>
      </form>
    </>
  );
};

export default CustomForm;
